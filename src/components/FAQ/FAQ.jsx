import React from 'react';
import './FAQ.css';
import {VerticalTabs} from './TabPanel';

export const FAQ = () => {
  return (
    <div className="FAQ">
      <h1 className="FAQ__header">
        Frequently asked
        <br/>
        questions
      </h1>
      <VerticalTabs />
    </div>
  )
};