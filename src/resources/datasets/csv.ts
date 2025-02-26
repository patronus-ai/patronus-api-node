// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Csv extends APIResource {
  /**
   * Download Dataset Csv
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/v1/datasets/${id}/csv`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
