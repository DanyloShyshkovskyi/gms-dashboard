const WithClassName = ({ className, children }) => (className ? <div className={className}>{children}</div> : children)

const arrayTransform = (array) => {
  if (!array) return undefined

  if ('items' in array) return array.items

  return array
}

export const Mapper = ({ array, children, communicate = null, className = undefined }) => {
  const tArray = arrayTransform(array)

  if (!tArray || !tArray.length) return communicate

  return <WithClassName className={className}>{tArray.map(children)}</WithClassName>
}
