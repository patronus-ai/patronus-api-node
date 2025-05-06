// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class TraceInsightJobs extends APIResource {
  /**
   * Create Insight Job
   */
  create(
    body: TraceInsightJobCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightJobCreateResponse> {
    return this._client.post('/v1/trace-insight-jobs', { body, ...options });
  }

  /**
   * List Insight Jobs
   */
  list(
    query?: TraceInsightJobListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightJobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TraceInsightJobListResponse>;
  list(
    query: TraceInsightJobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightJobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/trace-insight-jobs', { query, ...options });
  }
}

export interface TraceInsightJobCreateResponse {
  job_id: string;

  status: string;

  trace_id: string;
}

export interface TraceInsightJobListResponse {
  insight_jobs: Array<TraceInsightJobListResponse.InsightJob>;
}

export namespace TraceInsightJobListResponse {
  export interface InsightJob {
    app: string | null;

    created_at: string;

    experiment_id: string | null;

    job_id: string;

    project_id: string;

    status: string;

    trace_id: string;
  }
}

export interface TraceInsightJobCreateParams {
  trace_id: string;
}

export interface TraceInsightJobListParams {
  app?: string | null;

  experiment_id?: string | null;

  job_id?: string | null;

  job_status?: 'pending' | 'success' | 'failed' | 'cancelled' | null;

  limit?: number;

  offset?: number;

  project_id?: string | null;

  trace_id?: string | null;
}

export declare namespace TraceInsightJobs {
  export {
    type TraceInsightJobCreateResponse as TraceInsightJobCreateResponse,
    type TraceInsightJobListResponse as TraceInsightJobListResponse,
    type TraceInsightJobCreateParams as TraceInsightJobCreateParams,
    type TraceInsightJobListParams as TraceInsightJobListParams,
  };
}
