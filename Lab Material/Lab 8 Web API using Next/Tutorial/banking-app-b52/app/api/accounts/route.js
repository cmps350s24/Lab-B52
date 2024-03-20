const accounts = [
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

export async function GET(request) {
    return Response.json(accounts, { status: 200 })
}
export async function POST(request) {
    const account = await request.json()
    account.accountNo = Math.floor(Math.random() * 1000) + 1
    accounts.push(account)
    return Response.json(account, { status: 201 })
}

export async function PUT(request) {
    const account = await request.json()
    const index = accounts.findIndex(acc => acc.accountNo === account.accountNo)
    if (index === -1)
        return Response.json({ message: "account not found" }, { status: 404 })

    accounts[index] = account
    return Response.json({ message: "successfully updated" }, { status: 200 })
}

// npm i
// npm run dev