import axios from 'axios'

export const baseUrl = '/api/'

export const httpInstance = (showLoading = false, firstToken = '') => {
    const instance = axios.create()

    let token = ''
    // firstToken !== '' ? firstToken : store.getState().User.token

    instance.defaults.timeout = 20000

    if (token) {
        instance.defaults.headers.common['Authorization'] = `Basic ${token}`
    } else {
        instance.defaults.headers.common['Authorization'] = ''
    }

    // if (locale) {
    //     instance.defaults.headers.common['Accept-Language'] = locale
    // }

    instance.interceptors.request.use(
        (request) => {
            // if (showLoading) store.dispatch.Feedback.showLoader(true)
            return request
        },
        (error) => {
            // handleError(error)
            return Promise.reject(error)
        }
    )

    instance.interceptors.response.use(
        (response) => {
            // if (showLoading) store.dispatch.Feedback.showLoader(false)
            // store.dispatch.Feedback.connectionError(false)
            return response
        },
        (error) => {
            // handleError(error)

            return Promise.reject(error)
        }
    )

    return instance
}
