function sayHello(name) {
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

function getAccounts() {
    return accounts
}

function addAccount(account) {
    accounts.push(account)
}

function deposit(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount < 0)
        return false

    account.balance += amount
    return true
}
function withdraw(accountNo, amount) {
    const account = accounts.find(account => account.accountNo === accountNo)
    if (!account || amount < 0 || account.balance < amount)
        return false

    account.balance -= amount
    return true
}
function getAccount(accountNo) {
    return accounts.find(account => account.accountNo === accountNo)
}
function deleteAccount(accountNo) {
    const index = accounts.findIndex(a => a.accountNo == accountNo)
    if (index < 0) return false

    accounts.splice(index, 1)
    return true
}

function sumBalance() {

    return accounts.reduce((acc, account) => acc + account.balance, 0)
}

function distributeBenefits(benefitPercentage) {

    // const mappedAccounts = accounts.map(account => {
    //     return {
    //         accountNo: account.accountNo,
    //         type: account.type,
    //         balance: account.type === 'saving' ? account.balance + account.balance * benefitPercentage : account.balance,
    //     }
    // })

    // accounts = mappedAccounts

    accounts.forEach(a => (a.type == 'saving') ? a.balance += a.balance * benefitPercentage : 0)

    for (let account of accounts) 
        if (account.type == 'saving')
            account.balance += account.balance * benefitPercentage
    
}

export { sayHello, getAccounts, addAccount, deposit, withdraw, getAccount, sumBalance }