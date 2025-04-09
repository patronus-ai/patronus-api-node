// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
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
    query: TraceInsightJobListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightJobListResponse> {
    return this._client.get('/v1/trace-insight-jobs', { query, ...options });
  }
}

export interface TraceInsightJobCreateResponse {
  job_id: string;

  status: string;

  trace_id: string;
}

export interface TraceInsightJobListResponse {
  insights: Array<TraceInsightJobListResponse.Insight>;
}

export namespace TraceInsightJobListResponse {
  export interface Insight {
    job_id: string | null;

    status: string | null;

    trace_id: string;
  }
}

export interface TraceInsightJobCreateParams {
  trace_id: string;
}

export interface TraceInsightJobListParams {
  trace_id: string | null;
}

export declare namespace TraceInsightJobs {
  export {
    type TraceInsightJobCreateResponse as TraceInsightJobCreateResponse,
    type TraceInsightJobListResponse as TraceInsightJobListResponse,
    type TraceInsightJobCreateParams as TraceInsightJobCreateParams,
    type TraceInsightJobListParams as TraceInsightJobListParams,
  };
}
