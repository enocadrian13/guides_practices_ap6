// Strategies (workers)
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid ₱${amount} using Credit Card`);
    }
}

class PaypalPayment {
    pay(amount) {
        console.log(`Paid ₱${amount} using PayPal`);
    }
}

// Context (manager)
class PaymentContext {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    pay(amount) {
        if (!this.strategy) {
            throw new Error("Payment strategy not set!");
        }
        this.strategy.pay(amount);
    }
}

// Usage
const main = () => {
    const paymentContext = new PaymentContext();


    paymentContext.setStrategy(new CreditCardPayment());
    paymentContext.pay(1000);

    paymentContext.setStrategy(new PaypalPayment());
    paymentContext.pay(500);

}