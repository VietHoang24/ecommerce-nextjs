"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Copy, Check, Eye, EyeOff, RefreshCw } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/atoms/status-badge"
import type { MyService } from "@/lib/mock-data"

interface MyServiceCardProps {
  service: MyService
}

export function MyServiceCard({ service }: MyServiceCardProps) {
  const [showCredentials, setShowCredentials] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)

  const expireDate = new Date(service.expireAt).toLocaleDateString("vi-VN")
  const daysLeft = Math.ceil((new Date(service.expireAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24))

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopied(field)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-muted shrink-0">
            <Image
              src={service.serviceImage || "/placeholder.svg"}
              alt={service.serviceName}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="font-semibold truncate">{service.serviceName}</h3>
              <StatusBadge status={service.status} />
            </div>
            <p className="text-sm text-muted-foreground">{service.planName}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Hết hạn: {expireDate} ({daysLeft > 0 ? `còn ${daysLeft} ngày` : "Đã hết hạn"})
            </p>
          </div>
        </div>

        {/* Credentials Toggle */}
        <div className="mt-4 pt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCredentials(!showCredentials)}
            className="w-full gap-2"
          >
            {showCredentials ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showCredentials ? "Ẩn thông tin" : "Xem thông tin tài khoản"}
          </Button>

          {showCredentials && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between p-2 bg-secondary rounded text-sm">
                <span className="font-mono truncate">{service.credentials.email}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 shrink-0"
                  onClick={() => copyToClipboard(service.credentials.email, `email-${service.id}`)}
                >
                  {copied === `email-${service.id}` ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
              <div className="flex items-center justify-between p-2 bg-secondary rounded text-sm">
                <span className="font-mono">{service.credentials.password}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 shrink-0"
                  onClick={() => copyToClipboard(service.credentials.password, `pass-${service.id}`)}
                >
                  {copied === `pass-${service.id}` ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Renew Button */}
        {(service.status === "expiring" || service.status === "expired") && (
          <div className="mt-3">
            <Button size="sm" className="w-full gap-2" asChild>
              <Link href="/">
                <RefreshCw className="h-4 w-4" />
                Gia hạn dịch vụ
              </Link>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
