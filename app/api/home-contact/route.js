import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, inquiryType, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Name, email, and message are required." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jayrajshakha100@gmail.com",
        pass: "sdzv lorn yuzj zyru",
      },
    });

    const mailOptions = {
      from: "jayrajshakha100@gmail.com",
      to: "jayrajshakha73@gmail.com",
      subject: `Home Page Contact Form Submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send email.",
        error: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
