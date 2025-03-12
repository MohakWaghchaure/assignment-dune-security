import React, { useState } from 'react';
import { ReactFlow } from '@xyflow/react';

import '@xyflow/react/dist/style.css';

const initialEdges = [
  { id: 'edge-1', source: 'node-1', sourceHandle: 'a', target: 'node-2' },
  { id: 'edge-2', source: 'node-1', sourceHandle: 'b', target: 'node-3' },
];

const initialNodes = [
  {
    id: 'node-1',
    data: { label: '', count: 0, },
    position: { x: 0, y: 50 },
    type: 'startingNode',
  },
  {
    id: 'node-2',
    data: { label: 'CLICKED LINKS', count: 100, },
    position: { x: 150, y: 0 },
    type: 'custom',
  },
  {
    id: 'node-3',
    data: { label: 'SCANNED QR CODES', count: 100, },
    position: { x: 150, y: 50 },
    type: 'custom',
  },
  {
    id: 'node-4',
    data: { label: 'HYBRID TESTS', count: 100 },
    position: { x: 150, y: 100 },
    type: 'custom',
  },
  {
    id: 'node-5',
    data: { label: 'SMS LINK CLICKED', count: 100, },
    position: { x: 150, y: 150 },
    type: 'custom',
  },
  {
    id: 'node-6',
    data: { label: 'DOWNLOADED ATTACHMENTS', count: 100, },
    position: { x: 150, y: 200 },
    type: 'custom',
  },
  {
    id: 'node-7',
    data: { label: 'RESPONDED TO PHISHING', count: 100, },
    position: { x: 150, y: 250 },
    type: 'custom',
  },
  {
    id: 'node-8',
    data: { label: 'IGNORED PHISHING', count: 100, },
    position: { x: 150, y: 300 },
    type: 'custom',
  },
  {
    id: 'node-9',
    data: { label: 'REPORTED TO WATCHTOWER', count: 100, },
    position: { x: 150, y: 350 },
    type: 'custom',
  },
  {
    id: 'node-10',
    data: { label: 'ENTERED CREDENTIALS', count: 100, },
    position: { x: 600, y: 75 },
    type: 'custom',
  },
  {
    id: 'node-11',
    data: { label: 'SUBMITED CREDENTIALS', count: 100, },
    position: { x: 1000, y: 75 },
    type: 'custom',
  },
  {
    id: 'node-12',
    data: { label: 'ENTERED MFA', count: 100, },
    position: { x: 1400, y: 75 },
    type: 'custom',
  },
];


const CustomNode = ({ data }: { data: { label: string, count: number } }) => {
  return (
    <div className='custom-node-wrapper'>
      <div className='node-start'></div>
      <div className="custom-node">
        <div className="count">{data.count}</div>
        <div className="label">{data.label}</div>
      </div>
    </div>

  );
};

const StartingNode = () => {
  return (
    <div className='starting-node-wrapper'>
      <div className='starting-node'></div>
    </div>

  );
};

const nodeTypes = { custom: CustomNode, startingNode: StartingNode, };

export default function CustomChart() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  return (
    <div className="custom-chart-wrapper" style={{ width: '100%', height: '500px' }}>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes}>
      </ReactFlow>
    </div>
  );
}