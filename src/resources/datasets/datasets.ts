// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CsvAPI from './csv';
import { Csv, CsvRetrieveResponse } from './csv';
import * as DataAPI from './data';
import { Data, ListDatasetDataResponse } from './data';
import * as JSONLAPI from './jsonl';
import { JSONL, JSONLRetrieveResponse } from './jsonl';

export class Datasets extends APIResource {
  data: DataAPI.Data = new DataAPI.Data(this._client);
  jsonl: JSONLAPI.JSONL = new JSONLAPI.JSONL(this._client);
  csv: CsvAPI.Csv = new CsvAPI.Csv(this._client);

  /**
   * This endpoint allows you to create a dataset with a given name from a provided
   * file.
   *
   * The dataset can contain the following attributes:
   *
   * - `evaluated_model_system_prompt` - text
   * - `evaluated_model_retrieved_context` - text array
   * - `evaluated_model_input` - text
   * - `evaluated_model_output` - text
   * - `evaluated_model_gold_answer` - text
   * - `meta_evaluated_model_name` - text
   * - `meta_evaluated_model_provider` -text
   * - `meta_evaluated_model_selected_model` - text
   * - `meta_evaluated_model_params` - map (string -> text | number)
   *
   * All attributes are optional, but in principle, at least `evaluated_model_input`
   * or `evaluated_model_output` should be provided.
   *
   * Whether other fields are required depends on the evaluations you plan to
   * perform. Some evaluators require retrieved context, so
   * `evaluated_model_retrieved_context` must be provided for them. For exact field
   * requirements, see the evaluators' documentation.
   *
   * #### File Format
   *
   * The uploaded file should be in _CSV_ or _JSONL_ format.
   *
   * - **CSV** file should contain a header row with the attributes defined above.
   *   Fields `evaluated_model_retrieved_context` and `meta_evaluated_model_params`
   *   must be JSON encoded. The CSV should use commas as separators.
   *
   * - **JSONL** file should have JSON-encoded objects with keys set to the
   *   attributes defined above. JSON objects should be separated by a new line.
   *
   * ### Limits
   *
   * The file size cannot be larger than 20 MiB. The file cannot contain more than 30
   * 000 samples.
   *
   * ### Custom Field Mapping
   *
   * The `custom_field_mapping` field is optional. It should be a JSON-encoded string
   * where the key is the standardized field name (as defined above) and the value is
   * the custom field name present in the provided dataset file. This mapping allows
   * for flexible field naming in your dataset. The mapping value can be also a list,
   * in that way the fields will be concatenated depending on a field type.
   *
   * ### Example request
   *
   * ```
   * curl -X POST https://api.patronus.ai/v1/datasets \
   *      -H "x-api-key: <your_api_key>" \
   *      -F "file=@<path_to_your_file>" \
   *      -F "dataset_name=<name for created dataset>" \
   *      -F 'custom_field_mapping={"evaluated_model_output": ["my-custom-field-name", "another-field"]}'
   * ```
   */
  create(body: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateDatasetResponse> {
    return this._client.post('/v1/datasets', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Get Dataset
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<GetDatasetsResponse> {
    return this._client.get(`/v1/datasets/${id}`, options);
  }

  /**
   * Update Dataset
   */
  update(
    datasetId: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateDatasetResponse> {
    return this._client.patch(`/v1/datasets/${datasetId}`, { body, ...options });
  }

  /**
   * List Datasets
   */
  list(query?: DatasetListParams, options?: Core.RequestOptions): Core.APIPromise<ListDatasetsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListDatasetsResponse>;
  list(
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListDatasetsResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/datasets', { query, ...options });
  }

  /**
   * Delete Dataset
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/datasets/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CreateDatasetResponse {
  dataset: unknown;

  /**
   * @deprecated
   */
  dataset_id: string;
}

export interface GetDatasetsResponse {
  dataset: unknown;
}

export interface ListDatasetsResponse {
  datasets: Array<unknown>;
}

export interface UpdateDatasetResponse {
  /**
   * @deprecated
   */
  id: string;

  dataset: unknown;

  /**
   * @deprecated
   */
  name: string;
}

export interface DatasetCreateParams {
  dataset_name: string;

  file: Core.Uploadable;

  custom_field_mapping?: string | null;

  dataset_description?: string | null;
}

export interface DatasetUpdateParams {
  description?: string | null;

  /**
   * The name of the dataset.
   */
  name?: string | null;
}

export interface DatasetListParams {
  type?: 'Patronus Managed' | 'User Managed' | null;
}

Datasets.Data = Data;
Datasets.JSONL = JSONL;
Datasets.Csv = Csv;

export declare namespace Datasets {
  export {
    type CreateDatasetResponse as CreateDatasetResponse,
    type GetDatasetsResponse as GetDatasetsResponse,
    type ListDatasetsResponse as ListDatasetsResponse,
    type UpdateDatasetResponse as UpdateDatasetResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
  };

  export { Data as Data, type ListDatasetDataResponse as ListDatasetDataResponse };

  export { JSONL as JSONL, type JSONLRetrieveResponse as JSONLRetrieveResponse };

  export { Csv as Csv, type CsvRetrieveResponse as CsvRetrieveResponse };
}
