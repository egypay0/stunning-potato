import express from 'express' ;
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authtRoutes from "./routes/auth.js";
 import cors from 'cors';
 import bodyParser from  "body-parser" ;
 import cookieParser from 'cookie-parser';


const app = express() ;
     
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors());

 

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 

app.use(express.json())

app.use("/api/posts", postRoutes)
//app.use("/api/users", usertRoutes)
app.use("/api/auth/", authtRoutes)

app.listen(8800,()=> {
    console.log('connected')
    
})