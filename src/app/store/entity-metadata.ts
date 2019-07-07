import { NgModule } from '@angular/core';
import { EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Cat: {}
};

const pluralNames = { Cat: 'cat' };

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:1337/parse/classes'
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
