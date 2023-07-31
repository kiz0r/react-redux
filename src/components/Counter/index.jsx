import { connect } from 'react-redux';
import { decrement, increment, setStep } from '../../store/slices/counterSlice';

const Counter = props => {
  const { count, step, decrementCount, incrementCount, changeStep } = props;

  const handleChangeStep = ({ target: { value } }) => {
    changeStep(Number(value));
  };

  return (
    <>
      <div>
        <div>{count}</div>
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
        <input type='number' value={step} onChange={handleChangeStep} />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    decrementCount: () => dispatch(decrement()),
    incrementCount: () => dispatch(increment()),
    changeStep: v => dispatch(setStep(v)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
