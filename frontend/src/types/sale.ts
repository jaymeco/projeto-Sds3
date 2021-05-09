export type Sale = {
  id: number,
  visited: number,
  deals: number,
  amount: number,
  date: string,
  seller: {
    id: number,
    name: string,
  }
}

export type Salepage = {
  content?: Sale[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  size?: number,
  number: number,
  numberOfElements?: number,
  first: boolean,
  empty?: boolean
}

export type SaleSum = {
  sellerName: string,
  sum: number
}

export type SaleSuccess = {
  sellerName: string,
  visited: number,
  deals: number
}