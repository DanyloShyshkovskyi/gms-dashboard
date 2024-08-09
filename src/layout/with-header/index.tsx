import { ComponentType, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import useBreadcrumbs, { BreadcrumbMatch } from 'use-react-router-breadcrumbs'

import { routes } from 'router'

import { Mapper } from 'shared/controller'
import { Badge, BadgeProps } from 'shared/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'shared/ui/breadcrumb'

interface CustomBreadcrumbItemProps {
  match: BreadcrumbMatch
  breadcrumb: ReactNode
  index: number
  array_length: number
}

const CustomBreadcrumbItem: React.FC<CustomBreadcrumbItemProps> = ({
  match,
  breadcrumb,
  index,
  array_length,
}) => {
  return (
    <BreadcrumbItem>
      {index === array_length - 1 ? (
        <BreadcrumbPage className='font-semibold text-blue-600'>
          {breadcrumb}
        </BreadcrumbPage>
      ) : (
        <BreadcrumbLink asChild>
          <NavLink to={match.url} className='font-semibold text-blue-600'>
            {breadcrumb}
          </NavLink>
        </BreadcrumbLink>
      )}
    </BreadcrumbItem>
  )
}

const Separator: React.FC = () => <BreadcrumbSeparator>/</BreadcrumbSeparator>

interface WithTitleAndBreadcrumbProps {
  title?: string
  badge?: {
    label: ReactNode
    props?: BadgeProps
  }
  children?: ReactNode
}

const withTitleAndBreadcrumb = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const ComponentWithTitleAndBreadcrumb: React.FC<
    WithTitleAndBreadcrumbProps & P
  > = ({ title = '', badge = null, children = null, ...props }) => {
    const breadcrumbs = useBreadcrumbs(routes)
    const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1]

    return (
      <>
        <header className='mb-5'>
          <Breadcrumb className='mb-2 w-full'>
            <BreadcrumbList className='gap-1 sm:gap-1.5'>
              <Mapper
                array={breadcrumbs}
                children={CustomBreadcrumbItem}
                Separator={Separator}
              />
            </BreadcrumbList>
          </Breadcrumb>
          <div className='flex items-center gap-3'>
            <h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl'>
              {title || lastBreadcrumb?.breadcrumb}
            </h1>
            {badge && <Badge {...badge.props}>{badge.label}</Badge>}
            {children}
          </div>
        </header>

        <WrappedComponent {...props} />
      </>
    )
  }

  return ComponentWithTitleAndBreadcrumb
}

export default withTitleAndBreadcrumb
