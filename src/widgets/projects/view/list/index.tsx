import { useProjectContext } from 'widgets/projects'
import { viewModes } from 'widgets/projects/constant'

export const ViewList = () => {
  const { viewMode, data, isLoading } = useProjectContext()
  const Component = viewModes.find(({ value }) => value === viewMode)?.Component
  if (!Component) return <h1>View Mode not found</h1>

  if (data === undefined && !isLoading) return <h1>No data</h1>

  return <Component />
}
