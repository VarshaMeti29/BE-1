const express=require('express');
const app=express();
app.use(express.json())
app.listen(9000,()=>{
    console.log("Varsha")
})
app.get('/hello',(req,res)=>{
 res.status(200).send("Welcome to Express");
})
app.get('/time',(req,res)=>{
    const currentDateTime= new Date();
    console.log(currentDateTime);
    res.status(200).send("date and time");

   
});
app.get('/user/:name',(req,res)=>{
    const username=req.params.name;
console.log(username);
    res.status(200).send(`hello,${username}`);
})
app.get('/json',(req,res)=>{
    const json=req.body;
    console.log(json);
    res.status(200).send('json response');
})
app.get('/status/check',(req,res)=>{
    res.status(200).send("server is healthy");
})
app.post('/user',(req,res)=>{
    const user=req.body;
    console.log(user);
    res.send("Name and Age accepted");
})
app.post('/feedback',(req,res)=>{
    const feedback=req.body;
    console.log(feedback);
    res.send("Feed back is accepted");

})
app.post('/Sanjana',(req,res)=>{
    const Sanjana= req.body;
    console.log(deepthi);
    res.send("Thank-You");
})
app.post('/login',(req,res)=>{
    const login=req.body;
    console.log(login);
    res.send("login sucessfull");

})
app.put('/updateuser',(req,res)=>{
    const updateuser=req.body;
    console.log(updateuser);
    res.send("updated");
})
app.put('/changepassword',(req,res)=>{
    const changepassword=req.body;
    console.log(changepassword);
    res.send("password updated!");
})
app.put('/updateemail',(req,res)=>{
    const updateemail=req.body;
    console.log(updateemail);
    res.send("updated email");
})
app.delete('/deleteuser',(req,res)=>{
    const deleteuser=req.body;
    console.log(deleteuser);
    res.send("deleted successfully")
})
app.delete('/cleardata',(req,res)=>{
    const cleardata=req.body;
    console.log(cleardata);
    res.send("all data cleared!");
})
app.delete('/removeitem/:id',(req,res)=>{
    const removeitem=req.params.id
    console.log(removeitem);
    res.status(200).send("deleted successfully")
})
app.get('/',(req,res)=>{
    try{
   
   res.status(200).send("server is running");
    }
    catch {
        throw(Error)
     res.status(500).send("server is not working")
    }
})
app.get('/unknown',(req,res)=>{
    res.status(400).send("404 not found");
})
app.post('/product/:id',(req,res)=>{
    const product=req.params.id;
    console.log(product);
    res.send("id updataed");
})
app.get('/search',(req,res)=>{
    const searchTearm=req.query.q;
   if(searchTearm){
    res.send(`You serached for:${searchTearm}`);
   }
   else{
    res.send('No serch term found');
   }
})
 app.get('/greet/:username',(req,res)=>{
    const greet=req.params.username;
    console.log(greet);
    console.log(`good morning ${greet}`)
    res.send("Thank you all");

 })
