"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MainLayout } from "@/components/templates/main-layout"
import { WalletBalance } from "@/components/organisms/wallet-balance"
import { TopupForm } from "@/components/organisms/topup-form"
import { TransactionHistory } from "@/components/organisms/transaction-history"
import { useAuth } from "@/components/providers/auth-provider"
import { mockWalletTransactions } from "@/lib/mock-data"

export default function WalletPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="h-32 bg-muted rounded"></div>
                <div className="h-96 bg-muted rounded"></div>
              </div>
              <div className="h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/profile"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại hồ sơ
          </Link>
          <h1 className="text-3xl font-bold mt-4">Nạp tiền</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <WalletBalance />
            <TopupForm />
          </div>
          <div>
            <TransactionHistory transactions={mockWalletTransactions} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
