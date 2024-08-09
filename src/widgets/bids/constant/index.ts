import { List, TableCellsMerge } from 'lucide-react'
import { Grid } from '../view/list/grid'
import { Table } from '../view/list/table'

export const viewModes = [
  { Icon: TableCellsMerge, value: 'table', Component: Table },
  { Icon: List, value: 'grid', Component: Grid },
]
