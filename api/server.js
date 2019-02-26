const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=4000;
const cors=require('cors');
const config=require('./DB');

mongoose.Promise=global.Promise;
mongoose.connect(config.DB, { useNewUrlParser :true }).then(
    ()=>{console.log('Database is Connected')},
    err => {console.log("Can not connect to the database")}
)

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})

