const nodemailer=require('nodemailer')
const transporter=require('../config/emailConfig')
const fs=require('fs')
const { error } = require('console')

exports.sendEmail=async function(req,res){
    // let transporter=nodemailer.createTransport({
    //     service:'hotmail',
    //     auth:{
    //         user:process.env.MAIL,
    //         password:process.env.MAIL_PWD
    //     },
    // })
    try {
        let emailOptions={
            from:process.env.MAIL,
            to:'jonathan.mwaniki@thejitu.com',
            subject:'weekly report',
            html:'<p>Dear Jonathan,please find attached my weekly report</p>',
            attachments:[
                {
                    filename:'weekly_report.docx',
                    path:fs.readFileSync("L:\docs\week 7 Report.docx")
                },
            ],
        }
        transporter.sendMail(emailOptions,(error,info)=>{
            if (error) {
                console.log(error);
                
            }
        })

        
        let info=await transporter.sendMail(emailOptions)
        console.log('Email sent: ',info.messageId);
    } catch (error) {
        console.log('Error occurrred while sending email :',error);
        
    }
}