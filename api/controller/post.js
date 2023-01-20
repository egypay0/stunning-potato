import { db } from "../db.js"

export const getPosts = (req,res)=>{
console.log('gett Posts')
console.log(req.query.cat)
    const q = req.query.cat ? "SELECT * FROM posts  " 
     : "SELECT * FROM posts"

  db.query(q,[req.query.cat], (err, result)=>{
    if(err) return res.status(500).send(err)

    res.status(200).json(result)
  })
  console.log('gett posts')
}

export const getPost = (req,res)=>{
    console.log('gett post ')
    const q =
    "SELECT * FROM posts where id =?";

 console.log(req.params.id)
    db.query(q,[req.params.id], (err, result)=>{
        if(err) return res.status(404).json(err);

        return res.status(200).json(result[0])
    });
    console.log('gett post ')
}

export const addPost = (req,res)=>{
    
    res.json("from post controller")
}

export const deletePost = (req,res)=>{
    
    res.json("from post controller")
}

export const updatePost = (req,res)=>{
    
    res.json("from post controller")
}

 