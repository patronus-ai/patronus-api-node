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
   * Requires either **input** or **output** field to be specified. Absence of both
   * leads to an HTTP_422 (Unprocessable Entity) error.
   */
  evaluate(
    body: EvaluationEvaluateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EvaluationEvaluateResponse> {
    return this._client.post('/v1/evaluate', { body, ...options });
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

    criteria_config?: unknown | null;

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

    feedback?: 'positive' | 'negative' | null;

    metadata?: unknown | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: Record<string, string> | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: unknown | null;
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

    criteria_config?: unknown | null;

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

    feedback?: 'positive' | 'negative' | null;

    metadata?: unknown | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: Record<string, string> | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: unknown | null;
  }
}

export interface EvaluationEvaluateResponse {
  results: Array<EvaluationEvaluateResponse.Result>;
}

export namespace EvaluationEvaluateResponse {
  export interface Result {
    criteria: string | null;

    error_message: string | null;

    evaluation_result: Result.EvaluationResult | null;

    evaluator_id: string;

    /**
     * Status of the criterion evaluation. "success" indicates successful evaluation.
     */
    status: string;
  }

  export namespace Result {
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

    feedback?: 'positive' | 'negative' | null;

    metadata?: unknown | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    project_id?: string | null;

    score?: number | null;

    span_id?: string | null;

    tags?: unknown | null;

    text_output?: string | null;

    trace_id?: string | null;

    usage?: unknown | null;
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

    metadata?: unknown | null;

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
    tags?: unknown | null;

    text_output?: string | null;

    trace_id?: string | null;
  }
}

export interface EvaluationEvaluateParams {
  /**
   * List of evaluators to evaluate against.
   */
  evaluators: Array<EvaluationEvaluateParams.Evaluator>;

  /**
   * Assigns evaluation results to the app.
   *
   * - `app` cannot be used together with `experiment_id`.
   * - If `app` and `experiment_id` is omitted, `app` is set automatically to
   *   "default" on capture.
   * - Automatically creates an app if it doesn't exist.
   * - Only relevant for captured results. If will capture the results under given
   *   app.
   */
  app?: string | null;

  /**
   * Capture evaluation result based on given option, default is none:
   *
   * - `all` captures the result of all evaluations (pass + failed).
   * - `fails-only` captures the evaluation result when evaluation failed.
   * - `none` does not capture evaluation result
   */
  capture?: 'all' | 'fails-only' | 'none';

  /**
   * Create confidence intervals based on one of the following strategies:
   *
   * - 'none': returns None
   * - 'full-history': calculates upper boundary, median, and lower boundary of
   *   confidence interval based on all available historic records.
   * - 'generated': calculates upper boundary, median, and lower boundary of
   *   confidence interval based on on-flight generated sample of evaluations.
   */
  confidence_interval_strategy?: 'none' | 'full-history';

  /**
   * The ID of the dataset from which the evaluated sample originates. This field
   * serves as metadata for the evaluation. This endpoint does not ensure data
   * consistency for this field. There is no guarantee that the dataset with the
   * given ID is present in the Patronus AI platform, as this is a self-reported
   * value.
   */
  dataset_id?: string | null;

  /**
   * The ID of the sample within the dataset. This field serves as metadata for the
   * evaluation. This endpoint does not ensure data consistency for this field. There
   * is no guarantee that the dataset and sample are present in the Patronus AI
   * platform, as this is a self-reported value.
   */
  dataset_sample_id?: string | null;

  /**
   * Optional list of attachments to be associated with the evaluation sample. This
   * will be added to all evaluation results in this request. Each attachment is a
   * dictionary with the following keys:
   *
   * - `url`: URL of the attachment.
   * - `media_type`: Media type of the attachment (e.g., "image/jpeg", "image/png").
   * - `usage_type`: Type of the attachment (e.g., "evaluated_model_system_prompt",
   *   "evaluated_model_input").
   */
  evaluated_model_attachments?: Array<EvaluationEvaluateParams.EvaluatedModelAttachment> | null;

  /**
   * Assign evaluation results to the experiment.
   *
   * - `experiment_id` cannot be used together with `app`.
   * - Only relevant for captured results. If will capture the results under
   *   experiment.
   */
  experiment_id?: string | null;

  /**
   * Gold answer for given evaluated model input
   */
  gold_answer?: string | null;

  log_id?: string | null;

  /**
   * Attach project with given ID to the evaluation.
   *
   * **Note**: This parameter is ignored in case project_name or experiment_id is
   * provided.
   */
  project_id?: string | null;

  /**
   * Attach project with given name to the evaluation. If project with given name
   * doesn't exist, one will be created.
   *
   * **Note:** This parameter is ignored in case experiment_id is provided.
   *
   * **Note:** This parameter takes precedence over project_id.
   */
  project_name?: string | null;

  span_id?: string | null;

  /**
   * The system prompt provided to the LLM.
   */
  system_prompt?: string | null;

  /**
   * Tags are key-value pairs used to label resources
   */
  tags?: unknown;

  /**
   * Optional context retrieved from vector database. This is a list of strings, with
   * the following restrictions:
   *
   * - Number of items must be less/equal than 50.
   * - The sum of tokens in all elements must be less/equal than 120000, using
   *   o200k_base tiktoken encoding
   */
  task_context?: Array<string> | string | null;

  /**
   * The input (prompt) provided to LLM.
   */
  task_input?: string | null;

  /**
   * LLM's response to the given input.
   */
  task_output?: string | null;

  trace_id?: string | null;
}

export namespace EvaluationEvaluateParams {
  export interface Evaluator {
    /**
     * Evaluator identifier, alias or id
     */
    evaluator: string;

    /**
     * Name of the criteria used for evaluator parametrization.
     */
    criteria?: string | null;

    /**
     * Request evaluation result explanation based on given strategy, default is `None`
     *             - `never` do not explain any evaluation results
     *             - `on-fail` explains the result for failed evaluations only
     *             - `on-success` explains the result for passed evaluations only
     *             - `always` explains the result for all evaluations
     *
     *             *Not all evaluation criteria support explanations.
     *             *Ignored if evaluation criteria don't support explanations.
     *             *`explain_strategy` is overwriting the `explain` parameter.
     */
    explain_strategy?: 'never' | 'on-fail' | 'on-success' | 'always';
  }

  export interface EvaluatedModelAttachment {
    media_type:
      | 'image/jpeg'
      | 'image/png'
      | 'audio/flac'
      | 'audio/mp3'
      | 'audio/mp4'
      | 'audio/mpeg'
      | 'audio/wav';

    url: string;

    usage_type?:
      | 'evaluated_model_system_prompt'
      | 'evaluated_model_input'
      | 'evaluated_model_output'
      | 'evaluated_model_gold_answer'
      | 'evaluated_model_retrieved_context';
  }
}

export interface EvaluationSearchParams {
  filters?: Array<EvaluationSearchParams.Filter> | null;

  /**
   * @deprecated Deprecated, please use 'filters' instead.
   */
  log_id_in?: Array<string> | null;

  /**
   * @deprecated Deprecated, please use 'filters' instead.
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
    type EvaluationEvaluateResponse as EvaluationEvaluateResponse,
    type EvaluationSearchResponse as EvaluationSearchResponse,
    type EvaluationBatchCreateParams as EvaluationBatchCreateParams,
    type EvaluationEvaluateParams as EvaluationEvaluateParams,
    type EvaluationSearchParams as EvaluationSearchParams,
  };
}
