import * as React from 'react';
import CustomChart from './CustomChart';

export default function FlowDiagram() {
  return (
    <div className='flow-diagram-wrapper'>
      <div className='title'>User Interaction</div>
      <div className='interactions'>10,483</div>
      <div className='sub-text'>TOTAL INTERACTIONS</div>
      <CustomChart></CustomChart>
    </div>
  );
}
