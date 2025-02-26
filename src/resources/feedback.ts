// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class Feedback extends APIResource {}

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

export declare namespace Feedback {
  export {
    type CreateFeedbackResponse as CreateFeedbackResponse,
    type ListFeedbackResponse as ListFeedbackResponse,
  };
}
