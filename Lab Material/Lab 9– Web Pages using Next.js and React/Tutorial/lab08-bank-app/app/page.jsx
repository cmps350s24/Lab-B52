import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Accounts from '@/app/accounts/Accounts'
import accountsRepo from '@/app/repo/accounts-repo'


export default async function Home() {
  const accounts = await accountsRepo.getAccounts()
  return <>
    <Accounts initialAccounts={accounts} />
  </>
}

