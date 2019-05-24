import {ON_MENUSELECT} from "../actions/hrmsActions";


export const onMenuSelection = (selectedMenu) => {

    return (dispatch, getState) => {
        dispatch({type: ON_MENUSELECT, selectedMenu: selectedMenu});
    }
};