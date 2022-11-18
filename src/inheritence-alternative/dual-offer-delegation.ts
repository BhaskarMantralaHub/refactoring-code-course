import { ProductOffer } from "./product-offer-interface";
import {UnsecuredOffer} from "./unsecured-offer";
import {SecuredOffer} from "./secured-offer";

//Delegation
export class DualOfferDelegation {
    private unsecuredOffer: UnsecuredOffer;
    private securedOffer: SecuredOffer;
    
    constructor() {
        this.unsecuredOffer = new UnsecuredOffer();
        this.securedOffer = new SecuredOffer();
    }

    get securedOfferText() {
        return this.securedOffer.offerText;
    }

    get unSecuredOfferText() {
        return this.unsecuredOffer.offerText;
    }

}

const dualOffer = new DualOfferDelegation();
console.log(dualOffer.securedOfferText);
console.log(dualOffer.unSecuredOfferText);