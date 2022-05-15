import * as constants from '../constants/userConstants'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
      case constants.USER_LOGIN_REQUEST:
          return { loading: true }

      case constants.USER_LOGIN_SUCCESS:
          return { loading: false, userInfo: action.payload }

      case constants.USER_LOGIN_FAIL:
          return { loading: false, error: action.payload }

      case constants.USER_LOGOUT:
          return {}

      default:
          return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_REGISTER_REQUEST:
            return { loading: true }

        case constants.USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case constants.USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }

        case constants.USER_LOGOUT:
            return {}

        default:
            return state
    }
}


export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case constants.USER_DETAILS_REQUEST:
            return { ...state, loading: true }

        case constants.USER_DETAILS_SUCCESS:
            return { loading: false, user: action.payload }

        case constants.USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case constants.USER_DETAILS_RESET:
            return { user: {} }


        default:
            return state
    }
}