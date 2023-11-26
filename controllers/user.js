
const { request } = require('http');
const Registration = require('../models/registration');

exports.getMainPage = async(request,response,next)=>{
    response.sendFile('index.html',{root:'views'});
}

exports.addDetails = async(request,response)=>{
    console.log("Checking addDetails")
    const {name,email,phone,session}= request.body
    const Reg = await Registration.create({
        Name: name,
        emailId: email,
        phoneNumber: phone,
        session: session
    })
    //console.log(Reg)
    response.json({Reg, message: "Successfully added"}) 
}




