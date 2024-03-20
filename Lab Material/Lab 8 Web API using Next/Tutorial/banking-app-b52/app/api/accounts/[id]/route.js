import AccountsRepo from "@/app/repo/accounts-repo"
const accountsRepo = new AccountsRepo()

export async function PUT(request, { params }) {
    const accountUpdates = await request.json()
    const accountNo = params.id
    const updatedAccounts = await accountsRepo.updateAccount(accountUpdates, accountNo)

    return Response.json(updatedAccounts, { status: 200 })
}
export async function DELETE(request, { params }) {
    const accountNo = params.id
    const message = await accountsRepo.deleteAccount(accountNo)

    return Response.json(message, { status: 200 })
}