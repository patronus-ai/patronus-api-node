// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class EvaluationFeedback extends APIResource {
  /**
   * Delete Evaluation Feedback
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/evaluation-results/${id}/evaluation-feedback`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Give Evaluation Feedback
   */
  submit(
    id: number,
    body: EvaluationFeedbackSubmitParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/evaluation-results/${id}/evaluation-feedback`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface EvaluationFeedbackSubmitParams {
  feedback: 'positive' | 'negative';
}

export declare namespace EvaluationFeedback {
  export { type EvaluationFeedbackSubmitParams as EvaluationFeedbackSubmitParams };
}
