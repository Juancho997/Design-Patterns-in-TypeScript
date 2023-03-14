import { StatsTracker } from "./Singleton";
import { test } from "./test";

// utilizo la primer y unica instancia de la clase
let tracker = StatsTracker.instance;

// inicializo los valores de las propiedades
tracker.buttonClicks = 10;
tracker.facebookShares = 20;
tracker.twitterShares = 30;
tracker.widgetViews = 40;

console.log(`Button Clicks = ${tracker.buttonClicks}`);
console.log(`Facebook Shares = ${tracker.facebookShares}`);
console.log(`Twitter Shares = ${tracker.twitterShares}`);
console.log(`Widget Views = ${tracker.widgetViews}`);

// al arrancar nuevamente la app, se modifican dichos valores
tracker.buttonClicks++;
tracker.twitterShares += 2;

test();