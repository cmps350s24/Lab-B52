import { expect } from 'chai';
import * as repo from './bank.js';
const testAccount = {
    accountNo: 666,
    balance: 0,
    type: 'saving'
}

describe('Testing the Bank Repo', () => {
    describe('Add Account', () => {
        it('The size of the accounts array should increase', () => {
            const lengthBeforeAdding = repo.getAccounts().length;
            repo.addAccount(testAccount);
            const lengthAfterAdding = repo.getAccounts().length;
            expect(lengthAfterAdding).to.equal(lengthBeforeAdding + 1);
        })
    })

    describe('Deposit Account', () => {
        it('The function should return false when account does not exit', () => {
            const isDeposited = repo.deposit(888, 100)
            expect(isDeposited).to.equal(false)
        })
        it('The function should return false when amount is negative', () => {
            const isDeposited = repo.deposit(888, -100)
            expect(isDeposited).to.equal(false)
        })
        it('The balance should increase', () => {
            let oldBalance = repo.getAccount(123).balance
            repo.deposit(123, 100)
            let newBalance = repo.getAccount(123).balance

            expect(newBalance).to.equal(oldBalance + 100)
        })

    })
})

