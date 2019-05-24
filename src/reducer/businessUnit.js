import {ON_BU_DATARECIEVED} from "../actions/hrmsActions";

const initialState = {
    businessUnitList: []

};

function businessUnit (state = initialState, action){

    switch (action.type) {

        case ON_BU_DATARECIEVED:
            return Object.assign({}, state, {
                businessUnitList: action.businessUnitList,
            });


        default:
            return state;
    }
}

export default businessUnit;