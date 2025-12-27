const express = require("express");
const { redirect } = require("express/lib/response");
const app=express();
const port=8080;
const{ v4:uuidv4 }=require("uuid");
app.use(express.urlencoded({extended:true}));
const methodOverride=require("method-override")
app.use(methodOverride("_method"));
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
         id:uuidv4(),
        username:"ayush patel",
        content:"hellow i am Ayush Patel"
    },
    {   
        id:uuidv4(),
        username:"ayush prajapat",
        content:"hellow i am ayush prajapat"
    },
    {
        id:uuidv4(),
        username:"arvind anjana",
        content:"hellow i am arvind anjana"
    },
]
// all post
app.get("/post",(req,res) => {
    res.render("index.ejs",{posts});
});
// create post
app.get("/post/new",(req,res) => {
    res.render("new.ejs");
});
// accept new post on route post
app.post("/post",(req,res)=>{
    // adding username and content form to post route Post
    let{username,content}=req.body;
    let id=uuidv4();
    posts.push({id,username,content}); 
    // console.log(req.body)
    // res.send("post request working")
    res.redirect("/post")
})
//  id
app.get("/post/:id",(req,res)=>{
    let {id}= req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("show.ejs",{post})
});
// edit a content patch request by hoscooch
app.patch("/post/:id",(req,res)=>{
    let {id}= req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=>id===p.id);
    post.content=newContent;
    console.log(posts)  //error
    // console.log(newContent);
    // console.log(id);
    res.redirect("/post")
});  
// route of edit
app.get("/post/:id/edit",(req,res)=>{
    let {id}= req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post  });
    
});
// delete route
app.delete("/post/:id",(req,res)=>{
    let {id}= req.params;
    let posts=posts.filter((p)=>id===p.id);
    res.send("delete success");
    res.redirect("/post");
});
// to check the server
app.listen(port,()=>{
    console.log("listening to post : 8080");
});

