import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
class AccountsRepo {

    async addOwner(owner) {
        try {
            return prisma.owner.create({
                data: owner
            })
        } catch (error) {
            return { error: error.message }
        }
    }
    async addAccount(account) {
        try {
            return prisma.account.create({
                data: account
            })
        } catch (error) {
            return { error: error.message }
        }
    }

    async getOwners() {
        try {
            return prisma.owner.findMany()
        } catch (error) {
            return { error: error.message }
        }
    }
    async getAccounts(acctType) {
        try {
            if (!acctType || acctType === 'All')
                return prisma.account.findMany({
                    include: { Owner: true }
                })

            return prisma.account.findMany({
                where: { acctType },
                include: { Owner: true }
            })

        } catch (error) {
            return { error: error.message }
        }
    }

    async updateAccount(accountNo, account) {
        try {
            return prisma.account.update(
                { data: account },
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async getAccount(accountNo) {
        try {
            return prisma.account.findFirst(
                {
                    where: { accountNo },
                    include: { Owner: true }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async searchOwner(name) {
        try {
            return prisma.owner.findMany(
                {
                    where: {
                        OR: [
                            { firstName: { contains: name } },
                            { lastName: { contains: name } }
                        ]
                    }
                }
            )
        } catch (error) {
            return { error: error.message }
        }
    }

    async deleteAccount(accountNo) {
        try {
            return prisma.account.delete(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async getTransactions(accountNo) {
        try {
            return prisma.transaction.findMany(
                { where: { accountNo } }
            )
        } catch (error) {
            return { error: error.message }
        }
    }
    async addTransaction(accountNo, transaction) {
        // update the missing information of the transaction object
        transaction.accountNo = accountNo
        transaction.amount = parseInt(transaction.amount.toString());

        try {
            // step 1 : find the account they want to withdraw from
            // step 2 : check if the account has enough balance [withdraw]
            // step 3 : update the account balance
            // step 4 : add the transaction to the database
            const account = await this.getAccount(accountNo)
            if (transaction.transType == "Deposit")
                account.balance += transaction.amount
            else if (account.balance >= transaction.amount)
                account.balance -= transaction.amount
            else
                return { message: "Insufficient Balance" }

            this.updateAccount(accountNo, account)
            return prisma.transaction.create({ data: transaction })

        } catch (error) {
            return { error: error.message }
        }
    }
}

export default new AccountsRepo()