// This function runs on the server Vercel
// Reads BITLY
// Calls API to create a short link
// Return link  to the client

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const token = process.env.BITLY_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing BITLY_TOKEN" });

  let body = req.body;
  if (!body || typeof body === "string") {
    try { body = JSON.parse(body || "{}"); } catch { body = {}; }
  }

  let { long_url } = body || {};
  if (!long_url) return res.status(400).json({ error: "long_url is required" });

  try {
    const u = new URL(long_url.startsWith("http") ? long_url : `https://${long_url}`);
    long_url = u.toString();
  } catch {
    return res.status(400).json({ error: "Invalid URL" });
  }

  try {
    const r = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ long_url })
    });
    const data = await r.json();
        // Forward any Bitly errors with a useful message
    if (!r.ok) {
      const msg =
        data?.message ||
        data?.description ||
        (Array.isArray(data?.errors) ? data.errors.map(e => e.message).join("; ") : "Bitly error");
      return res.status(r.status).json({ error: msg });
    }
    return res.status(200).json({ link: data.link });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error" });
  }
}
