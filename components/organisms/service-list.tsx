"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ServiceCard, type Service } from "@/components/molecules/service-card"

interface ServiceListProps {
  services: Service[]
}

export function ServiceList({ services }: ServiceListProps) {
  const [search, setSearch] = useState("")
  const [priceFilter, setPriceFilter] = useState<string>("all")
  const [durationFilter, setDurationFilter] = useState<string>("all")

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name.toLowerCase().includes(search.toLowerCase()) ||
      service.description.toLowerCase().includes(search.toLowerCase())

    const matchesPrice =
      priceFilter === "all" ||
      (() => {
        const minPrice = Math.min(...service.plans.map((p) => p.price))
        if (priceFilter === "under100k") return minPrice < 100000
        if (priceFilter === "100k-500k") return minPrice >= 100000 && minPrice <= 500000
        if (priceFilter === "over500k") return minPrice > 500000
        return true
      })()

    const matchesDuration = durationFilter === "all" || service.plans.some((p) => p.duration.includes(durationFilter))

    return matchesSearch && matchesPrice && matchesDuration
  })

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm dịch vụ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Select value={priceFilter} onValueChange={setPriceFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Giá" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả giá</SelectItem>
              <SelectItem value="under100k">Dưới 100k</SelectItem>
              <SelectItem value="100k-500k">100k - 500k</SelectItem>
              <SelectItem value="over500k">Trên 500k</SelectItem>
            </SelectContent>
          </Select>
          <Select value={durationFilter} onValueChange={setDurationFilter}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Thời hạn" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả</SelectItem>
              <SelectItem value="1 tháng">1 tháng</SelectItem>
              <SelectItem value="3 tháng">3 tháng</SelectItem>
              <SelectItem value="12 tháng">12 tháng</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy dịch vụ nào phù hợp.</p>
        </div>
      )}
    </div>
  )
}
