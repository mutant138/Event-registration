const express = require('express');
const cors = require('cors');
const sequelize = require('./util/database');
const userRouter = require('./routes/user')
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(express.json())
app.use('/',userRouter);
app.use('/success',userRouter)


async function initiate(){
    try {
        await sequelize.sync();
        app.listen(3000,()=>{
            console.log("Server is running at 3000");
        });       
    } catch (error) {
        console.log(error);
    }
}
initiate();
