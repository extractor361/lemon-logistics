import { createClientFromRequest } from 'npm:@base44/sdk@0.8.40';

export default async function(req: Request): Promise<Response> {
  try {
    const base44 = createClientFromRequest(req);
    const data = await req.json();

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

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: "info@digital-artefakt.me",
      subject: `Novi upit sa sajta — ${name}`,
      body,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}