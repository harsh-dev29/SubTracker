import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import cron from 'node-cron'
import subscriptionModel from '../models/subscription.model.js'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // Your 16-character App Password
    }
},
);
export const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Your Name" <${process.env.EMAIL_USER}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text, // plain text body
            html, // html body
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export const sendWelcomeEmail = async (user) => {
    const { fullName: { firstName, lastName }, email } = user
    const welcomeTemplate =
        ` <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #4A90E2; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to Our App!</h1>
        </div>
        <div style="padding: 20px; color: #333; line-height: 1.6;">
            <h2>Hi ${firstName, lastName},</h2>
            <p>We're thrilled to have you here! Your account has been successfully created.</p>
            <p>You can now log in to your dashboard and start exploring all the features we offer.</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="https://yourapp.com/login" style="background-color: #4A90E2; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Login to Your Account</a>
            </div>

            <p>If you didn't create this account, please ignore this email or contact our support team.</p>
            <p>Best regards,<br><strong>The Team</strong></p>
        </div>
        <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; 2026 Your Company Name. All rights reserved.
        </div>
    </div>`

    await sendEmail(email, "Welcome to SubTracker", "<h1>Thank you for registering with SubTrakcer.<h1>", welcomeTemplate)


}

cron.schedule("0 9 * * *", async () => {
    console.log("Running daily subscription check.....");
    const today = new Date()

    const startOfTargetDay = new Date(today)
    startOfTargetDay.setDate(today.getDate() + 3);
    startOfTargetDay.setHours(0, 0, 0, 0); // Start of the day

    const endOfTargetDay = new Date(today)
    endOfTargetDay.setDate(today.getDate() + 3);
    endOfTargetDay.setHours(23, 59, 59, 999); // Start of the day

    const expiringSubs = await subscriptionModel.find({
        nextRenewal: {
            $gte: startOfTargetDay,
            $lte: endOfTargetDay
        }
    }).populate('user')
    console.log(expiringSubs);



    expiringSubs.forEach(sub => {
        const { fullName: { firstName, lastName }, email } = sub.user
        const expiryTemplate = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e8ed; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #0056b3; padding: 35px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 0.5px;">Subscription Renewal Notice</h1>
        </div>
        
        <div style="padding: 40px 30px; color: #333333; line-height: 1.6;">
            <p style="font-size: 18px; margin-top: 0;">Hi <strong>${firstName}</strong>,</p>
            
            <p>This is a friendly reminder that your <strong>${sub.name}</strong> subscription is reaching the end of its current billing period.</p>
            
            <p>Your plan is scheduled to expire on: <br>
               <span style="color: #0056b3; font-weight: bold; font-size: 20px;">${sub.nextRenewal}</span>
            </p>
            
            <p>To keep your account active and avoid any interruption to your service, please click the button below to renew your plan.</p>
            
            <div style="text-align: center; margin: 40px 0;">
                <a href="https://yourapp.com/billing" style="background-color: #0056b3; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">Renew Subscription</a>
            </div>

            <p style="font-size: 14px; color: #888888;">If you have already processed your renewal, please disregard this message. Thank you for being a valued member of our community!</p>
        </div>

        <div style="background-color: #f4f7f9; padding: 25px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #e1e8ed;">
            <p style="margin: 0 0 10px 0;">Questions? Contact our support team at support@yourapp.com</p>
            <p style="margin: 0;">&copy; 2026 Your App Name. India.</p>
        </div>
    </div>
    `
        const template = `
                 <h1>Action Required: Subscription Expiring Soon</h1>
                 <p>Hi ${sub.user.name}, your subscription will expire on ${sub.expiryDate}.</p>
                 <p>sub name ${sub.name}</o>
                 <p>Renew now to keep your premium features!</p>
             `;

        sendEmail(email, "Your subscription is ending soon!", "<h1>Thank you for connceting with SubTrakcer.<h1>", expiryTemplate);
    });
})








