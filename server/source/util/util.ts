const nodemailer = require("nodemailer");
export declare type Message = {
  emailFrom?: string;
  message: string;
  name?: string;
  subject: string;
};

export const sendMail = async (message: Message) => {
  console.log(`[Init Send]`);

  console.log(`[Create Transport]`);
  const transporter = nodemailer.createTransport({
    service: "SendinBlue",
    auth: {
      user: "armando.nurimansyah@gmail.com",
      pass: "2W0fwGyBKrH6OCTU",
    },
  });

  console.log(`[Send Mail]`);
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `${message.name}<${message.emailFrom}>`,
    to: "armando.nurimansyah@gmail.com",
    subject: message.subject,
    text: message.message,
  });

  console.log(info);

  console.log(`[Done Send Mail]`);
  return info;
};
