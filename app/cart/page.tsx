"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MainLayout } from "@/components/templates/main-layout"
import { CartItemList } from "@/components/organisms/cart-item-list"
import { CartSummary } from "@/components/organisms/cart-summary"
import { useLanguage } from "@/components/providers/language-provider"

export default function CartPage() {
  const { t } = useLanguage()

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {t.cart.continueShopping}
          </Link>
          <h1 className="text-3xl font-bold mt-4">{t.cart.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartItemList />
          </div>
          <div>
            <CartSummary />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
