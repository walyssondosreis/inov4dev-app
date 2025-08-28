import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nome, email, mensagem } = req.body;

  try {
    const response = await axios.post(
      "https://api.resend.com/emails",
      {
        from: `${nome} <onboarding@resend.dev>`,
        to: "walyssondosreis@gmail.com",
        subject: `Mensagem de ${nome}`,
        html: `<p>Nome: ${nome}</p><p>Email: ${email}</p><p>Mensagem: ${mensagem}</p>`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ success: true, data: response.data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
