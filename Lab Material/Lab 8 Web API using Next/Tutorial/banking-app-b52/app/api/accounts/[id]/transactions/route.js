import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()


export async function GET(request, { params }) {
    const accountNo = params.id
    const transactions = await accountsRepo.getTransactions(accountNo)
    return Response.json(transactions)
}
export async function POST(request, { params }) {
    const transaction = await request.json()
    const accountNo = params.id
    const account = await accountsRepo.addTransaction(accountNo, transaction)
    return Response.json(account, { status: 200 })
}