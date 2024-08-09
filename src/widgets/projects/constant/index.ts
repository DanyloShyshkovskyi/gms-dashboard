import { List, TableCellsMerge } from 'lucide-react'

import { Grid } from '../view/list/grid'
import { TableView } from '../view/list/table'

export const viewModes = [
  { Icon: TableCellsMerge, value: 'table', Component: TableView },
  { Icon: List, value: 'grid', Component: Grid },
]
