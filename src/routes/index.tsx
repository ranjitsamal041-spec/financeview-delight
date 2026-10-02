import { createFileRoute } from "@tanstack/react-router";
// @ts-expect-error plain JSX module
import App from "../financeview/App";
import financeCss from "../financeview/financeview.css?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinanceView — Billing & RTGS dashboard" },
      { name: "description", content: "Filter and summarise billing and RTGS transactions in local currency." },
      { property: "og:title", content: "FinanceView — Billing & RTGS dashboard" },
      { property: "og:description", content: "Filter and summarise billing and RTGS transactions in local currency." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: financeCss }],
  }),
  component: App,
});
