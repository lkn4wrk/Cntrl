****************************************************************HowRichWouldYouBe/src/Constants.ts ****************************************



export interface ICoin {
  id: string;
  name: string;
  symbol: string;
}

export const coins: ICoin[] = [
  { id: "bitcoin", symbol: "btc", name: "Bitcoin" },
  { id: "ethereum", symbol: "eth", name: "Ethereum" },
  { id: "dogecoin", symbol: "doge", name: "Dogecoin" },
  { id: "vechain", symbol: "vet", name: "VeChain" },
  { id: "cardano", symbol: "ada", name: "Cardano" },
  { id: "cardano", symbol: "r&r", name: "R&R $tudio's" },
  {
    id: "utrust",
    symbol: "utk",
    name: "UTRUST",
  },
  {
    id: "safemoon",
    symbol: "safemoon",
    name: "SafeMoon",
  },
  {
    id: "R&R $tudio's",
    symbol: "R&R",
    name: "R&R $tudio's",
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "Binance Coin",
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
  },
  {
    id: "chainlink",
    symbol: "link",
    name: "Chainlink",
  },
];

export type ICurrencies = "EUR" | "USD" | "GBP"| "R&R";

export const currencies: ICurrencies[] = ["EUR", "GBP", "R&R", "USD"];