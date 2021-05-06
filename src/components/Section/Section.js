import React from 'react';
import FeedbackOptions from '../feedbackOptions/feedbackOptions';
import PropTypes from 'prop-types';

export default function Section(props) {
  return (
    <>
      <FeedbackOptions
        onLeaveFeedback={props.onLeaveFeedback} 
        titleOne = {props.titleOne} 
        titleTwo = {props.titleTwo} 
        titleThree = {props.titleThree}
        options={props.options}
      />
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};
