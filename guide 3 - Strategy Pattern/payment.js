class PaymentContext{

    //gcash
    paywithGcash(mobile, amount){
        console.log(`You've paid ${amount} using this gcash ${mobile} number`);
    }

    //paypal
    paywithPaypal(email, amount){
        console.log(`You've paid ${amount} using paypal!`);
    }
}

const main = (choice) => {

    const totalAmount = 100000;

    const paymentOption = new PaymentContext();

    // const choice = parseInt(window.prompt("Select Payment Method 1. Gcash 2. Paypal"));

    switch(choice){
        case 1:
            const mobile = window.prompt("Enter Mobile Number: ");

            paymentOption.paywithGcash(mobile, totalAmount);
            break;
        case 2: 
            const email = window.prompt("Enter Email Address: ");

            paymentOption.paywithPaypal(email, totalAmount);
            break;
        default:
            window.alert("Invalid Payment Method");
            break;
    }

}