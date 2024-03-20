class AccountsRepo {
    constructor() {
        this.accounts = [
            {
                accountNo: 123,
                balance: 1000,
                accountType: "Savings"
            },
            {
                accountNo: 124,
                balance: 2000,
                accountType: "Current"
            }
        ]

    }

    getAccounts() {
        return this.accounts;
    }

    addAccount(account) {
        account.accountNo = Math.floor(Math.random() * 1000) + 1
        accounts.push(account)
        return account
    }

    updateAccount(account) {
        const index = accounts.findIndex(acc => acc.accountNo === account.accountNo)
        if (index === -1)
            return "account not found"

        accounts[index] = account
        return "successfully updated account"
    }

    deleteAccount(accountNo){
        const index = accounts.findIndex(acc => acc.accountNo === accountNo)
        if (index === -1)
            return "account not found"

        accounts.splice(index, 1)
        return "successfully deleted account" 
    }
}