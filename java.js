// Simple E-commerce Console Application in JavaScript

class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    addItem(product, quantity) {
      this.items.push({ product, quantity });
    }
  
    calculateTotal() {
      let total = 0;
      this.items.forEach((item) => {
        total += item.product.price * item.quantity;
      });
      return total;
    }
  
    displayCart() {
      console.log("Shopping Cart:");
      this.items.forEach((item) => {
        console.log(
          `${item.product.name} - Quantity: ${item.quantity} - Price: $${item.product.price.toFixed(2)}`
        );
      });
      console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    }
  }
  
  // Sample products
  const product1 = new Product(1, "Laptop", 799.99);
  const product2 = new Product(2, "Headphones", 99.99);
  const product3 = new Product(3, "Mouse", 19.99);
  
  // Sample usage
  const cart = new ShoppingCart();
  cart.addItem(product1, 2);
  cart.addItem(product2, 1);
  cart.addItem(product3, 3);
  
  cart.displayCart();
  