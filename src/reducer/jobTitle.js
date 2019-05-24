import {ON_JOB_DATARECIEVED} from "../actions/hrmsActions";

const initialState = {
    jobTitleList: []

};

function jobTitle (state = initialState, action){

    switch (action.type) {

        case ON_JOB_DATARECIEVED:
            return Object.assign({}, state, {
                jobTitleList: action.jobTitleList,
            });

        default:
            return state;
    }
}

export default jobTitle;