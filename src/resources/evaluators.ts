// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Evaluators extends APIResource {
  /**
   * List of available evaluators for Evaluation Runs and LLM Monitoring.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ListEvaluatorsResponse> {
    return this._client.get('/v1/evaluators', options);
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

export declare namespace Evaluators {
  export { type ListEvaluatorsResponse as ListEvaluatorsResponse };
}
