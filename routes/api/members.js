const express = require('express');
const router = express.Router();

const mongodb = require('mongodb')


var dbCon = mongodb.MongoClient.connect('mongodb+srv://<loginUsers>:<sajeel@kali1.>@cluster0.hi7oo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')



router.post('/login', (req, res) => {
    let newMember = {
        name: req.body.name,
        email: req.body.email,
        date: new Date()
    };

    if(!newMember.name || !newMember.email){
        alert("Please enter complete details");
    }else{
        db.collection('feedbacks').insertOne(req.body);
    }



})


module.exports = router;