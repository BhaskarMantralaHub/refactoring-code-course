export class Order {
  
    public calculateTotal(): number {
      let total = 100;
  
      // Apply regional discounts.
      switch (this.getCountry()) {
        case "US": total *= 0.85; break;
        case "RU": total *= 0.75; break;
        case "CN": total *= 0.9; break;
      }
      return total;
    }

    getCountry(): string {
        return 'RU';
    }
}


const start = performance.now();
export const order = new Order();
console.log(order.calculateTotal());
const end = performance.now();
console.log(end - start);