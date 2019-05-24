import {ON_EMP_DATARECIEVED, ON_MENUSELECT} from "../actions/hrmsActions";

const initialState = {
    selectedMenu: 'Dashboard'

};

function appReducer(state = initialState, action){

    switch (action.type) {

        case ON_MENUSELECT:
            return Object.assign({}, state, {
                selectedMenu: action.selectedMenu
            });

        default:
            return state;
    }
}

export default appReducer;