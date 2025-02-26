// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class JSONL extends APIResource {
  /**
   * Download Dataset Jsonl
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/datasets/${id}/jsonl`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
