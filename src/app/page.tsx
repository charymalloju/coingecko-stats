import Image from 'next/image'
import Script from 'next/script'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        
      <Script src="https://widgets.coingecko.com/coingecko-coin-price-static-headline-widget.js"></Script>
        {/* @ts-ignore */}
        <coingecko-coin-price-static-headline-widget coin-ids="bitcoin,celestia,cosmos,osmosis" currency="usd" locale="en" async></coingecko-coin-price-static-headline-widget>

        
        <Script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></Script>
         {/* @ts-ignore */}
        <coingecko-coin-compare-chart-widget coin-ids="bitcoin,celestia,cosmos,osmosis" currency="usd" locale="en" async></coingecko-coin-compare-chart-widget>
      </div>
    </main>
  )
}
