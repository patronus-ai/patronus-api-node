// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Data extends APIResource {
  /**
   * List Dataset Data
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ListDatasetDataResponse> {
    return this._client.get(`/v1/datasets/${id}/data`, options);
  }
}

export interface ListDatasetDataResponse {
  data: Array<ListDatasetDataResponse.Data>;
}

export namespace ListDatasetDataResponse {
  export interface Data {
    dataset_id: string;

    evaluated_model_gold_answer: string | null;

    evaluated_model_input: string | null;

    evaluated_model_output: string | null;

    evaluated_model_retrieved_context: Array<string> | null;

    evaluated_model_system_prompt: string | null;

    /**
     * @deprecated: The field is deprecated. Please use evaluated_model_gold_answer
     * instead.
     */
    label: string | null;

    meta_evaluated_model_name: string | null;

    meta_evaluated_model_params: unknown | null;

    meta_evaluated_model_provider: string | null;

    meta_evaluated_model_selected_model: string | null;

    sid: number;

    /**
     * @deprecated: The field is deprecated. Please use evaluated_model_input instead.
     */
    text: string | null;
  }
}

export declare namespace Data {
  export { type ListDatasetDataResponse as ListDatasetDataResponse };
}
