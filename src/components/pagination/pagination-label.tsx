type Props = {
  currentPage: number
  totalPages: number
}

export function PaginationLabel(props: Props) {
  return (
    <div className="flex items-center gap-1 text-sm text-muted-foreground">
      <span>Página</span>
      <span className="font-semibold">{props.currentPage}</span>
      <span>de</span>
      <span className="font-semibold">{props.totalPages}</span>
    </div>
  )
}
