import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Status {
  LIVE = "live",
  DRAFT = "draft",
  PRIVATE = "private",
  ARCHIVE = "archive",
  TRASH = "trash"
}



type EagerDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly topic?: Topic | null;
  readonly topicId?: string | null;
  readonly user?: User | null;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDocument = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Document, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly status?: Status | keyof typeof Status | null;
  readonly topic: AsyncItem<Topic | undefined>;
  readonly topicId?: string | null;
  readonly user: AsyncItem<User | undefined>;
  readonly userId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Document = LazyLoading extends LazyLoadingDisabled ? EagerDocument : LazyDocument

export declare const Document: (new (init: ModelInit<Document>) => Document) & {
  copyOf(source: Document, mutator: (draft: MutableModel<Document>) => MutableModel<Document> | void): Document;
}

type EagerTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly documents?: (Document | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly slug?: string | null;
  readonly description?: string | null;
  readonly content?: string | null;
  readonly documents: AsyncCollection<Document>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly avatar?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly role?: string | null;
  readonly email?: string | null;
  readonly documents?: (Document | null)[] | null;
  readonly cognitoid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly avatar?: string | null;
  readonly firstname?: string | null;
  readonly lastname?: string | null;
  readonly role?: string | null;
  readonly email?: string | null;
  readonly documents: AsyncCollection<Document>;
  readonly cognitoid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}