const nodemailer = require("nodemailer");

let mailtransporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"shahavas11@gmail.com",
        pass:"" //enter your password
    }
})

let details ={
    from:"shahavas11@gmail.com",
    to:"muhammedshuhaib385@gmail.com",
    subject:"Testing nodemailer",
    text:"testing our first sender"
}

mailtransporter.sendMail(details,(error)=>{
    if(error){
        console.log("it has an error",error)
    }else{
        console.log("email sent")
    }
})