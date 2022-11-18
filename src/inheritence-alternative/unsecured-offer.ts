import { ProductOffer } from "./product-offer-interface";

export class UnsecuredOffer implements ProductOffer {

    constructor() {

    }

    get offerText() {
        return 'Personal Loan'
    }

}