import React from 'react'
import styles from '@/app/page.module.css'
export default function page() {
    function handleChange(e) {
        console.log(`${e.target.name} = ${e.target.value}`);
    }
    return (
        <>
            <h3 className={styles.title}>Add Account</h3>
            <form id="account-form" className={styles.form}>
                <label for="firstname">First Name</label>
                <input type="text" name="firstname" id="firstname" onChange={handleChange} />

                <label for="lastname">Last Name</label>
                <input type="text" name="lastname" id="lastname" />

                <label for="acctType">Account Type</label>
                <select name="acctType" id="acctType" required>
                    <option value=""></option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>

                <label for="balance">Balance</label>
                <input type="number" name="balance" id="balance" required />

                <label for="email">Email</label>
                <input type="email" name="email" id="email" />

                <label for="dateOpened">Date Opened</label>
                <input type="date" name="dateOpened" id="dateOpened" />

                <label for="gender">Gender</label>
                <select name="gender" id="gender" required>
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <label for="profileImage">Profile Image URL</label>
                <input type="url" name="profileImage" id="profileImage" />

                <button type="Submit">Submit</button>
            </form>
        </>
    )
}
