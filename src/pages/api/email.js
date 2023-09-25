// /src/pages/api/email.js

//This api route sends an e-mail through the service Resend

import { Resend } from "resend";

const apikey = process.env.RESEND_API_KEY;
const sender = process.env.RESEND_SENDER;
const personalEmail = process.env.PERSONAL_EMAIL;
const resend = new Resend(apikey);

export default async function handler(req, res) {
  if (req.body.name && req.body.email && req.body.phone && req.body.message) {
    try {
      console.log("Sending e-mail...");
      const data = await resend.emails.send({
        from: sender,
        to: personalEmail,
        subject: "New Message From Personal Website",
        html: `
            <div>New Messsage received</div>
            <div>${req.body.name}</div>
            <div>${req.body.email}</div>
            <div>${req.body.phone}</div>
            <div>${req.body.message}</div>
            `,
      });
      console.log(data);
      if (data.id) {
        res.status(200).json({ status: "Success!" });
      } else {
        res
          .status(400)
          .json({ error: "E-mail server responded with an error" });
      }
    } catch (error) {
      res.status(400).json({ error: "Error sending e-mail" });
    }
  } else {
    const error = {
      error: "Invalid form data",
    };
    res.status(400).json({ error: "Invalid form data" });
  }
}
