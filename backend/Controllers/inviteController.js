const nodemailer = require("nodemailer");
const {EMAIL, PASSWORD} = require('../env');

function generateInvitationLink() {
    // You can use a library like uuid to generate a unique identifier
    const uniqueId = 'abcd1234'; // Replace this with the actual unique ID
  
    // Your invitation link format
   
    return `https://www.google.com`;
}

const inviteUser = (req,res)=>{
    const {userEmail} = req.body;
    let config = {
        service:'gmail',
        auth:{
            user:EMAIL,
            pass:PASSWORD
        }

    }
    let transporter = nodemailer.createTransport(config);
    const invitationLink = generateInvitationLink();
    let mailContent = `<a href="${invitationLink}" target="_blank">Click Here !</a>`;
    let message = {
        from:EMAIL,
        to:userEmail,
        subject:"You have Invited",
        html:mailContent
    }
    transporter.sendMail(message).then(()=>{
        return res.status(201).json({msg:'Invited successfully'});
    }).catch((error)=>{
        return res.status(500).json({error});
    })
}


module.exports = inviteUser;