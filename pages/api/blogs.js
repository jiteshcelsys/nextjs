import * as fs from'fs';

export default function handler(req,res){
  console.log(fs);
console.log(req.query)
  fs.readdir('blogData',(err, data)=>{
    if(err){
      res.status(500).json({error:'Internal server error'});
    }
    console.log(data)
    res.status(200).json(data)
  })
  
}