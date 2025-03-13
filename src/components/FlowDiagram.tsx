import * as React from 'react';
import FlowChart from './FlowChart';
import CustomChart from './CustomChart';

export default function FlowDiagram() {
  return (
    <div className='flow-diagram-wrapper'>
      <div className='title'>User Interaction</div>
      <div className='interactions'>10,483</div>
      <div className='sub-text'>TOTAL INTERACTIONS</div>
      <div className=''>
        {/* <FlowChart></FlowChart> */}
        <CustomChart></CustomChart>
      </div>
    </div>
  );
}
