import { ISubscriptionState } from "./isuscription-state";
import { PaidState } from "./paid-state";
import { Subscription } from "./subscription";

export class TrailStateExpired implements ISubscriptionState {
    
    constructor(private _subscription: Subscription){}

    pay(amount: number): void {
        this._subscription.state = new PaidState(this._subscription, amount);
    }
    
    checkExpiration(): void {
        throw new Error("Trial already expired");
    }
    
    report(): string {
        return `Trial Expired`;
    }

}