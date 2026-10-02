# FinanceView Delight

Build FinanceView, a beginner React dashboard using Vite, JavaScript/JSX and plain CSS. Use npm. No TypeScript, Tailwind, backend, login, database, charts or extra UI libraries.

Create src/App.jsx, src/index.css, src/data/transactions.js, src/utils/finance.js and src/components/{SummaryCard,FilterBar,TransactionTable}.jsx. Keep each file small.

Use six clearly labelled demo records: id, type (BILLING or RTGS), customer, documentNumber, postingDate (YYYY-MM-DD), amount (number). Billing positive; RTGS negative.

Show title, three cards (filtered row count, billing total, RTGS magnitude), customer/document search, All/BILLING/RTGS filter and a semantic table. Cards and table use the same filtered rows. Show signed amounts with two decimals and label currency “Local currency”. Use a clean navy and white responsive layout and accessible labels. No outstanding balance or paid status. Export default components. Add npm dev/build scripts. Build the working UI; keep your explanation brief.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/32d7b958-68ef-4152-ab73-64eda03ee5fd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
