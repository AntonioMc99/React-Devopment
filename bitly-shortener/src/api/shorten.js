// This function runs on the server Vercel
// Reads BITLY
// Calls API to create a short link
// Return link  to the client

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const token = process.env.BITLY_TOKEN;
  if (!token) return res.status(500).json({ error: "Missing BITLY_TOKEN" });

  try {
    const { long_url } = req.body || {};
    if (!long_url) return res.status(400).json({ error: "long_url is required" });

    const r = await fetch("https://api-ssl.bitly.com/v4/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ long_url })
    });
    const data = await r.json();
        // Forward any Bitly errors with a useful message
    if (!r.ok) {
      const msg = data?.message || data?.description || "Bitly error";
      return res.status(r.status).json({ error: msg });
    }
    return res.status(200).json({ link: data.link });
  } catch (e) {
    return res.status(500).json({ error: e.message || "Server error" });
  }
}
