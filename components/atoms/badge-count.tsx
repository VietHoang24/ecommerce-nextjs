interface BadgeCountProps {
  count: number
  className?: string
}

export function BadgeCount({ count, className }: BadgeCountProps) {
  if (count === 0) return null

  return (
    <span
      className={`absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground ${className}`}
    >
      {count > 99 ? "99+" : count}
    </span>
  )
}
