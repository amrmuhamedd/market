import * as actionType from './actionTypes'
export const openModal = (message) => {
    return {
        type  : actionType.OPEN_MODAL,
        message : message
    }
}
export const closeModal = () => {
    return {
        type  : actionType.CLOSE_MODAL,
    }
}
