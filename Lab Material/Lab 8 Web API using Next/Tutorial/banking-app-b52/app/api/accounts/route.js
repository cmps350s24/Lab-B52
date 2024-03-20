import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function GET(request) {
    const accounts = await accountsRepo.getAccounts()
    return Response.json(accounts, { status: 200 })
}
export async function POST(request) {
    const account = await request.json()

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