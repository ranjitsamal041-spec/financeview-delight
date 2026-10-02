import { useMemo, useState } from "react";
import transactions from "./data/transactions";
import { ALL, filterTransactions, summarize, formatAmount } from "./utils/finance";
import SummaryCard from "./components/SummaryCard";
import FilterBar from "./components/FilterBar";
import TransactionTable from "./components/TransactionTable";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [type, setType] = useState(ALL);

  const filtered = useMemo(
    () => filterTransactions(transactions, searchText, type),
    [searchText, type]
  );
  const summary = useMemo(() => summarize(filtered), [filtered]);

  return (
    <div className="page">
      <header className="page__header">
        <h1>FinanceView</h1>
        <p className="page__subtitle">
          Billing and RTGS activity · Local currency
        </p>
      </header>

      <section className="summary-cards" aria-label="Summary">
        <SummaryCard
          label="Filtered records"
          value={String(summary.count)}
          tone="neutral"
        />
        <SummaryCard
          label="Billing total (Local currency)"
          value={formatAmount(summary.billingTotal)}
          tone="billing"
        />
        <SummaryCard
          label="RTGS magnitude (Local currency)"
          value={formatAmount(summary.rtgsMagnitude)}
          tone="rtgs"
        />
      </section>

      <FilterBar
        searchText={searchText}
        onSearchChange={setSearchText}
        type={type}
        onTypeChange={setType}
        onClear={() => {
          setSearchText("");
          setType(ALL);
        }}
        resultCount={filtered.length}
      />

      <main>
        <TransactionTable rows={filtered} />
      </main>
    </div>
  );
}
