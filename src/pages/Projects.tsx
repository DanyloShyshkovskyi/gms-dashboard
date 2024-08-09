import withTitleAndBreadcrumb from 'layout/with-header'
import { FilterHeader, ProjectProvider, ViewList } from 'widgets/projects'

const Projects = () => {
  return (
    <ProjectProvider>
      <FilterHeader />
      <ViewList />
    </ProjectProvider>
  )
}

const WrappedContent = withTitleAndBreadcrumb(Projects)

export const Component = () => <WrappedContent title={'Projects'} />
