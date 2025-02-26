// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Evaluations extends APIResource {
  /**
   * Requires either **input** or **output** field to be specified. Absence of both
   * leads to an HTTP_422 (Unprocessable Entity) error.
   */
  evaluate(body: EvaluationEvaluateParams, options?: Core.RequestOptions): Core.APIPromise<EvaluateResponse> {
    return this._client.post('/v1/evaluate', { body, ...options });
  }
}

export interface EvaluateResponse {
  results: Array<unknown>;
}

export interface EvaluationEvaluateParams {
  /**
   * List of evaluators to evaluate against.
   */
  evaluators: Array<unknown>;

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
  capture?: unknown;

  /**
   * Create confidence intervals based on one of the following strategies:
   *
   * - 'none': returns None
   * - 'full-history': calculates upper boundary, median, and lower boundary of
   *   confidence interval based on all available historic records.
   * - 'generated': calculates upper boundary, median, and lower boundary of
   *   confidence interval based on on-flight generated sample of evaluations.
   */
  confidence_interval_strategy?: unknown;

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
  dataset_sample_id?: number | null;

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
  evaluated_model_attachments?: Array<unknown> | null;

  /**
   * Gold answer for given evaluated model input
   */
  evaluated_model_gold_answer?: string | null;

  /**
   * The input (prompt) provided to LLM.
   */
  evaluated_model_input?: string | null;

  /**
   * LLM's response to the given input.
   */
  evaluated_model_output?: string | null;

  /**
   * Optional context retrieved from vector database. This is a list of strings, with
   * the following restrictions:
   *
   * - Number of items must be less/equal than 50.
   * - The sum of tokens in all elements must be less/equal than 120000, using
   *   o200k_base tiktoken encoding
   */
  evaluated_model_retrieved_context?: Array<string> | string | null;

  /**
   * The system prompt provided to the LLM.
   */
  evaluated_model_system_prompt?: string | null;

  /**
   * Assign evaluation results to the experiment.
   *
   * - `experiment_id` cannot be used together with `app`.
   * - Only relevant for captured results. If will capture the results under
   *   experiment.
   */
  experiment_id?: string | null;

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
   * Tags are key-value pairs used to label resources
   */
  tags?: unknown;

  trace_id?: string | null;
}

export declare namespace Evaluations {
  export {
    type EvaluateResponse as EvaluateResponse,
    type EvaluationEvaluateParams as EvaluationEvaluateParams,
  };
}
