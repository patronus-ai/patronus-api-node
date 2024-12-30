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
  evaluator_criteria: AddEvaluatorCriteriaRevision.EvaluatorCriteria | null;
}

export namespace AddEvaluatorCriteriaRevision {
  export interface EvaluatorCriteria {
    config: unknown | null;

    created_at: string;

    evaluator_family: string | null;

    is_patronus_managed: boolean;

    name: string | null;

    public_id: string;

    revision: number;

    description?: string | null;
  }
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
