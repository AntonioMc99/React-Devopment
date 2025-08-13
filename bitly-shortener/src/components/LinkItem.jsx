// Renders one item with long URL shortened URL Copy button and Delete button
import { useState } from "react";

export default function LinkItem({ item, onRemove }) {
  const [copied, setCopied] = useState(false);

  // Copies the short link 
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(item.link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <li className="link-item">
      <div className="long-url">{item.long_url}</div>
      <div className="link-row">
        <a className="short-url" href={item.link} target="_blank" rel="noreferrer">
          {item.link}
        </a>
        <button className={`btn ${copied ? "success" : ""}`} onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
        <button className="btn" aria-label="Remove link" onClick={() => onRemove(item.id)}>
          ✕
        </button>
      </div>
    </li>
  );
}
