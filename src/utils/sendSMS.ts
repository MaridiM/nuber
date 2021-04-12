// Core
import Twilio from 'twilio'


// Create twilio client
const twilioClient = Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN)

// Sender SMS
export const sendSMS = (to: string, body: string): Promise<any> => {
    return twilioClient.messages.create({
        body, to, from: process.env.TWILIO_PHONE
    })
} 

// Send Verification SMS
export const sendVerificationSMS = (to: string, key: string): Promise<any> => 
    sendSMS(to, `Your verification key is: ${ key }`)