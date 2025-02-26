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
  data: Array<unknown>;
}

export declare namespace Data {
  export { type ListDatasetDataResponse as ListDatasetDataResponse };
}
