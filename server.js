import express from 'express';
const app = express();
const PORT = 8000;
import sum  from './sum.js';



app.listen(PORT,() =>{

    console.log(`server is listing on port http://localhost: ${PORT}`);

});


app.get("/home",async(req,res) =>{
    res.json({
        msg:"i am root!"
    });
});


app.get("/getSum/:a/:b",async(req,res) =>{
 const{a,b} = req.params;
    res.json({
ans: sum(parseInt(a),parseInt(b))
    });
    console.log(a,b);
});


