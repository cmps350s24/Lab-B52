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
    return Response.json(account, { status: 200 })
}