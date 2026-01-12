"use client"

import { useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MainLayout } from "@/components/templates/main-layout"
import { OrderDetailCard } from "@/components/organisms/order-detail-card"
import { useAuth } from "@/components/providers/auth-provider"
import { mockOrders } from "@/lib/mock-data"

export default function OrderDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { user, isLoading } = useAuth()

  const order = mockOrders.find((o) => o.id === params.id)

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
            <div className="h-6 bg-muted rounded w-32 mb-8"></div>
            <div className="h-64 bg-muted rounded"></div>
          </div>
        </div>
      </MainLayout>
    )
  }

  if (!order) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">Không tìm thấy đơn hàng</p>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/orders"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách đơn hàng
          </Link>
          <h1 className="text-3xl font-bold mt-4">Chi tiết đơn hàng</h1>
        </div>

        <div className="max-w-2xl mx-auto">
          <OrderDetailCard order={order} />
        </div>
      </div>
    </MainLayout>
  )
}
