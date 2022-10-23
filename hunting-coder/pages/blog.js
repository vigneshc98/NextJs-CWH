import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../styles/Blog.module.css'


const Blog = (props) => {

  const [blogs, setBlogs] = useState(props.allBlogs ? props.allBlogs: []);

  const [count, setCount] = useState(2)
 
  const fetchData = async () => {
      let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`)
      setCount(count + 2)
      let data = await d.json()
      setBlogs(data)
  };

  return (
    <div className={styles.container}>
      <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.totalBlogsLength !==blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        {
          blogs.map((data, key)=>{
            return     <div className="blogItem" key={key}>
            <Link href={`/blogpost/${data.slug}`}><a><h3>{data.title}</h3></a></Link>
            <p>{data.content.substr(0,150)}...</p>
            <button className={styles.btn}>Read More</button>
          </div>
          })
        }
</InfiniteScroll>

    
  </div>
  )
}

// ------------SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//     let data = await fetch('http://localhost:3000/api/blogs');
//     let allBlogs= await data.json();
//   return {
//     props: {allBlogs}, // will be passed to the page component as props
//   }
// }

// -------------STATIC SITE GENERATION
export async function getStaticProps(context) {
  let dirData = await fs.promises.readdir("blogdata");
  let totalBlogsLength = dirData.length;
  let allBlogs = [];
  for (let index = 0; index < 5; index++) {
    const item = dirData[index];
    let myFile = await fs.promises.readFile(`blogdata/${item}`,'utf-8');
    allBlogs.push(JSON.parse(myFile))
  }
  return {
    props: {allBlogs, totalBlogsLength}, // will be passed to the page component as props
  }
}

export default Blog