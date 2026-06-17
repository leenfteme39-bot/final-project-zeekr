const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendWelcomeEmail = async (email) => {
  await transporter.sendMail({
    from: `"Zeekr" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "הרשמה בוצעה בהצלחה 🎉",
    text: "ברוכים הבאים! ההרשמה שלך הושלמה בהצלחה.",
  });

  console.log("📧 EMAIL SENT");
};

module.exports = { sendWelcomeEmail };