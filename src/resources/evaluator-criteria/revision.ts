// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Revision extends APIResource {
  /**
   * Add Evaluator Criteria Revision
   */
  create(
    publicId: string,
    body: RevisionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddEvaluatorCriteriaRevision> {
    return this._client.post(`/v1/evaluator-criteria/${publicId}/revision`, { body, ...options });
  }
}

export interface AddEvaluatorCriteriaRevision {
  evaluator_criteria: unknown;
}

export interface RevisionCreateParams {
  config: unknown;

  description?: string | null;
}

export declare namespace Revision {
  export {
    type AddEvaluatorCriteriaRevision as AddEvaluatorCriteriaRevision,
    type RevisionCreateParams as RevisionCreateParams,
  };
}
