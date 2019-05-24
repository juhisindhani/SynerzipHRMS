import {ON_SKILLS_DATARECIEVED} from "../actions/hrmsActions";

const initialState = {
    skillsList: []

};

function skills (state = initialState, action){

    switch (action.type) {

        case ON_SKILLS_DATARECIEVED:
            return Object.assign({}, state, {
                skillsList: action.skillsList
            });

        default:
            return state;
    }
}

export default skills;