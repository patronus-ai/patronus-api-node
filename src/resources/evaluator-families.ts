// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class EvaluatorFamilies extends APIResource {
  /**
   * List Evaluator Families
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ListEvaluatorFamilyResponse> {
    return this._client.get('/v1/evaluator-families', options);
  }
}

export interface ListEvaluatorFamilyResponse {
  evaluator_families: Array<unknown>;
}

export declare namespace EvaluatorFamilies {
  export { type ListEvaluatorFamilyResponse as ListEvaluatorFamilyResponse };
}
