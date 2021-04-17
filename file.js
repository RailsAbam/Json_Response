const fs = require("fs")
const fetch = require("node-fetch");
const express = require("express")
const app = express();



app.get("/", async (req, res) =>{
    
    const response = await fetch('http://jsonplaceholder.typicode.com/posts')

    const responseJson = await response.json();
        
    return res.send(json());


}); 
    

fs.mkdir('results', function (){
 const file = fs.readFile('post.txt', 'utf8', function (err, data) 
    {
        const file = fs.writeFile('./results/post.json', data, (err) =>
        {
            if (err) throw err;
    
        });
    });

})


const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>
{
    console.log(`Listening on port .....${PORT}`);

});

