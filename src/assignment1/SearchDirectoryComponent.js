import React from 'react';
import Alarm from '@material-ui/icons/AlarmOn'
class DisplayResult extends React.Component {

    render(){
        const {resultValue} = this.props;
        return <div>
            {resultValue}
        </div>
    }

}

//HOC - get resultValue from app state
//HOC - get getEmployees action creator

export default DisplayResult;