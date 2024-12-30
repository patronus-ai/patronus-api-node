// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Jsonl extends APIResource {
  /**
   * Download Dataset Jsonl
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get(`/v1/datasets/${id}/jsonl`, options);
  }
}

export type JsonlRetrieveResponse = unknown;

export declare namespace Jsonl {
  export { type JsonlRetrieveResponse as JsonlRetrieveResponse };
}
