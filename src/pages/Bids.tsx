import withTitleAndBreadcrumb from 'layout/with-header'
import { BidsProvider, FilterHeader, ViewList } from 'widgets/bids'

const Bids = () => {
  return (
    <BidsProvider>
      <FilterHeader />
      <ViewList />
    </BidsProvider>
  )
}

const WrappedContent = withTitleAndBreadcrumb(Bids)

export const Component = () => <WrappedContent title={'All bids'} />
