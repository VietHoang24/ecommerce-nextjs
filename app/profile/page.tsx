"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainLayout } from "@/components/templates/main-layout"
import { ProfileCard } from "@/components/organisms/profile-card"
import { TransactionHistory } from "@/components/organisms/transaction-history"
import { useAuth } from "@/components/providers/auth-provider"
import { mockWalletTransactions } from "@/lib/mock-data"

export default function ProfilePage() {
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="h-80 bg-muted rounded"></div>
              <div className="lg:col-span-2 h-64 bg-muted rounded"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Hồ sơ cá nhân</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <TransactionHistory transactions={mockWalletTransactions} />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
