import {
    ON_BU_DATARECIEVED, ON_DIRRESETCLICK, ON_DIRSEARCHCLICK,
    ON_EMP_DATARECIEVED, ON_JOB_DATARECIEVED,
    ON_PROJECT_DATARECIEVED,
    ON_SKILLS_DATARECIEVED
} from "../actions/hrmsActions";

export const OnDataRecieved = () => {
    let empList = [
        {
            'empID': 1,
            'empName': 'Komal Aher',
            'email': 'komal.aher@synerzip.com',
            'designation': 'Software Developer',
            'project': 'React and IDERA',
            'domain': 'Fullstack Developer',
            'qaulification': 'M.E',
            'bloodGroup': 'A+',
            'LinkedInURL': 'xyz'

        },
        {
            'empID': 2,
            'empName': 'Komal Aher',
            'email': 'komal.aher@synerzip.com',
            'designation': 'Software Developer',
            'project': 'React and IDERA',
            'domain': 'Fullstack Developer',
            'qaulification': 'M.E',
            'bloodGroup': 'A+',
            'LinkedInURL': 'xyz'
        },
        {
            'empID': 3,
            'empName': 'Komal Aher',
            'email': 'komal.aher@synerzip.com',
            'designation': 'Software Developer',
            'project': 'React and IDERA',
            'domain': 'Fullstack Developer',
            'qaulification': 'M.E',
            'bloodGroup': 'A+',
            'LinkedInURL': 'xyz'
        },
        {
            'empID': 4,
            'empName': 'Komal Aher',
            'email': 'komal.aher@synerzip.com',
            'designation': 'Software Developer',
            'project': 'React and IDERA',
            'domain': 'Fullstack Developer',
            'qaulification': 'M.E',
            'bloodGroup': 'A+',
            'LinkedInURL': 'xyz'
        },
        {
            'empID': 5,
            'empName': 'Komal Aher',
            'email': 'komal.aher@synerzip.com',
            'designation': 'Software Developer',
            'project': 'React and IDERA',
            'domain': 'Fullstack Developer',
            'qaulification': 'M.E',
            'bloodGroup': 'A+',
            'LinkedInURL': 'xyz'
        }
    ];
    let jobTitleList = ['Senior QA', 'Software Developer', 'Accountant', 'DevOps'];
    let projectList = ['IDERA', 'Centric', 'QSI', 'HumanAPI', 'MealsPlus', 'FuelQuest'];
    let skillsList = ['Project Management', 'RPA', 'DevOps', 'Automation', 'Manual Testing'];
    let businessUnitList = ['BU-1', 'BU-2', 'BU-3' , 'BU-4', 'BU-5'];
    return (dispatch, getState) => {
            dispatch({type: ON_EMP_DATARECIEVED, empList: empList});
            dispatch({type: ON_JOB_DATARECIEVED, jobTitleList: jobTitleList});
            dispatch({type: ON_PROJECT_DATARECIEVED, projectList: projectList});
            dispatch({type: ON_SKILLS_DATARECIEVED, skillsList: skillsList});
            dispatch({type: ON_BU_DATARECIEVED, businessUnitList: businessUnitList});
    }
};

export const onSearchBtnClick = (empObject) => {

    return (dispatch, getState) => {
        dispatch({type: ON_DIRSEARCHCLICK, empObject: empObject});
    };
};

export const onResetBtnClick = () => {

    return (dispatch, getState) => {
        dispatch({type: ON_DIRRESETCLICK});
    };
};