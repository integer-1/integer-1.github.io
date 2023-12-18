export interface FurnitureDetailProps {
  itemCode?: number
  height?: number
  depth?: number
  width?: number
  frameType?: string
  color?: string
  description?: string
  etc?: string[]
}

export interface FurnitureItemsProps {
  code: number
  name: string
  price: number
  mainCategory: string
  SubCategory: string
  description: string
}
