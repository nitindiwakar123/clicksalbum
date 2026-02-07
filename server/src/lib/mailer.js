import nodemailer from "nodemailer";

export const sendOtpEmail = async ({ to, code }) => {
  const hasSmtp = process.env.SMTP_HOST && process.env.SMTP_USER;

  if (!hasSmtp) {
    console.log(`OTP for ${to}: ${code}`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || "no-reply@clicksalbum.com",
    to,
    subject: "Your ClicksAlbum verification code",
    text: `Your verification code is ${code}. It expires in 10 minutes.`,
  });
};
