import { useState } from "react";
import UrlForm from "./components/UrlForm.jsx";
import LinkList from "./components/LinkList.jsx";
import usePersistedState from "./hooks/usePersistedState.js";
import { shorten } from "./services/api.js";
import "./index.css";

const STORAGE_KEY = "short_links_v1";

export default function App() {
  const [links, setLinks] = usePersistedState(STORAGE_KEY, []);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  async function addLink(long_url) {
    setApiError("");
    setLoading(true);
    try {
      const { link } = await shorten(long_url);
      const id =
        (window.crypto && window.crypto.randomUUID)
          ? window.crypto.randomUUID()
          : Math.random().toString(36).slice(2);

      const item = {
        id,
        long_url,
        link,
        created_at: new Date().toISOString(),
      };
      setLinks((prev) => [item, ...prev]);
    } catch (e) {
      setApiError((e && e.message) || "Unable to shorten link");
    } finally {
      setLoading(false);
    }
  }

  function removeLink(id) {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  }

  function clearAll() {
    setLinks([]);
  }

  return (
    <main className="container">
      <header>
        <h1>Bitly URL Shortener</h1>
        <p className="muted">Shorten links, save them, copy fast.</p>
      </header>

      <UrlForm onSubmit={addLink} loading={loading} />
      {apiError ? <div className="error">{apiError}</div> : null}

      <LinkList items={links} onRemove={removeLink} onClear={clearAll} />

      <footer className="muted">React + localStorage • Accessible focus states</footer>
    </main>
  );
}
