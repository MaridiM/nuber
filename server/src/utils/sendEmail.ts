// Core
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

const sendEmail = ( to: string, subject: string, html: string ): void => {
    sgMail.send({
        to,
        from: process.env.SENDGRID_SENDER_MAIL || '',
        subject, 
        html,
    })
}

export const sendVerificationEmail = (email: string, fullName: string, key: string): void => {
    const emailSubject = `Hello! ${ fullName }, please verify your email`
    const emailBody = `Verify your email by clicking <a href="http://${process.env.HOST}${process.env.HOST === 'localhost' ? ':'+process.env.PORT : null}/verification/${key}/">here</a>`

    return sendEmail(email, emailSubject, emailBody )
}
