import preloadedState from './helpers/preloadedState'

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (serializedState === null) {
      return preloadedState
    }
    const json = JSON.parse(serializedState)
    const { version } = json
    if (!version || version < preloadedState.version) {
      return preloadedState
    }
    return {
      ...json,
      output: { json: 'Loading...', xml: 'Loading...' },
      outputType: 'json'
    }
  } catch (e) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const { file, output, outputType, ...props } = state
    const serializedState = JSON.stringify(props)
    if (!file) window.localStorage.setItem('state', serializedState)
  } catch (e) {
    return undefined
  }
}
