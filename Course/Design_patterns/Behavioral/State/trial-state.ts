import { ISubscriptionState } from "./isuscription-state";
import { PaidState } from "./paid-state";
import { Subscription } from "./subscription";
import { TrailStateExpired } from "./trial-state-expired";

export class TrialState implements ISubscriptionState {

    daysRemaining: number = 14;

    constructor(private _subscription: Subscription) { }

    pay(amount: number): void {
        this._subscription.state = new PaidState(this._subscription, amount);
    }

    checkExpiration(): void {
        this.daysRemaining--;
        if (this.daysRemaining <= 0) {
            this._subscription.state = new TrailStateExpired(this._subscription);
        }
    }

    report(): string {
        return `${this.daysRemaining} days lef on trial`;
    }

}