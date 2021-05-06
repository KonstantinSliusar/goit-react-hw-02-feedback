import React from 'react';
import propTypes from 'prop-types';

export default function FeedbackOptions(props) {
  return (
    <>
      <h1>{props.titleOne}</h1>
      <h2>{props.titleTwo}</h2>
      <h2>{props.titleThree}</h2>
    
      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('good');
        }}
      >
        {'Good'}
      </button>

      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('bad');
        }}
      >
        {'Bad'}
      </button>

      <button
        type="button"
        onClick={evt => {
          props.onLeaveFeedback('neutral');
        }}
      >
        {'neutral'}
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func,
  
};
