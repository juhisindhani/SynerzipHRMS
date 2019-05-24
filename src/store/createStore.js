import {createStore, applyMiddleware, compose} from 'redux';
import employees from '../reducer/employees';
import { combineReducers } from 'redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import jobTitle from "../reducer/jobTitle";
import skills from "../reducer/skills";
import projects from "../reducer/projects";
import businessUnit from "../reducer/businessUnit";
import appReducer from "../reducer/appReducer";

const middleware = [thunk,logger];
const enhancer = compose(applyMiddleware(...middleware));
const rootReducer = combineReducers({
    employees,
    businessUnit,
    projects,
    skills,
    jobTitle,
    appReducer
});
const store = createStore(rootReducer, enhancer);

export default store;


