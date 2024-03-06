import { expect } from 'chai';
import { getAccounts, addAccount } from './bank.js';
const testAccount = {
    accountNo: 666,
    balance: 0,
    type: 'saving'
}

describe('Add Account', () => {
    it('The size of the accounts array should increase', () => {
        const lengthBeforeAdding = getAccounts().length;
        addAccount(testAccount);
        const lengthAfterAdding = getAccounts().length;
        expect(lengthAfterAdding).to.equal(lengthBeforeAdding + 1);
    })
})