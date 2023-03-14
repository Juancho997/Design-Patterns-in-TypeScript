import { StatsTracker } from "./Singleton";

// llamamos a la misma instancia de StatsTracker que llamamos en app.ts
export function test() {
    let tracker = StatsTracker.instance;
    console.log(`Test Button Clicks = ${tracker.buttonClicks}`);
    console.log(`Test Facebook Shares = ${tracker.facebookShares}`);
    console.log(`Test Twitter Shares = ${tracker.twitterShares}`);
    console.log(`Test Widget Views = ${tracker.widgetViews}`);
}