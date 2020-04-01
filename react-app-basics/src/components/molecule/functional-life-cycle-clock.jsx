import React,{ useState,useEffect } from 'react';
import PropTypes from "prop-types";
import FormattedDate from '../atoms/fotmatted-date';

function FunctionalLifeCycleClock(props) {
  const [date, setDate] = useState(new Date());
  var timerID;

  useEffect(() => {
    function tick(){
      console.log(date.toLocaleTimeString(),"before state change");
      // correct modify state
      setDate(new Date());
          // wrong way to modify state!!!
          //this.state.date=new Date()
    };
    // Update the document title using the browser API
    timerID = setInterval(
      () => tick(),
      1000
    );

    //the return function is ComponentWillUnmount, if not done it will continue to count
    return function cleanUp() {
      clearInterval(timerID);
    };
  });
  //run everytime date is changed
  useEffect(() => {
    console.log(date.toLocaleTimeString(),"after");
  },[date]);
  const { name } = props;

  return (
    <React.Fragment>
         <div>
          <h1>{name ? name : 'clock'}</h1>
          <FormattedDate date={date}></FormattedDate>
        </div>
    </React.Fragment>
  );
}
FunctionalLifeCycleClock.propTypes = {
  name: PropTypes.string
};
export default FunctionalLifeCycleClock;
