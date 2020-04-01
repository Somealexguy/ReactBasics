import React from "react";
import PropTypes from "prop-types";
import FormattedDate from "../atoms/fotmatted-date";

class ClassLifeCycleClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      console.log(this.state.date.toLocaleTimeString(),"before state change");

      // correct modify state, state is async, so to ensure that something is done after state change use a callback function
      this.setState({
        date: new Date()
      },()=>this.runAfterStateChange());
          // wrong way to modify state!!!
          //this.state.date=new Date()
    }
    runAfterStateChange(){
      console.log(this.state.date.toLocaleTimeString(),"after");
    }
  
    render() {
      return (
        <div>
          <h1>{this.props.name ? this.props.name : 'clock'}</h1>
          <FormattedDate date={this.state.date}></FormattedDate>
        </div>
      );
    }
  }
  ClassLifeCycleClock.propTypes = {
    name: PropTypes.string
  };

  export default ClassLifeCycleClock;