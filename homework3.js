class BankAccount {
    constructor(name, accountNumber, initialBalance) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
        } else {
            console.log("Invalid deposit amount. Please provide a positive value.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
        } else {
            console.log("Insufficient balance or invalid withdrawal amount.");
        }
    }

    getBalance() {
        console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
        return this.balance;
    }
}

// Create an Account
const myAccount = new BankAccount("Steve Jobs", "14828757157", 2000);
//Depositing and withdrawing the money
myAccount.deposit(5287); 
myAccount.withdraw(379); 
myAccount.getBalance(); 
//Account number
myAccount.accountNumber
//withdrawing more in in the balance
myAccount.withdraw(8000);
myAccount.deposit(900000);
myAccount.getBalance();