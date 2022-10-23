// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let dirData = await fs.promises.readdir("blogdata");
  dirData = dirData.slice(0, parseInt(req.query.count));
  let allBlogs = [];
  for (let index = 0; index < dirData.length; index++) {
    const item = dirData[index];
    let myFile = await fs.promises.readFile(`blogdata/${item}`,'utf-8');
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs);
  // fs.readdir("blogdata", (err, data)=>{
  //   let allBlogs = [];
  //   data.forEach((item=>{
  //     fs.readFile(`blogdata/${item}`,'utf-8',(err, data)=>{
  //       allBlogs.push(data)
  //     })
  //   }))
  //   res.status(200).json(allBlogs);
  // })
}
