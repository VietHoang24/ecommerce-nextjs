"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MyServiceCard } from "@/components/molecules/my-service-card"
import type { MyService } from "@/lib/mock-data"

interface MyServiceListProps {
  services: MyService[]
}

export function MyServiceList({ services }: MyServiceListProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredServices = services.filter((service) => statusFilter === "all" || service.status === statusFilter)

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="active">Còn hạn</SelectItem>
            <SelectItem value="expiring">Sắp hết hạn</SelectItem>
            <SelectItem value="expired">Hết hạn</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredServices.map((service) => (
          <MyServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Bạn chưa có dịch vụ nào</p>
        </div>
      )}
    </div>
  )
}
