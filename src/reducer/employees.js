import {ON_EMP_DATARECIEVED} from "../actions/hrmsActions";

const initialState = {
    empList: []

};

function employees(state = initialState, action){

    switch (action.type) {

        case ON_EMP_DATARECIEVED:
            return Object.assign({}, state, {
                empList: action.empList
            });

        default:
            return state;
    }
}

export default employees;