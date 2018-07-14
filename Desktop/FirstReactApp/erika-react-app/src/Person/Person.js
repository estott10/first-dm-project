import React from 'react';

const person = (props) => {
  return (
  <div>
  <p>First Name: {props.name}</p>
  <p>{props.className}</p>
  </div>
  )}

export default person;