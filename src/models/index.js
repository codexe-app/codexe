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

const { Document, Topic, User } = initSchema(schema);

export {
  Document,
  Topic,
  User,
  Status
};