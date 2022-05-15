import axios from 'axios'
import * as constants from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users/login/',
      { 'username': email, 'password': password },
      config
    )

    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: constants.USER_LOGOUT })
  dispatch({ type: constants.USER_DETAILS_RESET })
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: constants.USER_REGISTER_REQUEST
    })

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users/register/',
      { 'name': name, 'email': email, 'password': password },
      config
    )


    dispatch({
      type: constants.USER_REGISTER_SUCCESS,
      payload: data
    })

    //login user after register
    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: constants.USER_REGISTER_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.USER_DETAILS_REQUEST
    })

    const {
      userLogin: { userInfo }, //get current user logged in
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}` // get current user jwt token
      }
    }

    const { data } = await axios.get(
      `/api/users/${id}/`,
      config
    )

    dispatch({
      type: constants.USER_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error) {
    dispatch({
      type: constants.USER_DETAILS_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: constants.USER_UPDATE_PROFILE_REQUEST
    })

    const {
      userLogin: { userInfo }, //get user logged in
    } = getState()

    const config = {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.put(
      `/api/users/profile/update/`,
      user,
      config
    )

    dispatch({
      type: constants.USER_UPDATE_PROFILE_SUCCESS,
      payload: data
    })

    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data
    })

    localStorage.setItem('userInfo', JSON.stringify(data))

  } catch (error) {
    dispatch({
      type: constants.USER_UPDATE_PROFILE_FAIL,
      payload: error.response && error.response.data.detail
        ? error.response.data.detail
        : error.message,
    })
  }
}


