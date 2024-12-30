// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Feedback extends APIResource {
  /**
   * **This endpoint is deprecated. Please use
   * [Search Evaluation Results](https://docs.patronus.ai/reference/search_evaluation_results_v1_evaluation_results_search_post)
   * endpoint instead.**
   */
  retrieve(
    query?: FeedbackRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListFeedbackResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<ListFeedbackResponse>;
  retrieve(
    query: FeedbackRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListFeedbackResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/v1/feedback', { query, ...options });
  }

  /**
   * **This endpoint is deprecated. Please use
   * [Delete Feedback](https://docs.patronus.ai/reference/delete-feedback) endpoint
   * instead.**
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/feedback/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * **This endpoint is deprecated. Please use
   * [Give Feedback](https://docs.patronus.ai/reference/give-feedback) endpoint
   * instead.**
   *
   * ## Provide feedback for LLM Monitoring results and Evaluation Run results.
   *
   * Feedbacks are used by
   * [Active Learning](https://docs.patronus.ai/docs/active-learning)
   *
   * ### Give feedback for a Evaluation Run result:
   *
   * To give feedback for evaluation run result, following fields has to be provided
   * to identify the sample for which feedback is given:
   *
   * - evaluation_run_id
   * - evaluator_id
   * - evaluation_run_candidate_input_id
   *
   * example:
   *
   * ```bash
   * curl --location 'https://api.patronus.ai/v1/feedback'       --header 'x-api-key: <your api key>'       --header 'Content-Type: application/json'       --data '{
   *       "feedback_positive": true,
   *       "evaluation_run_id": "1234567891234567890",
   *       "evaluator_id": "toxicity-v1",
   *       "evaluation_run_candidate_input_id": 1
   * }'
   * ```
   *
   * ### Give feedback for a LLM Monitoring result:
   *
   * To give feedback for LLM Monitoring result only `evaluation_result_id` to
   * identify the record.
   *
   * example:
   *
   * ```bash
   * curl --location 'https://api.patronus.ai/v1/feedback'       --header 'x-api-key: <your api key>'       --header 'Content-Type: application/json'         --data '{
   *     "feedback_positive": true,
   *     "evaluation_result_id": "1234567891234567890"
   *   }'
   * ```
   */
  give(body: FeedbackGiveParams, options?: Core.RequestOptions): Core.APIPromise<CreateFeedbackResponse> {
    return this._client.post('/v1/feedback', { body, ...options });
  }
}

export interface CreateFeedbackResponse {
  feedback_positive: boolean;
}

export interface ListFeedbackResponse {
  feedbacks: Array<ListFeedbackResponse.Feedback>;
}

export namespace ListFeedbackResponse {
  export interface Feedback {
    /**
     * ID of the feedback record.
     */
    id: string;

    /**
     * Timestamp when the feedback record was created.
     */
    created_at: string;

    /**
     * Evaluation Result ID for which feedback is given. Only applicable for LLM
     * Monitoring
     */
    evaluation_result_id: string | null;

    /**
     * ID of the sample for which feedback is given. Only applicable for Evaluation Run
     * results.
     */
    evaluation_run_candidate_input_id: number | null;

    /**
     * evaluation run id.
     */
    evaluation_run_id: string | null;

    /**
     * Evaluation run criterion id.
     */
    evaluator_id: string;

    /**
     * Whether the feedback is positive or negative.
     */
    feedback_positive: boolean | null;

    /**
     * Evaluation run profile name.
     */
    profile_name: string | null;
  }
}

export interface FeedbackRetrieveParams {
  evaluation_result_id?: string | null;

  evaluation_run_candidate_input_id?: number | null;

  evaluation_run_id?: string | null;

  evaluator_id?: string | null;

  limit?: number;

  offset?: number;

  profile_name?: string | null;
}

export interface FeedbackGiveParams {
  /**
   * Whether the feedback is positive or negative.
   */
  feedback_positive: boolean;

  /**
   * Evaluation Result ID for which feedback is given. Only applicable for LLM
   * Monitoring results.
   */
  evaluation_result_id?: string | null;

  /**
   * ID of the sample for which feedback is given. Only applicable for Evaluation Run
   * results.
   */
  evaluation_run_candidate_input_id?: number | null;

  /**
   * Evaluation Run ID associated with sample for which feedback is given. Only
   * applicable for Evaluation Run results.
   */
  evaluation_run_id?: string | null;

  /**
   * Evaluator ID associated with sample for which feedback is given. Only applicable
   * for Evaluation Run results.
   */
  evaluator_id?: string | null;

  /**
   * Evaluation run profile name.
   */
  profile_name?: string | null;
}

export declare namespace Feedback {
  export {
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type ListFeedbackResponse as ListFeedbackResponse,
    type FeedbackRetrieveParams as FeedbackRetrieveParams,
    type FeedbackGiveParams as FeedbackGiveParams,
  };
}
