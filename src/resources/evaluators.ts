// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Evaluators extends APIResource {
  /**
   * List of available evaluators for Evaluation Runs and LLM Monitoring.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ListEvaluatorsResponse> {
    return this._client.get('/v1/evaluators', options);
  }
}

export interface ListEvaluatorsResponse {
  evaluators: Array<unknown>;
}

export declare namespace Evaluators {
  export { type ListEvaluatorsResponse as ListEvaluatorsResponse };
}
