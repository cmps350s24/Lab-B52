import React from 'react'
import accountsRepo from '@/app/repo/accounts-repo'

export default async function Accounts() {
    const accounts = await accountsRepo.getAccounts()
    return <>
        <table>
            <thead>
                <tr>
                    <th>Account Number</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    accounts.map(account =>
                        <tr>
                            <td>{account.accountNo}</td>
                            <td>{account.firstname}</td>
                            <td>{account.lastname}</td>
                            <td>
                                <img src={account.profileImage} alt="" />
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
}