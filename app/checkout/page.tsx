"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { MainLayout } from "@/components/templates/main-layout"
import { CheckoutForm } from "@/components/organisms/checkout-form"
import { useAuth } from "@/components/providers/auth-provider"
import { useCart } from "@/components/providers/cart-provider"

export default function CheckoutPage() {
  const router = useRouter()
  const { user, isLoading } = useAuth()
  const { items } = useCart()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/")
    }
    if (!isLoading && items.length === 0) {
      router.push("/cart")
    }
  }, [user, isLoading, items, router])

  if (isLoading) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-48 mb-8"></div>
            <div className="h-96 bg-muted rounded"></div>
          </div>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>
        <div className="max-w-lg mx-auto">
          <CheckoutForm />
        </div>
      </div>
    </MainLayout>
  )
}
