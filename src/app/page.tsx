import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <script src="https://widgets.coingecko.com/coingecko-coin-price-static-headline-widget.js"></script>
        <coingecko-coin-price-static-headline-widget coin-ids="celestia,cosmos,osmosis" currency="usd" locale="en"></coingecko-coin-price-static-headline-widget>

        <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
        <coingecko-coin-compare-chart-widget coin-ids="celestia,cosmos,osmosis" currency="usd" locale="en"></coingecko-coin-compare-chart-widget>
      </div>
    </main>
  )
}
