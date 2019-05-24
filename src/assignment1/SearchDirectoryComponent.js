import React from 'react';
import Alarm from '@material-ui/icons/AlarmOn'
import businessUnit from "../reducer/businessUnit";
import {onResetBtnClick, onSearchBtnClick} from "../actionCreators/directoryActionCreator";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/es/styles/withStyles";
import connect from "react-redux/es/connect/connect";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
    },
});

class SearchDirectoryComponent extends React.Component {

    render(){
        const {empList, projectList, jobTitleList, skillsList, businessUnitList, classes} = this.props;
        return    <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>

                            </CardContent>
                        </CardActionArea>
                        <CardActions>

                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    }

}
const mapStateToProps = state => {
    return {
        empList: state.employees.empList,
        projectList: state.projects.projectList,
        jobTitleList: state.jobTitle.jobTitleList,
        skillsList: state.skills.skillsList,
        businessUnitList: state.businessUnit.businessUnitList

    }
};

const connectSearchDir = connect(
    mapStateToProps,
    {onSearchBtnClick, onResetBtnClick}
)(SearchDirectoryComponent);

//HOC - get resultValue from app state
//HOC - get getEmployees action creator

export default withStyles(styles)(connectSearchDir);