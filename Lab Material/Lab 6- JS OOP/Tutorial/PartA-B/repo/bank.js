export function sayHello(name) {
    console.log(`Hello ${name}`);
}

const accounts = [
    {
        accountNo: 123,
        balance: 500,
        type: 'saving'
    },
    {
        accountNo: 234,
        balance: 4000,
        type: 'current'
    }
]

export function getAccounts() {
    return accounts
}

export function addAccount(account) {
    accounts.push(account)
}

export function deposit(accountNo, amount){
    
}