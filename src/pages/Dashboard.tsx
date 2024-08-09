import withTitleAndBreadcrumb from 'layout/with-header'

const Dashboard = () => {
  return <article>Dashboard view</article>
}

const WrappedComponent = withTitleAndBreadcrumb(Dashboard)

export const Component = () => <WrappedComponent badge={{ label: 'New' }} />
