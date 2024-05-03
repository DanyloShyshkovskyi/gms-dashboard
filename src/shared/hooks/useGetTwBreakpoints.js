import resolveConfig from 'tailwindcss/resolveConfig'
// @ts-ignore
import tailwindConfig from '/tailwind.config'

export const useGetTwBreakpoints = (breakpoint) => {
  if (!breakpoint) {
    throw new Error('Breakpoint is required')
  }
  const { theme } = resolveConfig(tailwindConfig)
  const breakpointValue = theme.screens[breakpoint]
  if (!breakpointValue) {
    throw new Error(`Breakpoint ${breakpoint} not found in tailwind config`)
  }

  return breakpointValue.split('px')[0]
}
