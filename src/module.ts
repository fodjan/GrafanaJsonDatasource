import { DataSourcePlugin } from '@grafana/data';
import { ConfigEditor } from './Component/ConfigEditor';
import { QueryEditorContainer } from './Component/QueryEditorContainer';
import { DataSource } from './DataSource';
import { GenericOptions, GrafanaQuery } from './types';
import { VariableQueryEditor } from './Component/VariableQueryEditor';

export const plugin = new DataSourcePlugin<DataSource, GrafanaQuery, GenericOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditorContainer)
  .setVariableQueryEditor(VariableQueryEditor);
