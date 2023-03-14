import { ISubscriptionState } from "./isuscription-state";
import { Subscription } from "./subscription";
import { TrailStateExpired } from "./trial-state-expired";

export class PaidState implements ISubscriptionState {

    amountPaid: number = 0;

    constructor(private _subscription: Subscription, amount: number) {
        this.amountPaid = amount;
    }

    pay(amount: number): void {
        throw new Error("Already paid");
    }

    checkExpiration(): void {
        this._subscription.state = new TrailStateExpired(this._subscription)
    }

    report(): string {
        return `On paid with $${this.amountPaid} subscription`;
    }

}