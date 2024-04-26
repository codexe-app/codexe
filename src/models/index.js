// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Status = {
  "LIVE": "live",
  "DRAFT": "draft",
  "PRIVATE": "private",
  "ARCHIVE": "archive",
  "TRASH": "trash"
};

const Position = {
  "LEFT": "left",
  "TOP": "top",
  "RIGHT": "right",
  "BOTTOM": "bottom"
};

const MarkerType = {
  "ARROW": "arrow",
  "ARROWCLOSED": "arrowclosed"
};

const { Document, Topic, Flow, Node, Edge, User, XYPosition, NodeData, EdgeData, EdgeMarker } = initSchema(schema);

export {
  Document,
  Topic,
  Flow,
  Node,
  Edge,
  User,
  Status,
  Position,
  MarkerType,
  XYPosition,
  NodeData,
  EdgeData,
  EdgeMarker
};