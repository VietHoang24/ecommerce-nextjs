import type { Service } from "@/components/molecules/service-card"

export const mockServices: Service[] = [
  {
    id: "netflix",
    name: "Netflix Premium",
    image: "/netflix-streaming-service-red-logo.jpg",
    description: "Xem phim, series không giới hạn với chất lượng 4K Ultra HD trên tất cả thiết bị.",
    plans: [
      { id: "netflix-1m", name: "1 tháng", duration: "1 tháng", price: 89000 },
      { id: "netflix-3m", name: "3 tháng", duration: "3 tháng", price: 249000 },
      { id: "netflix-12m", name: "12 tháng", duration: "12 tháng", price: 899000 },
    ],
    available: true,
  },
  {
    id: "canva",
    name: "Canva Pro",
    image: "/canva-design-tool-purple-logo.jpg",
    description: "Công cụ thiết kế chuyên nghiệp với hàng triệu template và assets premium.",
    plans: [
      { id: "canva-1m", name: "1 tháng", duration: "1 tháng", price: 99000 },
      { id: "canva-3m", name: "3 tháng", duration: "3 tháng", price: 279000 },
      { id: "canva-12m", name: "12 tháng", duration: "12 tháng", price: 999000 },
    ],
    available: true,
  },
  {
    id: "cursor",
    name: "Cursor Pro",
    image: "/cursor-ai-code-editor-dark-theme.jpg",
    description: "IDE AI-powered cho lập trình viên với khả năng code completion thông minh.",
    plans: [
      { id: "cursor-1m", name: "1 tháng", duration: "1 tháng", price: 199000 },
      { id: "cursor-3m", name: "3 tháng", duration: "3 tháng", price: 549000 },
      { id: "cursor-12m", name: "12 tháng", duration: "12 tháng", price: 1990000 },
    ],
    available: true,
  },
  {
    id: "veo3",
    name: "Google Veo 3",
    image: "/google-veo-ai-video-generation.jpg",
    description: "Tạo video từ text với AI tiên tiến nhất từ Google DeepMind.",
    plans: [
      { id: "veo3-1m", name: "1 tháng", duration: "1 tháng", price: 299000 },
      { id: "veo3-3m", name: "3 tháng", duration: "3 tháng", price: 849000 },
      { id: "veo3-12m", name: "12 tháng", duration: "12 tháng", price: 2990000 },
    ],
    available: true,
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    image: "/spotify-music-streaming-green-logo.jpg",
    description: "Nghe nhạc không quảng cáo, download offline, chất lượng cao.",
    plans: [
      { id: "spotify-1m", name: "1 tháng", duration: "1 tháng", price: 59000 },
      { id: "spotify-3m", name: "3 tháng", duration: "3 tháng", price: 169000 },
      { id: "spotify-12m", name: "12 tháng", duration: "12 tháng", price: 599000 },
    ],
    available: true,
  },
  {
    id: "chatgpt",
    name: "ChatGPT Plus",
    image: "/chatgpt-openai-ai-assistant.jpg",
    description: "Truy cập GPT-4, DALL-E 3 và các công cụ AI tiên tiến nhất.",
    plans: [
      { id: "chatgpt-1m", name: "1 tháng", duration: "1 tháng", price: 499000 },
      { id: "chatgpt-3m", name: "3 tháng", duration: "3 tháng", price: 1399000 },
      { id: "chatgpt-12m", name: "12 tháng", duration: "12 tháng", price: 4990000 },
    ],
    available: true,
  },
  {
    id: "youtube",
    name: "YouTube Premium",
    image: "/youtube-premium-video-red-logo.jpg",
    description: "Xem video không quảng cáo, phát nền, download offline.",
    plans: [
      { id: "youtube-1m", name: "1 tháng", duration: "1 tháng", price: 79000 },
      { id: "youtube-3m", name: "3 tháng", duration: "3 tháng", price: 229000 },
      { id: "youtube-12m", name: "12 tháng", duration: "12 tháng", price: 799000 },
    ],
    available: false,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    image: "/midjourney-ai-art-generation.jpg",
    description: "Tạo hình ảnh nghệ thuật AI với chất lượng cao nhất thị trường.",
    plans: [
      { id: "midjourney-1m", name: "1 tháng", duration: "1 tháng", price: 299000 },
      { id: "midjourney-3m", name: "3 tháng", duration: "3 tháng", price: 849000 },
      { id: "midjourney-12m", name: "12 tháng", duration: "12 tháng", price: 2990000 },
    ],
    available: true,
  },
]

export interface Order {
  id: string
  items: {
    serviceName: string
    planName: string
    price: number
  }[]
  totalAmount: number
  discount: number
  finalAmount: number
  status: "pending" | "paid" | "success" | "failed" | "refunded"
  createdAt: string
  credentials?: {
    email: string
    password: string
    expireAt: string
  }
  failureReason?: string
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    items: [{ serviceName: "Netflix Premium", planName: "3 tháng", price: 249000 }],
    totalAmount: 249000,
    discount: 0,
    finalAmount: 249000,
    status: "success",
    createdAt: "2024-12-25T10:30:00Z",
    credentials: {
      email: "netflix_acc_001@mail.com",
      password: "SecurePass123!",
      expireAt: "2025-03-25",
    },
  },
  {
    id: "ORD-002",
    items: [
      { serviceName: "Canva Pro", planName: "12 tháng", price: 999000 },
      { serviceName: "ChatGPT Plus", planName: "1 tháng", price: 499000 },
    ],
    totalAmount: 1498000,
    discount: 149800,
    finalAmount: 1348200,
    status: "success",
    createdAt: "2024-12-20T14:15:00Z",
    credentials: {
      email: "canva_pro_002@mail.com",
      password: "CanvaPro2024!",
      expireAt: "2025-12-20",
    },
  },
  {
    id: "ORD-003",
    items: [{ serviceName: "Cursor Pro", planName: "1 tháng", price: 199000 }],
    totalAmount: 199000,
    discount: 0,
    finalAmount: 199000,
    status: "pending",
    createdAt: "2024-12-28T09:00:00Z",
  },
  {
    id: "ORD-004",
    items: [{ serviceName: "YouTube Premium", planName: "3 tháng", price: 229000 }],
    totalAmount: 229000,
    discount: 0,
    finalAmount: 229000,
    status: "failed",
    createdAt: "2024-12-15T16:45:00Z",
    failureReason: "Hết hàng, đang chờ nhập thêm. Đã hoàn tiền vào ví.",
  },
]

export interface MyService {
  id: string
  orderId: string
  serviceName: string
  serviceImage: string
  planName: string
  status: "active" | "expiring" | "expired"
  expireAt: string
  credentials: {
    email: string
    password: string
  }
}

export const mockMyServices: MyService[] = [
  {
    id: "svc-001",
    orderId: "ORD-001",
    serviceName: "Netflix Premium",
    serviceImage: "/netflix-logo.png",
    planName: "3 tháng",
    status: "active",
    expireAt: "2025-03-25",
    credentials: {
      email: "netflix_acc_001@mail.com",
      password: "SecurePass123!",
    },
  },
  {
    id: "svc-002",
    orderId: "ORD-002",
    serviceName: "Canva Pro",
    serviceImage: "/abstract-design-logo.png",
    planName: "12 tháng",
    status: "active",
    expireAt: "2025-12-20",
    credentials: {
      email: "canva_pro_002@mail.com",
      password: "CanvaPro2024!",
    },
  },
  {
    id: "svc-003",
    orderId: "ORD-002",
    serviceName: "ChatGPT Plus",
    serviceImage: "/chatgpt-inspired-abstract.png",
    planName: "1 tháng",
    status: "expiring",
    expireAt: "2025-01-05",
    credentials: {
      email: "chatgpt_user_003@mail.com",
      password: "GPT4Access!",
    },
  },
]

export interface WalletTransaction {
  id: string
  type: "topup" | "purchase" | "refund"
  amount: number
  description: string
  createdAt: string
}

export const mockWalletTransactions: WalletTransaction[] = [
  {
    id: "txn-001",
    type: "topup",
    amount: 500000,
    description: "Nạp tiền qua Cpay",
    createdAt: "2024-12-20T10:00:00Z",
  },
  {
    id: "txn-002",
    type: "purchase",
    amount: -249000,
    description: "Thanh toán đơn hàng #ORD-001",
    createdAt: "2024-12-25T10:30:00Z",
  },
  {
    id: "txn-003",
    type: "refund",
    amount: 229000,
    description: "Hoàn tiền đơn hàng #ORD-004",
    createdAt: "2024-12-15T17:00:00Z",
  },
  {
    id: "txn-004",
    type: "topup",
    amount: 1000000,
    description: "Nạp tiền qua Stripe",
    createdAt: "2024-12-10T09:15:00Z",
  },
]
