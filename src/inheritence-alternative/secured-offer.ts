import { ProductOffer } from "./product-offer-interface";

export class SecuredOffer implements ProductOffer {

    constructor() {

    }

    get offerText() {
        return 'Secured Personal Loan'
    }

}