// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Evaluations extends APIResource {
  /**
   * Get Evaluation
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<EvaluationRetrieveResponse> {
    return this._client.get(`/v1/evaluations/${id}`, options);
  }

  /**
   * Delete Evaluation
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/evaluations/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Batch Create Evaluations endpoint allows to import client evaluation into
   * Patronus AI Platform.
   */
  batchCreate(
    body: EvaluationBatchCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationBatchCreateResponse> {
    return this._client.post('/v1/evaluations/batch', { body, ...options });
  }

  /**
   * Search Evaluations
   */
  search(
    body: EvaluationSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationSearchResponse> {
    return this._client.post('/v1/evaluations/search', { body, ...options });
  }
}

export interface EvaluationRetrieveResponse {
  evaluation: EvaluationRetrieveResponse.Evaluation;
}

export namespace EvaluationRetrieveResponse {
  export interface Evaluation {
    id: string;

    log_id: string;

    annotation_criteria_id?: string | null;

    app?: string | null;

    created_at?: string;

    criteria?: string | null;

    criteria_config?: Record<string, unknown> | null;

    criteria_id?: string | null;

    criteria_revision?: number | null;

    dataset_id?: string | null;

    dataset_sample_id?: string | null;

    evaluation_duration?: string | null;

    evaluation_type?: 'patronus_evaluation' | 'client_evaluation' | 'annotation' | null;

    evaluator_family?: string | null;

    evaluator_id?: string | null;

    experiment_id?: number | null;

    explain_strategy?: string | null;

    explanation?: string | null;

    explanation_duration?: string | null;

    metadata?: Record<string, unknown> | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: Record<string, string> | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: Record<string, unknown> | null;
  }
}

export interface EvaluationBatchCreateResponse {
  evaluations: Array<EvaluationBatchCreateResponse.Evaluation>;
}

export namespace EvaluationBatchCreateResponse {
  export interface Evaluation {
    id: string;

    log_id: string;

    annotation_criteria_id?: string | null;

    app?: string | null;

    created_at?: string;

    criteria?: string | null;

    criteria_config?: Record<string, unknown> | null;

    criteria_id?: string | null;

    criteria_revision?: number | null;

    dataset_id?: string | null;

    dataset_sample_id?: string | null;

    evaluation_duration?: string | null;

    evaluation_type?: 'patronus_evaluation' | 'client_evaluation' | 'annotation' | null;

    evaluator_family?: string | null;

    evaluator_id?: string | null;

    experiment_id?: number | null;

    explain_strategy?: string | null;

    explanation?: string | null;

    explanation_duration?: string | null;

    metadata?: Record<string, unknown> | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: Record<string, string> | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: Record<string, unknown> | null;
  }
}

export interface EvaluationSearchResponse {
  evaluations: Array<EvaluationSearchResponse.Evaluation>;
}

export namespace EvaluationSearchResponse {
  export interface Evaluation {
    id: string;

    log_id: string;

    annotation_criteria_id?: string | null;

    app?: string | null;

    created_at?: string | null;

    criteria?: string | null;

    criteria_id?: string | null;

    criteria_revision?: number | null;

    dataset_id?: string | null;

    dataset_sample_id?: string | null;

    evaluation_duration?: string | null;

    evaluation_type?: 'patronus_evaluation' | 'client_evaluation' | 'annotation' | null;

    evaluator_family?: string | null;

    evaluator_id?: string | null;

    experiment_id?: number | null;

    explain_strategy?: string | null;

    explanation?: string | null;

    explanation_duration?: string | null;

    metadata?: Record<string, unknown> | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: Record<string, unknown> | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: Record<string, unknown> | null;
  }
}

export interface EvaluationBatchCreateParams {
  evaluations: Array<EvaluationBatchCreateParams.Evaluation>;
}

export namespace EvaluationBatchCreateParams {
  export interface Evaluation {
    evaluator_id: string;

    log_id: string;

    /**
     * Attach app to the evaluation.
     */
    app?: string | null;

    created_at?: string | null;

    criteria?: string | null;

    dataset_id?: string | null;

    dataset_sample_id?: string | null;

    evaluation_duration?: string | null;

    experiment_id?: string | null;

    explanation?: string | null;

    explanation_duration?: string | null;

    metadata?: Record<string, unknown> | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    /**
     * Attach project with given ID to the evaluation. **Note**: This parameter is
     * ignored in case project_name is provided.
     */
    project_id?: string | null;

    /**
     * Attach project with given name to the evaluation. If project with given name
     * doesn't exist, one will be created. **Note:** This parameter takes precedence
     * over project_id.
     */
    project_name?: string | null;

    score?: number | null;

    span_id?: string | null;

    /**
     * Tags are key-value pairs used to label resources
     */
    tags?: Record<string, string> | null;

    text_output?: string | null;

    trace_id?: string | null;
  }
}

export interface EvaluationSearchParams {
  filters?: Array<EvaluationSearchParams.Filter> | null;

  /**
   * Deprecated, please use 'filters' instead.
   */
  log_id_in?: Array<string> | null;

  /**
   * Deprecated, please use 'filters' instead.
   */
  trace_id?: string | null;
}

export namespace EvaluationSearchParams {
  export interface Filter {
    and_?: Array<unknown> | null;

    field?: string | null;

    operation?:
      | 'starts_with'
      | 'ends_with'
      | 'like'
      | 'ilike'
      | 'eq'
      | 'ne'
      | 'lt'
      | 'le'
      | 'gt'
      | 'ge'
      | null;

    or_?: Array<unknown> | null;

    value?: unknown | Array<unknown> | null;
  }
}

export declare namespace Evaluations {
  export {
    type EvaluationRetrieveResponse as EvaluationRetrieveResponse,
    type EvaluationBatchCreateResponse as EvaluationBatchCreateResponse,
    type EvaluationSearchResponse as EvaluationSearchResponse,
    type EvaluationBatchCreateParams as EvaluationBatchCreateParams,
    type EvaluationSearchParams as EvaluationSearchParams,
  };
}
