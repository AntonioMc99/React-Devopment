import LinkItem from "./LinkItem";

export default function LinkList({ items, onRemove, onClear }) {
  if (!items.length) {
    return <p className="muted">No links yet — shorten your first one!</p>;
  }
  return (
    <>
      <div className="actions">
        <button id="clear-all" className="link" onClick={onClear}>Clear all</button>
      </div>
      <ul id="links" className="links">
        {items.map((it) => (
          <LinkItem key={it.id} item={it} onRemove={onRemove} />
        ))}
      </ul>
    </>
  );
}
