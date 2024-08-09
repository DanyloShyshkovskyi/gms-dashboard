export interface IProject {
  project_name: string
  production_date: number
  budget: number
  actual_spent: number
  budget_actual: number
  status: 'active' | 'completed' | 'draft'
  charge_code: string
  client_name: string
}

export interface IProjectRequest {
  types: {
    label: string
    value: string
    count: number
  }[]
  list: IProject[]
}
