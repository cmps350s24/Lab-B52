'use client'
import { React, useState, useEffect } from 'react'
import styles from '@/app/page.module.css'
import { useRouter } from 'next/navigation'

export default function Transaction() {
    const [transaction, setTransaction] = useState({})
    const [accounts, setAccounts] = useState([])
    const router = useRouter()

    async function getAccounts() {
        const url = '/api/accounts'
        const response = await fetch(url)
        const accounts = await response.json()
        return accounts
    }
    useEffect(() => {
        getAccounts().then(accounts => setAccounts(accounts))
    }, [])

    function handleChange(e) {
        const newTransaction = { ...transaction }
        newTransaction[e.target.name] = e.target.value;
        setTransaction(newTransaction);
    }
    async function handleSubmit(e) {
        e.preventDefault()
        const url = `/api/accounts/${transaction.accountNo}/trans`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transaction)
        })
        const message = await response.json()
        console.log(JSON.stringify(message))
        router.push('/')
    }

    return (
        <>
            <h3 className={styles.title}>Add Transaction</h3>
            <form id="trans-form" className={styles.form} onSubmit={handleSubmit}>
                <label for="accountNo">Account No</label>
                <select name="accountNo" id="accountNo" required onChange={handleChange}>
                    {
                        accounts.map(account =>
                            <option value={account.accountNo}>
                                {account.accountNo} - {account.firstname} {account.lastname}  - {account.balance} QAR
                            </option>)
                    }
                </select>

                <label for="type">Transaction Type</label>
                <select name="transType" id="transType" required onChange={handleChange}>
                    <option></option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdraw">Withdraw</option>
                </select>

                <label for="amount">Amount</label>
                <input type="number" id="amount" name="amount" required onChange={handleChange} />
                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
