import { sayHello, getAccounts, addAccount } from "./repo/bank.js";

sayHello('Fatima')

const testAccount = {
    accountNo: 555,
    balance: 500,
    type: 'saving'
}
addAccount(testAccount)
console.log(getAccounts());