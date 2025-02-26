// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class EvaluatorCriteria extends APIResource {
  /**
   * Create Evaluator Criteria
   */
  create(
    body: EvaluatorCriterionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluatorCriterionCreateResponse> {
    return this._client.post('/v1/evaluator-criteria', { body, ...options });
  }

  /**
   * List Evaluator Criteria
   */
  list(
    query?: EvaluatorCriterionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluatorCriterionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EvaluatorCriterionListResponse>;
  list(
    query: EvaluatorCriterionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluatorCriterionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/evaluator-criteria', { query, ...options });
  }

  /**
   * Add Evaluator Criteria Revision
   */
  addRevision(
    publicId: string,
    body: EvaluatorCriterionAddRevisionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluatorCriterionAddRevisionResponse> {
    return this._client.post(`/v1/evaluator-criteria/${publicId}/revision`, { body, ...options });
  }

  /**
   * Archive Evaluator Criteria
   */
  archive(
    publicId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluatorCriterionArchiveResponse> {
    return this._client.patch(`/v1/evaluator-criteria/${publicId}/archive`, options);
  }
}

export interface EvaluatorCriteria {
  config: Record<string, unknown> | null;

  created_at: string;

  evaluator_family: string | null;

  is_patronus_managed: boolean;

  name: string | null;

  public_id: string;

  revision: number;

  description?: string | null;
}

export interface EvaluatorCriterionCreateResponse {
  evaluator_criteria: EvaluatorCriteria | null;
}

export interface EvaluatorCriterionListResponse {
  evaluator_criteria: Array<EvaluatorCriteria>;
}

export interface EvaluatorCriterionAddRevisionResponse {
  evaluator_criteria: EvaluatorCriteria | null;
}

export interface EvaluatorCriterionArchiveResponse {
  evaluator_criteria: Array<EvaluatorCriteria>;
}

export interface EvaluatorCriterionCreateParams {
  config: Record<string, unknown>;

  evaluator_family: string;

  name: string;

  description?: string | null;
}

export interface EvaluatorCriterionListParams {
  enabled?: boolean | null;

  evaluator_family?: string | null;

  get_last_revision?: boolean;

  is_patronus_managed?: boolean | null;

  limit?: number;

  name?: string | null;

  offset?: number;

  public_id?: string | null;

  revision?: number | null;
}

export interface EvaluatorCriterionAddRevisionParams {
  config: Record<string, unknown>;

  description?: string | null;
}

export declare namespace EvaluatorCriteria {
  export {
    type EvaluatorCriteria as EvaluatorCriteria,
    type EvaluatorCriterionCreateResponse as EvaluatorCriterionCreateResponse,
    type EvaluatorCriterionListResponse as EvaluatorCriterionListResponse,
    type EvaluatorCriterionAddRevisionResponse as EvaluatorCriterionAddRevisionResponse,
    type EvaluatorCriterionArchiveResponse as EvaluatorCriterionArchiveResponse,
    type EvaluatorCriterionCreateParams as EvaluatorCriterionCreateParams,
    type EvaluatorCriterionListParams as EvaluatorCriterionListParams,
    type EvaluatorCriterionAddRevisionParams as EvaluatorCriterionAddRevisionParams,
  };
}
