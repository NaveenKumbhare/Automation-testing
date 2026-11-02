import express from 'express';
import { pathToFileURL } from 'node:url';
const app = express();
const PORT = 8000;
import sum  from './sum.js';

app.get('/', (req, res) => {
    res.redirect('/home');
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

export default app;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server is listening on http://0.0.0.0:${PORT}`);
    });
}
