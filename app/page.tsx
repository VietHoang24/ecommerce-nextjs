"use client"

import { MainLayout } from "@/components/templates/main-layout"
import { ServiceList } from "@/components/organisms/service-list"
import { mockServices } from "@/lib/mock-data"
import { useLanguage } from "@/components/providers/language-provider"
import { Zap, Shield, Clock, CreditCard } from "lucide-react"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              {t.hero.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              {t.hero.title}
              <span className="text-primary"> {t.hero.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">{t.hero.description}</p>
          </div>
        </div>
      </section>

     

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.services.description}</p>
          </div>
          <ServiceList services={mockServices} />
        </div>
      </section>
    </MainLayout>
  )
}
