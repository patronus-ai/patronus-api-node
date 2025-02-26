// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TagsAPI from './tags';
import { ListTagsResponse, Tags } from './tags';

export class EvaluationResults extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Get Evaluation Result
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<GetEvaluationResult> {
    return this._client.get(`/v1/evaluation-results/${id}`, options);
  }

  /**
   * The Batch Create Evaluation Results endpoint lets you import external
   * evaluations into the Patronus platform.
   *
   * The order of input evaluations is preserved in the output.
   */
  batchCreate(
    body: EvaluationResultBatchCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateEvaluationResultsBatchResponse> {
    return this._client.post('/v1/evaluation-results/batch', { body, ...options });
  }

  /**
   * Give Evaluation Feedback
   */
  evaluationFeedback(
    id: number,
    body: EvaluationResultEvaluationFeedbackParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/evaluation-results/${id}/evaluation-feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Mark Favorite Evaluation Result
   */
  favorite(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(`/v1/evaluation-results/${id}/favorite`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Delete Evaluation Feedback
   */
  removeEvaluationFeedback(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/evaluation-results/${id}/evaluation-feedback`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Search Evaluation Results
   */
  search(
    body: EvaluationResultSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluateResultSearchResponse> {
    return this._client.post('/v1/evaluation-results/search', { body, ...options });
  }

  /**
   * Unmark Favorite Evaluation Result
   */
  unfavorite(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/evaluation-results/${id}/favorite`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface CreateEvaluationResultsBatchResponse {
  evaluation_results: Array<unknown>;
}

export interface EvaluateResultSearchResponse {
  results: Array<unknown>;
}

export interface GetEvaluationResult {
  evaluation_result: unknown;
}

export interface EvaluationResultBatchCreateParams {
  evaluation_results: Array<unknown>;
}

export interface EvaluationResultEvaluationFeedbackParams {
  feedback: 'positive' | 'negative';
}

export interface EvaluationResultSearchParams {
  /**
   * Filter results to those recorded after this date and time.
   */
  after_datetime?: string | null;

  /**
   * Filter results to those with an ID greater than this value.
   */
  after_id?: number | null;

  /**
   * Filter by the application name related to the evaluation results.
   */
  app?: string | null;

  /**
   * Filter results to those recorded before this date and time.
   */
  before_datetime?: string | null;

  /**
   * Filter results to those with an ID less than this value.
   */
  before_id?: number | null;

  /**
   * Filter by the name of the evaluator criteria associated with the evaluation
   * results.
   */
  criteria?: string | null;

  /**
   * Filter by the dataset ID related to the evaluation results.
   */
  dataset_id?: string | null;

  evaluation_feedback_status?: 'given' | 'notgiven' | 'positive' | 'negative' | null;

  /**
   * Filter by the evaluation run ID related to the evaluation results.
   */
  evaluation_run_id?: string | null;

  evaluation_type?: 'patronus_evaluation' | 'client_evaluation' | 'annotation' | null;

  /**
   * Filter by the evaluator family associated with the evaluation results.
   */
  evaluator_family?: string | null;

  /**
   * Filter by the ID of the evaluation criterion.
   */
  evaluator_id?: string | null;

  /**
   * Filter by public id of evaluator profile used in evaluation.
   */
  evaluator_profile_public_id?: string | null;

  /**
   * Filter by the experiment ID related to the evaluation results.
   */
  experiment_id?: string | null;

  /**
   * Filter results by having explanation.
   */
  explain?: boolean | null;

  /**
   * Filter results by explain strategy.
   */
  explain_strategy?: unknown;

  favorite?: boolean | null;

  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Ordering option for the search results.
   */
  order?: unknown;

  /**
   * Filter results by those which pass or failed the evaluation.
   */
  pass?: boolean | null;

  /**
   * Filter by the name of the evaluator profile associated with the evaluation
   * results.
   */
  profile_name?: string | null;

  /**
   * Filter by the project ID related to the evaluation results.
   */
  project_id?: string | null;

  score_raw_max?: number | null;

  score_raw_min?: number | null;

  /**
   * Filter by given tags. Tags given in this filter are combined with the and
   * clause. Example: {"model_version": "1.0.0", "next_tag": "1234"} Will return only
   * those evaluation results which have both tags with given values. This is an
   * exact match.
   */
  tags?: Record<string, string> | null;
}

EvaluationResults.Tags = Tags;

export declare namespace EvaluationResults {
  export {
    type CreateEvaluationResultsBatchResponse as CreateEvaluationResultsBatchResponse,
    type EvaluateResultSearchResponse as EvaluateResultSearchResponse,
    type GetEvaluationResult as GetEvaluationResult,
    type EvaluationResultBatchCreateParams as EvaluationResultBatchCreateParams,
    type EvaluationResultEvaluationFeedbackParams as EvaluationResultEvaluationFeedbackParams,
    type EvaluationResultSearchParams as EvaluationResultSearchParams,
  };

  export { Tags as Tags, type ListTagsResponse as ListTagsResponse };
}
