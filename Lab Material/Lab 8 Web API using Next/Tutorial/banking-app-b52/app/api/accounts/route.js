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

export async function GET() {
    return Response.json(accounts, { status: 200 })
}