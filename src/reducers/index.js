const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_OPTIONS':
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload.lang]: action.payload.options
        }
      }
    case 'UPDATE_INPUT':
      if (action.payload.lang) {
        return {
          ...state,
          input: {
            ...state.input,
            [action.payload.lang]: action.payload.value
          }
        }
      } else {
        return {
          ...state,
          input: action.payload.value
        }
      }

    case 'UPDATE_LANG':
      return {
        ...state,
        lang: action.payload
      }
    case 'UPDATE_THEME':
      return {
        ...state,
        theme: action.payload
      }
    case 'START_PARSING':
      return {
        ...state,
        output: {
          ...state.output,
          isLoading: true
        }
      }
    case 'UPDATE_OUTPUT':
      return {
        ...state,
        output: {
          ...action.payload,
          isLoading: false
        }
      }
    case 'UPDATE_OUTPUT_TYPE':
      return {
        ...state,
        outputType: action.payload
      }
    case 'LOAD_FILE':
      return {
        ...state,
        file: action.payload
      }
    case 'CLOSE_FILE':
      return {
        ...state,
        file: null
      }
    default:
      return state
  }
}

export default reducer
