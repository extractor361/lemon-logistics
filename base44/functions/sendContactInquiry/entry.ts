import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const data = await req.json();
    const apiKey = process.env.RESEND_API_KEY;

    const {
      name, company, phone, email, service,
      datum_utovara, origin, destination, carinjenje, message,
    } = data;

    if (!name || !email || !message) {
      return Response.json({ error: "Obavezna polja nedostaju" }, { status: 400 });
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
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Lemon Logistics <office@lemonlogistics.me>",
        to: "office@lemonlogistics.me",
        subject: `Novi upit sa sajta — ${name}`,
        text: body,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      throw new Error(`Resend greška: ${errText}`);
    }

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}