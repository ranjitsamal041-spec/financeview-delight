import { formatAmount } from "../utils/finance";

export default function TransactionTable({ rows }) {
  return (
    <table className="transaction-table">
      <caption>Transactions (Local currency)</caption>
      <thead>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Customer</th>
          <th scope="col">Document No.</th>
          <th scope="col">Posting Date</th>
          <th scope="col" className="transaction-table__amount-cell">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>
              <span
                className={`badge badge--${row.type.toLowerCase()}`}
              >
                {row.type}
              </span>
            </td>
            <td>{row.customer}</td>
            <td>{row.documentNumber}</td>
            <td>{row.postingDate}</td>
            <td className="transaction-table__amount-cell">
              {formatAmount(row.amount)}
            </td>
          </tr>
        ))}
        {rows.length === 0 && (
          <tr>
            <td colSpan={5} className="transaction-table__empty">
              No transactions match the current filters.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
