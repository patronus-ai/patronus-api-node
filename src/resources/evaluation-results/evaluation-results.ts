// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EvaluationFeedbackAPI from './evaluation-feedback';
import { EvaluationFeedback, EvaluationFeedbackSubmitParams } from './evaluation-feedback';
import * as FavoriteAPI from './favorite';
import { Favorite } from './favorite';

export class EvaluationResults extends APIResource {
  favorite: FavoriteAPI.Favorite = new FavoriteAPI.Favorite(this._client);
  evaluationFeedback: EvaluationFeedbackAPI.EvaluationFeedback = new EvaluationFeedbackAPI.EvaluationFeedback(
    this._client,
  );

  /**
   * Get Evaluation Result
   */
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<EvaluationResultRetrieveResponse> {
    return this._client.get(`/v1/evaluation-results/${id}`, options);
  }

  /**
   * The Batch Create Evaluation Results endpoint lets you import external
   * evaluations into the Patronus platform.
   *
   * The order of input evaluations is preserved in the output.
   */
  createBatch(
    body: EvaluationResultCreateBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationResultCreateBatchResponse> {
    return this._client.post('/v1/evaluation-results/batch', { body, ...options });
  }

  /**
   * List Tags
   */
  listTags(options?: Core.RequestOptions): Core.APIPromise<EvaluationResultListTagsResponse> {
    return this._client.get('/v1/evaluation-results/tags', options);
  }

  /**
   * Search Evaluation Results
   */
  search(
    body: EvaluationResultSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationResultSearchResponse> {
    return this._client.post('/v1/evaluation-results/search', { body, ...options });
  }
}

export type EvaluationExplainStrategies = 'never' | 'on-fail' | 'on-success' | 'always';

export interface EvaluationResult {
  id: string | null;

  additional_info: EvaluationResult.AdditionalInfo;

  app: string | null;

  created_at: string | null;

  criteria: string | null;

  criteria_revision: number | null;

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

  explain_strategy: EvaluationExplainStrategies | null;

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

    positions?: Array<Array<number>> | null;
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

export interface EvaluationResultRetrieveResponse {
  evaluation_result: EvaluationResult;
}

export interface EvaluationResultCreateBatchResponse {
  evaluation_results: Array<EvaluationResultCreateBatchResponse.EvaluationResult>;
}

export namespace EvaluationResultCreateBatchResponse {
  export interface EvaluationResult {
    id: string | null;

    app: string | null;

    created_at: string | null;

    evaluator_id: string;
  }
}

export interface EvaluationResultListTagsResponse {
  tags: Array<EvaluationResultListTagsResponse.Tag>;
}

export namespace EvaluationResultListTagsResponse {
  export interface Tag {
    created_at: string;

    key: string;

    last_used: string;

    value: string;
  }
}

export interface EvaluationResultSearchResponse {
  results: Array<EvaluationResult>;
}

export interface EvaluationResultCreateBatchParams {
  evaluation_results: Array<EvaluationResultCreateBatchParams.EvaluationResult>;
}

export namespace EvaluationResultCreateBatchParams {
  export interface EvaluationResult {
    /**
     * External evaluator identifier.
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

    evaluated_model_retrieved_context?: Array<string> | string | null;

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
  explain_strategy?: EvaluationExplainStrategies | null;

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

EvaluationResults.Favorite = Favorite;
EvaluationResults.EvaluationFeedback = EvaluationFeedback;

export declare namespace EvaluationResults {
  export {
    type EvaluationExplainStrategies as EvaluationExplainStrategies,
    type EvaluationResult as EvaluationResult,
    type EvaluationResultRetrieveResponse as EvaluationResultRetrieveResponse,
    type EvaluationResultCreateBatchResponse as EvaluationResultCreateBatchResponse,
    type EvaluationResultListTagsResponse as EvaluationResultListTagsResponse,
    type EvaluationResultSearchResponse as EvaluationResultSearchResponse,
    type EvaluationResultCreateBatchParams as EvaluationResultCreateBatchParams,
    type EvaluationResultSearchParams as EvaluationResultSearchParams,
  };

  export { Favorite as Favorite };

  export {
    EvaluationFeedback as EvaluationFeedback,
    type EvaluationFeedbackSubmitParams as EvaluationFeedbackSubmitParams,
  };
}
