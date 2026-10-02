// Pure helper functions for filtering and summarising transactions.

export const ALL = "ALL";

// Keep rows whose customer or document number matches the search text,
// and whose type matches the selected filter.
export function filterTransactions(rows, searchText, type) {
  const query = searchText.trim().toLowerCase();
  return rows.filter((row) => {
    const typeMatch = type === ALL || row.type === type;
    if (!typeMatch) return false;
    if (!query) return true;
    const haystack =
      `${row.customer} ${row.documentNumber}`.toLowerCase();
    return haystack.includes(query);
  });
}

// Billing total sums positive amounts; RTGS magnitude sums negatives
// as a positive number. Both are computed from the same filtered rows.
export function summarize(rows) {
  let billingTotal = 0;
  let rtgsMagnitude = 0;
  for (const row of rows) {
    if (row.type === "BILLING") billingTotal += row.amount;
    else rtgsMagnitude += Math.abs(row.amount);
  }
  return { count: rows.length, billingTotal, rtgsMagnitude };
}

// Signed amount with two decimals, e.g. +12,400.50 or -7,000.00.
export function formatAmount(value) {
  const sign = value < 0 ? "-" : "+";
  const magnitude = Math.abs(value).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${sign}${magnitude}`;
}
