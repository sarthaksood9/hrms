import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";


export const registration = async (req, res) => {
    const { name, email, phone, address, age, post, salary, password } = req.body;
    try {
        const isExist = await userModel.findOne({ email });
        if (isExist) {
            return res.status(401).json("Email Already exists");
        }
        else{
            const hashPassword = await bcrypt.hash(password, 10);
    
            const newEmployee = await userModel.create({
                name: name,
                password: hashPassword,
                email: email,
                age: age,
                address: address,
                salary: salary,
                post: post,
                phone: phone
    
            });



            const transporter = nodemailer.createTransport({
                service: 'gmail',
                secure: true,
                port: 465,
                auth: {
                    user: 'sarthaksood09@gmail.com',
                    pass: 'dqdbluxcwvtmymbq'
                }
            });

            const mailOptions = {
                from: 'sarthaksood09@gmail.com', // sender address
                to: {email},
                subject: 'Welcome to Nextech',
                html: `
                <p>Dear ${name},</p>
                <p>Welcome to <strong>Company Name</strong>!</p>
                <p>We are excited to have you join our team. Here are your login credentials to get you started:</p>
                <ul>
                    <li><strong>Email</strong>: ${email}</li>
                    <li><strong>Temporary Password</strong>: ${password}</li>
                </ul>
                <p>Please log in and change your password as soon as possible. If you encounter any issues, feel free to reach out to our IT support team at <a href="mailto:itsupport@company.com">itsupport@company.com</a>.</p>
                <p>We're thrilled to have you on board and look forward to seeing your contributions to our success.</p>
                <p>Best regards,</p>
                <p>Your Name<br>Your Position<br>Company Name<br>Contact Information</p>
            `
            };

            console.log(email);

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log('Error sending email:', error);
                } else {
                    console.log('Email sent:', info.response);
                }
            });
            return res.status(201).json({message:"Regester Successfully",newEmployee});
        }
    }
    catch(e){
        console.log(e);
        return res.status(500).json({ error: 'Internal Server Error' });
        
    }
    
}




export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Invalid UserName Or Password" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            return res.json({ message: "Login Successful", user });
        }
        else {
            return res.status(401).json({ error: "Invalid UserName Or Password" });
        }
    }
    catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

