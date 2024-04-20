'use client'
import { React, useState } from 'react'
import styles from '@/app/page.module.css'
import { useRouter, useSearchParams } from 'next/navigation'

export default function page() {

    const searchParams = useSearchParams()
    const [account, setAccount] = useState(Object.fromEntries(searchParams) || {})
    const router = useRouter()


    function handleChange(e) {
        const newAccount = { ...account }
        newAccount[e.target.name] = e.target.value;
        setAccount(newAccount);
    }
    async function handleSubmit(e) {
        e.preventDefault()
        // create a URL that allows us to add to the server
        // add
        if (!account.accountNo) {
            const url = '/api/accounts'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })
        }
        // update
        else {
            const url = `/api/accounts/${account.accountNo}`
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(account)
            })
        }
        router.push('/')
    }

    return (
        <>

            {!account.accountNo ?
                <h3 className={styles.title}>Add Account</h3> :
                <h3 className={styles.title}>Edit Account</h3>
            }


            <form id="account-form" className={styles.form} onSubmit={handleSubmit}>
                <label for="firstname">First Name</label>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    onChange={handleChange}
                    value={account.firstname}
                />

                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname"
                    onChange={handleChange}
                    value={account.lastname}
                />

                <label for="acctType">Account Type</label>
                <select name="acctType" id="acctType"
                    required onChange={handleChange}
                    value={account.acctType}>

                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label for="balance">Balance</label>
                <input type="number" name="balance" id="balance" required onChange={handleChange}

                    value={account.balance}
                />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange}
                    value={account.email}
                />

                <label for="dateOpened">Date Opened</label>
                <input type="date"
                    name="dateOpened" id="dateOpened"
                    onChange={handleChange}
                    value={account.dateOpened} />

                <label for="gender">Gender</label>
                <select name="gender" id="gender" required
                    onChange={handleChange}
                    value={account.gender}>

                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label for="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" onChange={handleChange}
                    value={account.profileImage} />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
