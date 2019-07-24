import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Cat: {
    selectId: cat => cat.objectId
  }
};

const pluralNames = { Cat: 'cat' };

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/api'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
