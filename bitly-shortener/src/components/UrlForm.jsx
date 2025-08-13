import { useState } from "react";

export default function UrlForm({ onSubmit, loading }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function normalizeUrl(v) {
    const t = v.trim();
    if (!t) throw new Error("Please add a link");
    try {
      const u = new URL(t.startsWith("http") ? t : `https://${t}`);
      return u.toString();
    } catch {
      throw new Error("Please enter a valid URL");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      const normalized = normalizeUrl(value);
      await onSubmit(normalized);
      setValue("");
    } catch (err) {
      setError(err.message || "Invalid URL");
    }
  }

  return (
    <form id="shorten-form" onSubmit={handleSubmit} className="form" noValidate>
      <div className="field">
        <input
          id="url-input"
          type="text"
          placeholder="Shorten a link here…"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={error ? "invalid" : ""}
          aria-describedby="error-msg"
          aria-invalid={!!error}
        />
        <button id="submit-btn" type="submit" disabled={loading}>
          {loading ? "Shortening…" : "Shorten It!"}
        </button>
      </div>
      <p id="error-msg" className="error" style={{ display: error ? "block" : "none" }}>
        {error || "Please add a valid link"}
      </p>
    </form>
  );
}
