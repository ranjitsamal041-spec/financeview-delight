// Six clearly labelled demo records.
// BILLING amounts are positive; RTGS amounts are negative.
const transactions = [
  {
    id: 1,
    type: "BILLING",
    customer: "Acme Traders",
    documentNumber: "INV-2026-001",
    postingDate: "2026-09-01",
    amount: 12400.5,
  },
  {
    id: 2,
    type: "BILLING",
    customer: "Bluewave Logistics",
    documentNumber: "INV-2026-002",
    postingDate: "2026-09-03",
    amount: 8350.0,
  },
  {
    id: 3,
    type: "RTGS",
    customer: "Acme Traders",
    documentNumber: "RTGS-90121",
    postingDate: "2026-09-05",
    amount: -7000.0,
  },
  {
    id: 4,
    type: "BILLING",
    customer: "Nimbus Retail",
    documentNumber: "INV-2026-003",
    postingDate: "2026-09-08",
    amount: 15200.75,
  },
  {
    id: 5,
    type: "RTGS",
    customer: "Bluewave Logistics",
    documentNumber: "RTGS-90155",
    postingDate: "2026-09-12",
    amount: -4125.25,
  },
  {
    id: 6,
    type: "BILLING",
    customer: "Nimbus Retail",
    documentNumber: "INV-2026-004",
    postingDate: "2026-09-15",
    amount: 5600.0,
  },
];

export default transactions;
