import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/uitility';
const initState = {
    modal : false,
    modalMessage : 'hello',
    loading : true
}
const openModal = (state , action) => {
    return {
    ...state,
        modal : true,
        modalMessage : action.message
    }
}
const closeModal = (state , action) => {
    return updateObject(state , {
        modal : false
    })
}
const endLoading = (state , action) => {
    return updateObject(state , {
        loading : false
    })
}
const uiReducer = (state = initState, action) =>  {
switch (action.type) {
    case actionTypes.OPEN_MODAL: return openModal(state , action);
    case actionTypes.CLOSE_MODAL: return closeModal(state , action);
    case actionTypes.END_LOADING: return endLoading(state , action)
    default:
        return state; 
}
}

export default uiReducer;