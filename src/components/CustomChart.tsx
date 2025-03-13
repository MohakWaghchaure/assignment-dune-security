import React, { useState } from 'react';
import { BaseEdge, EdgeProps, getBezierPath, Handle, Position, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialEdges = [
  { id: '1-2', source: 'node-1', target: 'node-2', sourceHandle: 'a', type: 'customEdge'},
  { id: '1-3', source: 'node-1', target: 'node-3', sourceHandle: 'b',type: 'customEdge'},
  { id: '1-4', source: 'node-1', target: 'node-4', sourceHandle: 'c',type: 'customEdge'},
  { id: '1-5', source: 'node-1', target: 'node-5', sourceHandle: 'd',type: 'customEdge'},
  { id: '1-6', source: 'node-1', target: 'node-6', sourceHandle: 'e',type: 'customEdge'},
  { id: '1-7', source: 'node-1', target: 'node-7', sourceHandle: 'f',type: 'customEdge'},
  { id: '1-8', source: 'node-1', target: 'node-8', sourceHandle: 'g',type: 'customEdge'},
  { id: '1-9', source: 'node-1', target: 'node-9', sourceHandle: 'h',type: 'customEdge'},
  { id: '2-10', source: 'node-2', target: 'node-10', type: 'customEdge'},
  { id: '3-10', source: 'node-3', target: 'node-10', type: 'customEdge'},
  { id: '4-10', source: 'node-4', target: 'node-10', type: 'customEdge'},
  { id: '5-10', source: 'node-5', target: 'node-10', type: 'customEdge'},
  { id: '10-11', source: 'node-10', target: 'node-11', type: 'customEdge'},
  { id: '11-12', source: 'node-11', target: 'node-12', type: 'customEdge'},
];

const initialNodes = [
  { id: 'node-1', data: { label: '', count: 0 }, position: { x: -100, y: 50 }, type: 'startingNode', sourcePosition: Position.Right },
  { id: 'node-2', data: { label: 'CLICKED LINKS', count: 100 }, position: { x: 150, y: 0 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-3', data: { label: 'SCANNED QR CODES', count: 100 }, position: { x: 150, y: 50 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-4', data: { label: 'HYBRID TESTS', count: 100 }, position: { x: 150, y: 100 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-5', data: { label: 'SMS LINK CLICKED', count: 100 }, position: { x: 150, y: 150 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-6', data: { label: 'DOWNLOADED ATTACHMENTS', count: 100 }, position: { x: 150, y: 200 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-7', data: { label: 'RESPONDED TO PHISHING', count: 100 }, position: { x: 150, y: 250 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-8', data: { label: 'IGNORED PHISHING', count: 100 }, position: { x: 150, y: 300 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-9', data: { label: 'REPORTED TO WATCHTOWER', count: 100 }, position: { x: 150, y: 350 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-10', data: { label: 'ENTERED CREDENTIALS', count: 100 }, position: { x: 600, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-11', data: { label: 'SUBMITED CREDENTIALS', count: 100 }, position: { x: 1000, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-12', data: { label: 'ENTERED MFA', count: 100 }, position: { x: 1400, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
];

const CustomNode = ({ data }: { data: { label: string, count: number } }) => {
  return (
    <div className='custom-node-wrapper'>
    <Handle type="target" position={Position.Left} id="i" style={{background: 'transparent', border: 'none'}}/>
      <div className='custom-node'>
        <div className='node-start'></div>
        <div className="custom-node">
          <div className="count">{data.count}</div>
          <div className="label">{data.label}</div>
        </div>
      </div>
    <Handle type="source" position={Position.Right} id="j" style={{background: 'transparent', border: 'none'}}/>
  </div>
  )
};

const StartingNode = () => {
  return (
    <div className='starting-node-wrapper'>
      <Handle type="source" position={Position.Right} id='a' style={{top: '11%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='b'style={{top: '22%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='c'style={{top: '33%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='d'style={{top: '44%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='e'style={{top: '55%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='f'style={{top: '66%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='g'style={{top: '77%', background: 'transparent', border: 'none'}} />
      <Handle type="source" position={Position.Right} id='h'style={{top: '88%', background: 'transparent', border: 'none'}} />
      <div className='starting-node'></div>
    </div>
  );
};

const CustomNEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath] = getBezierPath({
    sourceX: sourceX + 5,
    sourceY,
    targetX: targetX - 5,
    targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    curvature: 0.5,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: '#949494', strokeWidth: 10, strokeLinecap: 'square', strokeOpacity: 0.5 }}
    />
  );
};

const nodeTypes = { custom: CustomNode, startingNode: StartingNode };
const edgeTypes = { customEdge: CustomNEdge };

export default function CustomChart() {
  return (
    <div className="custom-chart-wrapper" style={{ width: '100%', height: '500px' }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
      />
    </div>
  );
}
