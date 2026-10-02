export default function FilterBar({
  searchText,
  onSearchChange,
  type,
  onTypeChange,
  onClear,
  resultCount,
}) {
  const types = ["ALL", "BILLING", "RTGS"];

  return (
    <section className="filter-bar" aria-label="Filters">
      <div className="filter-bar__field">
        <label className="filter-bar__label" htmlFor="search-input">
          Search customer or document
        </label>
        <input
          id="search-input"
          className="filter-bar__input"
          type="search"
          placeholder="e.g. Acme or INV-2026-001"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-bar__field">
        <span className="filter-bar__label" id="type-filter-label">
          Transaction type
        </span>
        <div
          className="filter-bar__buttons"
          role="group"
          aria-labelledby="type-filter-label"
        >
          {types.map((option) => (
            <button
              key={option}
              type="button"
              className={`filter-bar__button${
                type === option ? " filter-bar__button--active" : ""
              }`}
              aria-pressed={type === option}
              onClick={() => onTypeChange(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {(searchText || type !== "ALL") && (
        <button className="filter-bar__clear" type="button" onClick={onClear}>
          Clear filters
        </button>
      )}

      <p className="filter-bar__count" aria-live="polite">
        Showing {resultCount} {resultCount === 1 ? "record" : "records"}
      </p>
    </section>
  );
}
