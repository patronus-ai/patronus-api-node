// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RevisionAPI from './revision';
import { AddEvaluatorCriteriaRevision, Revision, RevisionCreateParams } from './revision';

export class EvaluatorCriteria extends APIResource {
  revision: RevisionAPI.Revision = new RevisionAPI.Revision(this._client);

  /**
   * Create Evaluator Criteria
   */
  create(
    body: EvaluatorCriterionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateEvaluatorCriteriaResponse> {
    return this._client.post('/v1/evaluator-criteria', { body, ...options });
  }

  /**
   * List Evaluator Criteria
   */
  list(
    query?: EvaluatorCriterionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEvaluatorCriteriaResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListEvaluatorCriteriaResponse>;
  list(
    query: EvaluatorCriterionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEvaluatorCriteriaResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/evaluator-criteria', { query, ...options });
  }

  /**
   * Archive Evaluator Criteria
   */
  archive(
    publicId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArchiveEvaluatorCriteriaResponse> {
    return this._client.patch(`/v1/evaluator-criteria/${publicId}/archive`, options);
  }
}

export interface ArchiveEvaluatorCriteriaResponse {
  evaluator_criteria: Array<unknown>;
}

export interface CreateEvaluatorCriteriaResponse {
  evaluator_criteria: unknown;
}

export interface ListEvaluatorCriteriaResponse {
  evaluator_criteria: Array<unknown>;
}

export interface EvaluatorCriterionCreateParams {
  config: unknown;

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

EvaluatorCriteria.Revision = Revision;

export declare namespace EvaluatorCriteria {
  export {
    type ArchiveEvaluatorCriteriaResponse as ArchiveEvaluatorCriteriaResponse,
    type CreateEvaluatorCriteriaResponse as CreateEvaluatorCriteriaResponse,
    type ListEvaluatorCriteriaResponse as ListEvaluatorCriteriaResponse,
    type EvaluatorCriterionCreateParams as EvaluatorCriterionCreateParams,
    type EvaluatorCriterionListParams as EvaluatorCriterionListParams,
  };

  export {
    Revision as Revision,
    type AddEvaluatorCriteriaRevision as AddEvaluatorCriteriaRevision,
    type RevisionCreateParams as RevisionCreateParams,
  };
}
