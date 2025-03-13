import React, { useState } from 'react';
import { BaseEdge, EdgeProps, getBezierPath, Handle, Position, ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialEdges = [
  { id: '1-2', source: 'node-1', target: 'node-2', sourceHandle: 'a', type: 'customEdge'},
  { id: '1-3', source: 'node-1', target: 'node-3', sourceHandle: 'b', type: 'customEdge'},
  { id: '1-4', source: 'node-1', target: 'node-4', sourceHandle: 'c', type: 'customEdge'},
  { id: '1-5', source: 'node-1', target: 'node-5', sourceHandle: 'd', type: 'customEdge'},
  { id: '1-6', source: 'node-1', target: 'node-6', sourceHandle: 'e', type: 'customEdge'},
  { id: '1-7', source: 'node-1', target: 'node-7', sourceHandle: 'f', type: 'customEdge'},
  { id: '1-8', source: 'node-1', target: 'node-8', sourceHandle: 'g', type: 'customEdge'},
  { id: '1-9', source: 'node-1', target: 'node-9', sourceHandle: 'h', type: 'customEdge'},
  { id: '2-10', source: 'node-2', target: 'node-10', type: 'customEdge'},
  { id: '3-10', source: 'node-3', target: 'node-10', type: 'customEdge'},
  { id: '4-10', source: 'node-4', target: 'node-10', type: 'customEdge'},
  { id: '5-10', source: 'node-5', target: 'node-10', type: 'customEdge'},
  { id: '10-11', source: 'node-10', target: 'node-11', type: 'CustomEdgeThick'},
  { id: '11-12', source: 'node-11', target: 'node-12', type: 'CustomEdgeThick'},
];

const initialNodes = [
  { id: 'node-1', data: { backgroundColor: '#FFFFFF', label: '', count: 0 }, position: { x: 0, y: 70 }, type: 'startingNode', sourcePosition: Position.Right },
  { id: 'node-2', data: { backgroundColor: '', label: 'CLICKED LINKS', count: 2735 }, position: { x: 200, y: 0 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-3', data: { backgroundColor: '', label: 'SCANNED QR CODES', count: 19 }, position: { x: 200, y: 50 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-4', data: { backgroundColor: '', label: 'HYBRID TESTS', count: 0 }, position: { x: 200, y: 100 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-5', data: { backgroundColor: '', label: 'SMS LINK CLICKED', count: 0 }, position: { x: 200, y: 150 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-6', data: { backgroundColor: '', label: 'DOWNLOADED ATTACHMENTS', count: 9 }, position: { x: 200, y: 230 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-7', data: { backgroundColor: '', label: 'RESPONDED TO PHISHING', count: 105 }, position: { x: 200, y: 280 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-8', data: { backgroundColor: '#FFFFFF', label: 'IGNORED PHISHING', count: 5577 }, position: { x: 200, y: 360 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-9', data: { backgroundColor: '#00FF81', label: 'REPORTED TO WATCHTOWER', count: 2021 }, position: { x: 200, y: 410 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-10', data: { backgroundColor: '#FEE442', label: 'ENTERED CREDENTIALS', count: 302 }, position: { x: 600, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-11', data: { backgroundColor: '#F59A31', label: 'SUBMITED CREDENTIALS', count: 44 }, position: { x: 950, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
  { id: 'node-12', data: { backgroundColor: '#EF3C1E', label: 'ENTERED MFA', count: 26 }, position: { x: 1300, y: 75 }, type: 'custom', sourcePosition: Position.Right, targetPosition: Position.Left },
];

const CustomNode = ({ data }: { data: { label: string, count: number, backgroundColor: string } }) => {
  return (
    <div className='custom-node-wrapper'>
    <Handle type="target" position={Position.Left} id="i" style={{background: 'transparent', border: 'none'}}/>
      <div className='custom-node'>
        <div className='node-start' style={{backgroundColor: data.backgroundColor}}></div>
        <div className="custom-node" style={{backgroundColor: data.backgroundColor}}>
          <div className="count">{data.count}</div>
          <div className="label">{data.label}</div>
        </div>
      </div>
    <Handle type="source" position={Position.Right} id="j" style={{background: 'transparent', border: 'none'}}/>
  </div>
  )
};

const StartingNode = ({ data }: { data: { backgroundColor: string } }) => {
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
      <div className='starting-node' style={{backgroundColor: data.backgroundColor}}></div>
    </div>
  );
};

const CustomEdge: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath] = getBezierPath({
    sourceX: sourceX + 8,
    sourceY,
    targetX: targetX - 8,
    targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    curvature: 0.5,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: '#949494', strokeWidth: 12, strokeLinecap: 'square', strokeOpacity: 0.4 }}
    />
  );
};

const CustomEdgeThick: React.FC<EdgeProps> = ({ id, sourceX, sourceY, targetX, targetY }) => {
  const [edgePath] = getBezierPath({
    sourceX: sourceX - 10,
    sourceY,
    targetX: targetX - 10,
    targetY,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    curvature: 0.5,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={{ stroke: '#949494', strokeWidth: 18, strokeLinecap: 'square', strokeOpacity: 0.4 }}
    />
  );
};

const nodeTypes = { custom: CustomNode, startingNode: StartingNode };
const edgeTypes = { customEdge: CustomEdge, CustomEdgeThick: CustomEdgeThick };

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
