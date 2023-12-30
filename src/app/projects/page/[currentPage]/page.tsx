import { Projects } from '@/components/projects'
import { createClient } from '@/prismicio'

const PROJECTS_PER_PAGE = 5

export async function generateStaticParams() {
  const client = createClient()

  const result = await client.getByType('project')
  const numberOfPages = Math.round(result.results_size / PROJECTS_PER_PAGE)

  const pages = Array.from({ length: numberOfPages }, (_, index) => index + 1)
  const pagesWithoutFirstElement = pages.slice(1, pages.length)

  return pagesWithoutFirstElement.map((page) => ({
    currentPage: String(page),
  }))
}

type Props = {
  params: {
    currentPage: number
  }
}

export default async function ProjectsPageWithPagination({ params }: Props) {
  return <Projects currentPage={params.currentPage} />
}
