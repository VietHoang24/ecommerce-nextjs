"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LoginButton } from "./login-button"

interface LoginRequiredDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginRequiredDialog({ open, onOpenChange }: LoginRequiredDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Yêu cầu đăng nhập</DialogTitle>
          <DialogDescription>
            Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <LoginButton />
        </div>
      </DialogContent>
    </Dialog>
  )
}
