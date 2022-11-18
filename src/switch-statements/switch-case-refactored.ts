
interface Discount {}

class Order {

    private total: number = 0;
    private country: string = '';
  
    public calculateTotal(): number {
      this.total = 100;
      return new RegionalDiscounts(this.getCountry()).applyDiscounts(this.total);
    }

    getCountry(): string {
        this.country = 'RU';
        return this.country;
    }
}

class RegionalDiscounts implements Discount {

  private country: string;

  constructor(country: string) {
    this.country = country;
  }

  applyDiscounts(total: number) {
    switch (this.country) {
      case "US": total *= 0.85; break;
      case "RU": total *= 0.75; break;
      case "CN": total *= 0.9; break;
    }

    return total;
  }


}

const start = performance.now();
export const order = new Order();
console.log(order.calculateTotal());
const end = performance.now();

console.log(end - start);
