import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()


export async function GET(request, { params }) {
    const accountNo = params.id
    const transactions = await accountsRepo.getTransactions(accountNo)
    return Response.json(transactions)
}
export async function POST(request, { params }) {

}