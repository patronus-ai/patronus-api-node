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
  evaluation_results: Array<CreateEvaluationResultsBatchResponse.EvaluationResult>;
}

export namespace CreateEvaluationResultsBatchResponse {
  export interface EvaluationResult {
    id: string | null;

    app: string | null;

    created_at: string | null;

    evaluator_id: string;
  }
}

export interface EvaluateResultSearchResponse {
  results: Array<EvaluateResultSearchResponse.Result>;
}

export namespace EvaluateResultSearchResponse {
  export interface Result {
    id: string | null;

    additional_info: Result.AdditionalInfo;

    app: string | null;

    created_at: string | null;

    criteria: string | null;

    dataset_id: string | null;

    dataset_sample_id: number | null;

    evaluated_model_gold_answer: string | null;

    evaluated_model_id: string | null;

    evaluated_model_input: string | null;

    evaluated_model_name: string | null;

    evaluated_model_output: string | null;

    evaluated_model_params: unknown | null;

    evaluated_model_provider: string | null;

    evaluated_model_retrieved_context: Array<string> | null;

    evaluated_model_selected_model: string | null;

    evaluated_model_system_prompt: string | null;

    evaluation_duration: string | null;

    evaluation_feedback: boolean | null;

    evaluation_run_id: number | null;

    evaluator_family: string | null;

    evaluator_id: string | null;

    evaluator_profile_public_id: string | null;

    experiment_id: string | null;

    explain_strategy: 'never' | 'on-fail' | 'on-success' | 'always' | null;

    explanation: string | null;

    explanation_duration: string | null;

    external: boolean;

    favorite: boolean | null;

    log_id: string | null;

    profile_name: string | null;

    project_id: string | null;

    tags: Record<string, string> | null;

    annotation_criteria_id?: string | null;

    evaluated_model_attachments?: Array<Result.EvaluatedModelAttachment> | null;

    evaluation_metadata?: unknown | null;

    evaluation_type?: string | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    score_raw?: number | null;

    text_output?: string | null;

    usage_tokens?: number | null;
  }

  export namespace Result {
    export interface AdditionalInfo {
      confidence_interval: AdditionalInfo.ConfidenceInterval | null;

      extra: unknown | null;

      positions?: Array<unknown> | null;
    }

    export namespace AdditionalInfo {
      export interface ConfidenceInterval {
        alpha: number;

        lower: number | null;

        median: number | null;

        strategy: string;

        upper: number | null;
      }
    }

    export interface EvaluatedModelAttachment {
      media_type: string;

      url: string;

      usage_type: string;
    }
  }
}

export interface GetEvaluationResult {
  evaluation_result: GetEvaluationResult.EvaluationResult;
}

export namespace GetEvaluationResult {
  export interface EvaluationResult {
    id: string | null;

    additional_info: EvaluationResult.AdditionalInfo;

    app: string | null;

    created_at: string | null;

    criteria: string | null;

    dataset_id: string | null;

    dataset_sample_id: number | null;

    evaluated_model_gold_answer: string | null;

    evaluated_model_id: string | null;

    evaluated_model_input: string | null;

    evaluated_model_name: string | null;

    evaluated_model_output: string | null;

    evaluated_model_params: unknown | null;

    evaluated_model_provider: string | null;

    evaluated_model_retrieved_context: Array<string> | null;

    evaluated_model_selected_model: string | null;

    evaluated_model_system_prompt: string | null;

    evaluation_duration: string | null;

    evaluation_feedback: boolean | null;

    evaluation_run_id: number | null;

    evaluator_family: string | null;

    evaluator_id: string | null;

    evaluator_profile_public_id: string | null;

    experiment_id: string | null;

    explain_strategy: 'never' | 'on-fail' | 'on-success' | 'always' | null;

    explanation: string | null;

    explanation_duration: string | null;

    external: boolean;

    favorite: boolean | null;

    log_id: string | null;

    profile_name: string | null;

    project_id: string | null;

    tags: Record<string, string> | null;

    annotation_criteria_id?: string | null;

    evaluated_model_attachments?: Array<EvaluationResult.EvaluatedModelAttachment> | null;

    evaluation_metadata?: unknown | null;

    evaluation_type?: string | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    score_raw?: number | null;

    text_output?: string | null;

    usage_tokens?: number | null;
  }

  export namespace EvaluationResult {
    export interface AdditionalInfo {
      confidence_interval: AdditionalInfo.ConfidenceInterval | null;

      extra: unknown | null;

      positions?: Array<unknown> | null;
    }

    export namespace AdditionalInfo {
      export interface ConfidenceInterval {
        alpha: number;

        lower: number | null;

        median: number | null;

        strategy: string;

        upper: number | null;
      }
    }

    export interface EvaluatedModelAttachment {
      media_type: string;

      url: string;

      usage_type: string;
    }
  }
}

export interface EvaluationResultBatchCreateParams {
  evaluation_results: Array<EvaluationResultBatchCreateParams.EvaluationResult>;
}

export namespace EvaluationResultBatchCreateParams {
  export interface EvaluationResult {
    /**
     * External evaluator identifier. 'external:' is prepended on the output.
     */
    evaluator_id: string;

    /**
     * Defaults to 'default' if `app` or `experiment_id` is not provided. Cannot be
     * provided together with `experiment_id`.`
     */
    app?: string | null;

    criteria?: string | null;

    dataset_id?: string | null;

    dataset_sample_id?: number | null;

    evaluated_model_attachments?: Array<EvaluationResult.EvaluatedModelAttachment> | null;

    evaluated_model_gold_answer?: string | null;

    evaluated_model_input?: string | null;

    /**
     * Name of the evaluated model. E.g. 'gpt-4o', 'my-assistant'.
     */
    evaluated_model_name?: string | null;

    evaluated_model_output?: string | null;

    evaluated_model_params?: Record<string, number | string | null> | null;

    /**
     * Provider of the evaluated model. E.g. 'OpenAI', 'PatronusAI' etc.
     */
    evaluated_model_provider?: string | null;

    evaluated_model_retrieved_context?: Array<string> | null;

    /**
     * ID/name of the base-model used by evaluated model/assistant. E.g. 'gpt-4o',
     * 'llama3' etc.
     */
    evaluated_model_selected_model?: string | null;

    evaluated_model_system_prompt?: string | null;

    evaluation_duration?: string | null;

    evaluation_metadata?: unknown | null;

    experiment_id?: string | null;

    explanation?: string | null;

    explanation_duration?: string | null;

    pass?: boolean | null;

    /**
     * @deprecated profile_name is deprecated. Please use 'criteria' field instead.
     */
    profile_name?: string | null;

    score_raw?: number | null;

    /**
     * Tags are key-value pairs used to label resources
     */
    tags?: unknown;

    text_output?: string | null;
  }

  export namespace EvaluationResult {
    export interface EvaluatedModelAttachment {
      media_type: string;

      url: string;

      usage_type: string;
    }
  }
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
  explain_strategy?: 'never' | 'on-fail' | 'on-success' | 'always' | null;

  favorite?: boolean | null;

  /**
   * Maximum number of results to return.
   */
  limit?: number;

  /**
   * Ordering option for the search results.
   */
  order?: 'created_at' | '-created_at' | 'dataset_sample_id' | '-dataset_sample_id';

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
