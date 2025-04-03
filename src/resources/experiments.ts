// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Experiments extends APIResource {
  /**
   * Create Experiment
   */
  create(
    body: ExperimentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentCreateResponse> {
    return this._client.post('/v1/experiments', { body, ...options });
  }

  /**
   * Get Experiment
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<ExperimentRetrieveResponse> {
    return this._client.get(`/v1/experiments/${id}`, options);
  }

  /**
   * List Experiments
   */
  list(query?: ExperimentListParams, options?: Core.RequestOptions): Core.APIPromise<ExperimentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ExperimentListResponse>;
  list(
    query: ExperimentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExperimentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/experiments', { query, ...options });
  }

  /**
   * Delete Experiment
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/experiments/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Experiment {
  id: string;

  created_at: string;

  name: string;

  project_id: string;

  /**
   * Tags are key-value pairs used to label resources
   */
  tags?: unknown;
}

export interface ExperimentCreateResponse {
  experiment: Experiment;
}

export interface ExperimentRetrieveResponse {
  experiment: Experiment;
}

export interface ExperimentListResponse {
  experiments: Array<Experiment>;
}

export interface ExperimentCreateParams {
  name: string;

  project_id: string;

  /**
   * Tags are key-value pairs used to label resources
   */
  tags?: unknown;
}

export interface ExperimentListParams {
  limit?: number;

  offset?: number;

  project_id?: string | null;
}

export declare namespace Experiments {
  export {
    type Experiment as Experiment,
    type ExperimentCreateResponse as ExperimentCreateResponse,
    type ExperimentRetrieveResponse as ExperimentRetrieveResponse,
    type ExperimentListResponse as ExperimentListResponse,
    type ExperimentCreateParams as ExperimentCreateParams,
    type ExperimentListParams as ExperimentListParams,
  };
}
