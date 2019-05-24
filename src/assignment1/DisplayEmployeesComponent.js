import React from 'react';

class EntryComponent extends React.Component {
    constructor(props){
        super(props);
        this.enteredValue = null;
    }

    onValueChanged = (event) => {
        this.enteredValue  = event.target.value;

    }

    render(){
        const {disabled,onSubmitEntry} = this.props;
        return <div>
            <input type="text" placeholder="Enter Value" disabled={disabled} onChange={this.onValueChanged}/>



            <button onClick={
                ()=>{
                    onSubmitEntry(this.enteredValue);
                }
            }> Submit</button>



        </div>
    }

}

export default EntryComponent;