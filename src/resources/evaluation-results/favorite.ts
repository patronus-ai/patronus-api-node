// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Favorite extends APIResource {
  /**
   * Mark Favorite Evaluation Result
   */
  mark(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/evaluation-results/${id}/favorite`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Unmark Favorite Evaluation Result
   */
  unmark(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/evaluation-results/${id}/favorite`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
