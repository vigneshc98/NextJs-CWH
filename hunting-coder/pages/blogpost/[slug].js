// import { useRouter } from 'next/router'
import React,{useEffect, useState} from 'react';
import * as fs from 'fs';

const Slug = (props) => {
    // const router = useRouter();
    // console.log(router.query);  //{slug: 'sluglsjdf'}
    // const {slug} = router.query;

    const [blog, setBlogs] = useState(props.myBlog);

    // useEffect(() => {
    //   if(!router.isReady) return;

    //   async function fetchData(){
    //     let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
    //     let parsedData= await data.json();
    //     setBlogs(parsedData)
    //   }
    //   fetchData();
    // }, [router.isReady])
    
  return (
    <div>
      <h1>{blog && blog.title}</h1>
      <hr />
      <h3>{blog && blog.content}</h3>
    </div>
  )
}

// ------------SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//   let slug = context.query.slug;
//   let data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
//   let myBlog= await data.json();
// return {
//   props: {myBlog}, // will be passed to the page component as props
// }
// }


// --------------STATIC SITE GENERATION
export async function getStaticPaths(context) {
  // return {
  //   paths: [
  //     {params: {slug: 'how-to-learn-javascript'}},
  //     {params: {slug: 'how-to-learn-nextjs'}},
  //   ],  
  //   fallback: true
  // }
  let allBlogs = await fs.promises.readdir('blogdata');
  allBlogs = allBlogs.map((item)=>{
    return {params: {slug: item.split('.')[0]}};
  })
  return {
    paths: allBlogs,
    fallback: true
  }
}

export async function getStaticProps(context) {
  const {slug} = context.params;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8');
  
  return {
    props: {myBlog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}

export default Slug