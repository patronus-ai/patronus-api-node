// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as EvaluationResultsAPI from './evaluation-results/evaluation-results';

export interface AnnotateResponse {
  evaluation: AnnotateResponse.Evaluation;
}

export namespace AnnotateResponse {
  export interface Evaluation {
    id: string;

    created_at: string | null;

    criteria: string | null;

    criteria_id: string | null;

    evaluation_duration: string | null;

    evaluator_family: string | null;

    evaluator_id: string | null;

    explain_strategy: string | null;

    explanation: string | null;

    explanation_duration: string | null;

    log_id: string;

    score: number | null;

    text_output: string | null;

    annotation_criteria_id?: string | null;

    criteria_config?: unknown | null;

    criteria_revision?: number | null;

    evaluation_feedback?: boolean | null;

    evaluation_type?: string | null;

    metadata?: unknown | null;

    metric_description?: string | null;

    metric_name?: string | null;

    pass?: boolean | null;

    usage?: unknown | null;
  }
}

export interface EvaluateResponse {
  results: Array<EvaluateResponse.Result>;
}

export namespace EvaluateResponse {
  export interface Result {
    criteria: string | null;

    error_message: string | null;

    evaluation_result: EvaluationResultsAPI.EvaluationResult | null;

    evaluator_id: string;

    /**
     * Status of the criterion evaluation. "success" indicates successful evaluation.
     */
    status: string;
  }
}

export interface ListAppsResponse {
  apps: Array<ListAppsResponse.App>;
}

export namespace ListAppsResponse {
  export interface App {
    name: string;
  }
}

export interface ListEvaluatorFamiliesResponse {
  evaluator_families: Array<ListEvaluatorFamiliesResponse.EvaluatorFamily>;
}

export namespace ListEvaluatorFamiliesResponse {
  export interface EvaluatorFamily {
    family_name: string;

    optional_input_fields: Array<string>;

    profile_config_schema: unknown | null;

    required_input_fields: Array<string>;
  }
}

export interface ListEvaluatorsResponse {
  evaluators: Array<ListEvaluatorsResponse.Evaluator>;
}

export namespace ListEvaluatorsResponse {
  export interface Evaluator {
    id: string;

    aliases: Array<string>;

    description: string | null;

    /**
     * Whether the evaluator is available for LLM Monitoring.
     */
    evaluation_enabled: boolean;

    /**
     * Whether the evaluator is available for Evaluation Runs.
     */
    evaluation_run_enabled: boolean;

    evaluator_family: string | null;

    image_url: string | null;

    name: string | null;

    /**
     * Whether a profile is required by the evaluator. Learn more about profiles
     * [here](https://docs.patronus.ai/docs/profiles).
     */
    profile_required: boolean;
  }
}

export interface WhoamiResponse {
  caller: WhoamiResponse.Caller;
}

export namespace WhoamiResponse {
  export interface Caller {
    api_key: Caller.APIKey | null;

    user: Caller.User | null;
  }

  export namespace Caller {
    export interface APIKey {
      id: string;

      account: APIKey.Account;
    }

    export namespace APIKey {
      export interface Account {
        id: string;

        name: string;
      }
    }

    export interface User {
      id: string;

      accounts: Array<User.Account>;

      is_staff: boolean;

      sub: string;
    }

    export namespace User {
      export interface Account {
        id: string;

        name: string;

        role: string | null;

        features_enabled?: Array<string>;
      }
    }
  }
}

export interface AnnotateParams {
  annotation_criteria_id: string;

  log_id: string;

  explanation?: string | null;

  value_pass?: boolean | null;

  value_score?: number | null;

  value_text?: string | null;
}

export interface EvaluateParams {
  /**
   * List of evaluators to evaluate against.
   */
  evaluators: Array<EvaluateParams.Evaluator>;

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
  evaluated_model_attachments?: Array<EvaluateParams.EvaluatedModelAttachment> | null;

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

export namespace EvaluateParams {
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
    explain_strategy?: EvaluationResultsAPI.EvaluationExplainStrategies;
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

export interface ListAppsParams {
  limit?: number;

  offset?: number;
}

export declare namespace TopLevel {
  export {
    type AnnotateResponse as AnnotateResponse,
    type EvaluateResponse as EvaluateResponse,
    type ListAppsResponse as ListAppsResponse,
    type ListEvaluatorFamiliesResponse as ListEvaluatorFamiliesResponse,
    type ListEvaluatorsResponse as ListEvaluatorsResponse,
    type WhoamiResponse as WhoamiResponse,
    type AnnotateParams as AnnotateParams,
    type EvaluateParams as EvaluateParams,
    type ListAppsParams as ListAppsParams,
  };
}
