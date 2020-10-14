import React, {Component, Fragment} from 'react';

class StateExapmleComponent extends Component{
    state ={
        count: 0,
    };
//state can update
//for updating current satate should be using setSate() built-in function

    increaseCounter =() =>{
        this.setState({count: this.state.count + 1});
    };
    decreaseCounter =() =>{
        this.setState({count: this.state.count - 1});
    };
    resetCounter =() =>{
        this.setState({count: 0});
    };
    render(){
        return(
            <Fragment>
                <div className="col-md-4 mx-auto">
                    <h1 className="text-center font-weight-bold text-uppercase">
                        {this.state.count}
                    </h1>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={this.increaseCounter}>
                            increase
                        </button>
                        <button className="btn btn-danger" onClick={this.decreaseCounter}>
                            decrease
                        </button>
                        <button className="btn btn-primary" onClick={this.resetCounter}>
                            reset
                        </button>
                    </div>
                </div>
            </Fragment>
        );
    }
};
export default StateExapmleComponent;