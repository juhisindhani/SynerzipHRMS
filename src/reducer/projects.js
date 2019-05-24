import {ON_PROJECT_DATARECIEVED} from "../actions/hrmsActions";

const initialState = {
    projectList: []

};

function projects (state = initialState, action){

    switch (action.type) {

        case ON_PROJECT_DATARECIEVED:
            return Object.assign({}, state, {
                projectList: action.projectList
            });

        default:
            return state;
    }
}

export default projects;