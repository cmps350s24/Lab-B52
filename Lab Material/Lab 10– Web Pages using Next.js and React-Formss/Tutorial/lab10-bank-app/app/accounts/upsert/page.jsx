'use client'
import { React, useState } from 'react'
import styles from '@/app/page.module.css'
export default function page() {

    const [account, setAccount] = useState({})

    function handleChange(e) {
        const newAccount = { ...account }
        newAccount[e.target.name] = e.target.value;
        setAccount(newAccount);
    }


    return (
        <>
            {JSON.stringify(account)}
            <h3 className={styles.title}>Add Account</h3>
            <form id="account-form" className={styles.form}>
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" onChange={handleChange} />

                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" onChange={handleChange} />

                <label for="acctType">Account Type</label>
                <select name="acctType" id="acctType" required onChange={handleChange} >
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label for="balance">Balance</label>
                <input type="number" name="balance" id="balance" required onChange={handleChange} />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} />

                <label for="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" onChange={handleChange} />

                <label for="gender">Gender</label>
                <select name="gender" id="gender" required onChange={handleChange} >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label for="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" onChange={handleChange} />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
