export interface IBid {
  client_name: string
  client_code: string
  project_name: string
  qty: number
  estimate: string
  status: 'pending' | 'processing' | 'success' | 'failed'
}

export interface IBidRequest {
  types: {
    label: string
    value: string
    count: number
  }[]
  list: IBid[]
}
