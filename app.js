const express=require("express");
const path=require("path")
const mysql=require("mysql");
const dotenv=require('dotenv');
dotenv.config({ path:'./.env'});
const app=express();
const db=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE
});
const publicDirectory=path.join(__dirname,'./public')
console.log(__dirname);
app.use(express.static(publicDirectory));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine','hbs');
db.connect((error)=>{
    if(error){
        console.log(errors)
    
    }else{
        console.log("MYSQL CONNECTED")
    }
})
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.listen(5000,()=>{
    console.log("started a server in 5000 port")
});