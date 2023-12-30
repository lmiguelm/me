'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Pagination } from '.'

type Props = {
  currentPage: number
  totalPages: number
  defaultPath: string
}

export function PaginationComponent({
  currentPage,
  totalPages,
  defaultPath,
}: Props) {
  const pathName = usePathname()
  const router = useRouter()

  function handleChange(index: number) {
    if (index === 1) {
      return router.push(defaultPath)
    }

    const isPreviousPaginatedPage = pathName.includes('/page/')

    router.push(
      isPreviousPaginatedPage ? String(index) : `${defaultPath}/page/${index}`,
    )
  }

  return (
    <Pagination.Root>
      <Pagination.Action
        disabled={currentPage <= 1}
        side="left"
        onClick={() => handleChange(currentPage - 1)}
      />

      <Pagination.Label currentPage={currentPage} totalPages={totalPages} />

      <Pagination.Action
        disabled={currentPage >= totalPages}
        side="right"
        onClick={() => handleChange(currentPage + 1)}
      />
    </Pagination.Root>
  )
}
