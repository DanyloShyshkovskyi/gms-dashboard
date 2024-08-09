import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Fragment, ReactNode } from 'react'

interface WithClassNameProps {
  className?: string
  children: ReactNode
  autoAnimate?: boolean
}

const WithClassName: React.FC<WithClassNameProps> = ({
  className,
  children,
  autoAnimate,
}) => {
  const [parent] = useAutoAnimate()

  if (!className && !autoAnimate) return <>{children}</>

  return (
    <div ref={autoAnimate ? parent : null} className={className}>
      {children}
    </div>
  )
}

// Import your WithClassName component

interface MapperProps<T> {
  array: T[] | { items: T[] } | undefined
  children: (item: T, index: number) => ReactNode
  Separator?: React.FC | null
  communicate?: ReactNode
  className?: string
  autoAnimate?: boolean
}

const arrayTransform = <T,>(
  array: T[] | { items: T[] } | undefined
): T[] | undefined => {
  if (!array) return undefined

  if ('items' in array) return array.items

  return array
}

export const Mapper = <T,>({
  array,
  children: ChildComponent,
  Separator = null,
  communicate = null,
  className = undefined,
  autoAnimate = false,
}: MapperProps<T>) => {
  const tArray = arrayTransform(array)

  if (!tArray || !tArray.length) return <>{communicate}</>

  return (
    <WithClassName className={className} autoAnimate={autoAnimate}>
      {tArray.map((item, index) => (
        <Fragment key={(item as any).id || index}>
          <ChildComponent
            {...item}
            key_field={(item as any).key}
            index={index}
            array_length={tArray.length}
          />
          {Separator && index < tArray.length - 1 && <Separator />}
        </Fragment>
      ))}
    </WithClassName>
  )
}
