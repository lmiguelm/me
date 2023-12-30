import { LinkField } from '@prismicio/client'

declare module '@prismicio/client' {
  export interface LinkField {
    url: string
    link_type: string
  }
}
