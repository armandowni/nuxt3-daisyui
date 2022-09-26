import { EntitySchema, EntitySchemaColumnOptions } from "typeorm";

export const BaseSchema = {
  created: {
    type: 'timestamp with time zone',
    createDate: true
  } as EntitySchemaColumnOptions,
  updated: {
    type: 'timestamp with time zone',
    updateDate: true
  } as EntitySchemaColumnOptions,
  deleted: {
    type: 'timestamp with time zone',
    deleteDate: true
  } as EntitySchemaColumnOptions
}
