'use client'
import { React, useState } from 'react'
import styles from '@/app/page.module.css'
import Account from './Account'
import { useRouter } from 'next/navigation'



export default function Accounts({ initialAccounts }) {
    const [accounts, setAccounts] = useState(initialAccounts)
    const [selectedFilter, setSelectedFilter] = useState('All')
    const router = useRouter()

    async function handleLoadAccounts(acctType) {
        const response = await fetch(`/api/accounts?type=${acctType}`)
        setAccounts(await response.json())
        setSelectedFilter(acctType)

    }
    async function handleDelete(accountNo) {
        const confirmation = confirm(`Are you sure you want to delete account No ${accountNo}?`)
        if (!confirmation) return;

        const response = await fetch(`/api/accounts/${accountNo}`, {
            method: 'DELETE'
        })

        handleLoadAccounts(selectedFilter)
    }

    return (
        <>
            <div className={styles.formGroup}>
                <label for="acctType">
                    Account Type
                </label>
                <select

                    id="acctType"
                    onChange={e => handleLoadAccounts(e.target.value)}
                    className={styles.filterDropdown}>
                    <option value="All">All</option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>
            </div>

            <table id="accounts" className={styles.table}>
                <thead>
                    <tr>
                        <th>Profile Image</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Account No</th>
                        <th>Account Type</th>
                        <th>Balance</th>
                        <th>Email</th>
                        <th>Date Opened</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts.map(account => <Account
                            key={account.accountNo}
                            account={account}
                            onDelete={handleDelete} />)
                    }
                </tbody>
            </table>
        </>

    )
}
// Accounts.defaultProps = {
//     initialAccounts: []
// }