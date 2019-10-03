import React, {Fragment} from "react";
import { connect } from "react-redux";
import {INC, DEC, ZERO, DOUBLE, DIVISION, PLUS100, MINUS200  } from "../../Actions/Action";

const Counter = ({ counter, DEC, INC, ZERO, DOUBLE, DIVISION, PLUS100, MINUS200 }) => {
  return (
    <Fragment>
      <div id="counter">{counter}</div>
      <button id="minus" onClick={DEC} className="btn btn-danger">
        Minus
      </button>
      <button id="plus" onClick={INC} className="btn btn-success">
        Plus
      </button>
      <button id="null" onClick={ZERO} className="btn btn-success">
        Zero
      </button>
      <button id="double" onClick={DOUBLE} className="btn btn-warning">
        Double
      </button>
      <button id="DIVISION" onClick={DIVISION} className="btn btn-info">
        DIVISION
      </button>
      <button id="+100" onClick={PLUS100} className="btn btn-success">
        PLUS100
      </button>
      <button id="-200" onClick={MINUS200} className="btn btn-warning">
        MINUS200
      </button>
    </Fragment>
  );
}; 
const mapStateToProps = ({Reducer}) => {  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state = > ", Reducer);
  return {
    counter: Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    INC: () => dispatch(INC()),
    DEC: () => dispatch(DEC()),
    ZERO: () => {
      const zeroCounter = 0;
      dispatch(ZERO(zeroCounter));
    },
    DOUBLE: () => {
      const multi = 2;
      dispatch(DOUBLE(multi));
    },
    DIVISION: () => {
      const division = 2;
      dispatch(DIVISION(division));
    },
    PLUS100: () => {
      const plus100 = 100;
      dispatch(PLUS100(plus100));
    },
    MINUS200: () => {
      const minus200 = 200;
      dispatch(MINUS200(minus200));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);