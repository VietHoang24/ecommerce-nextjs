import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TransactionItem } from "@/components/molecules/transaction-item"
import type { WalletTransaction } from "@/lib/mock-data"

interface TransactionHistoryProps {
  transactions: WalletTransaction[]
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Lịch sử giao dịch ví</CardTitle>
      </CardHeader>
      <CardContent>
        {transactions.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">Chưa có giao dịch nào</p>
        ) : (
          <div className="space-y-1">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
