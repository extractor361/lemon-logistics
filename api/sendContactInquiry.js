export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name, company, phone, email, service,
      datum_utovara, origin, destination, carinjenje, message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Obavezna polja nedostaju" });
    }

    const body = [
      `Ime i prezime: ${name}`,
      `Kompanija: ${company || "-"}`,
      `Telefon: ${phone || "-"}`,
      `Email: ${email}`,
      `Vrsta usluge: ${service || "-"}`,
      `Datum utovara: ${datum_utovara || "-"}`,
      `Mjesto utovara: ${origin || "-"}`,
      `Mjesto istovara: ${destination || "-"}`,
      `Carinjenje: ${carinjenje ? "Da" : "Ne"}`,
      "",
      "Poruka:",
      message,
    ].join("\n");

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Lemon Logistics <office@lemonlogistics.me>",
        to: "office@lemongroup.me",
        reply_to: email,
        subject: `Novi upit sa sajta — ${name}`,
        text: body,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      return res.status(502).json({ error: `Resend greška: ${errText}` });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}