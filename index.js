const express=require('express');
const app =express();

app.get('/',function(req,res){
    res.send("hello world");
});

app.listen(3033, function() {
    console.log("app is running on 3033");
})