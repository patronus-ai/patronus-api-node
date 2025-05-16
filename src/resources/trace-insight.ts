// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class TraceInsight extends APIResource {
  /**
   * List Insights
   */
  list(
    query?: TraceInsightListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TraceInsightListResponse>;
  list(
    query: TraceInsightListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/trace-insight', { query, ...options });
  }

  /**
   * Create Insight Job
   */
  createJob(
    body: TraceInsightCreateJobParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightCreateJobResponse> {
    return this._client.post('/v1/trace-insight-jobs', { body, ...options });
  }

  /**
   * List Insight Jobs
   */
  listJobs(
    query?: TraceInsightListJobsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightListJobsResponse>;
  listJobs(options?: Core.RequestOptions): Core.APIPromise<TraceInsightListJobsResponse>;
  listJobs(
    query: TraceInsightListJobsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightListJobsResponse> {
    if (isRequestOptions(query)) {
      return this.listJobs({}, query);
    }
    return this._client.get('/v1/trace-insight-jobs', { query, ...options });
  }
}

export interface TraceInsightListResponse {
  trace_insights: Array<TraceInsightListResponse.TraceInsight>;
}

export namespace TraceInsightListResponse {
  export interface TraceInsight {
    app: string | null;

    created_at: string;

    error_message: string | null;

    experiment_id: string | null;

    insights: TraceInsight.Insights | null;

    job_id: string;

    processing_status: 'pending' | 'success' | 'failed' | 'cancelled';

    project_id: string;

    trace_id: string;
  }

  export namespace TraceInsight {
    export interface Insights {
      input_analysis: string | null;

      output_analysis: Insights.OutputAnalysis | null;
    }

    export namespace Insights {
      export interface OutputAnalysis {
        error_classification: Array<OutputAnalysis.ErrorClassification> | null;

        overall_evaluation_analysis: string | null;

        performance_metrics: OutputAnalysis.PerformanceMetrics | null;

        span_error_rate: string | null;
      }

      export namespace OutputAnalysis {
        export interface ErrorClassification {
          description: string | null;

          evidence: string | null;

          explanation: string | null;

          immediate_fix: string | null;

          impact_details: string | null;

          impact_level: 'LOW' | 'MEDIUM' | 'MEDIUM-HIGH' | 'HIGH' | 'UNKNOWN' | 'NONE' | null;

          spans: Array<string> | null;

          suggested_prompt_fix: string | null;

          type: string;
        }

        export interface PerformanceMetrics {
          aggregate_scores?: PerformanceMetrics.AggregateScores | null;
        }

        export namespace PerformanceMetrics {
          export interface AggregateScores {
            instruction_adherence_score?: string | null;

            overall_score?: string | null;

            plan_optimality_score?: string | null;

            reliability_score?: string | null;

            security_score?: string | null;
          }
        }
      }
    }
  }
}

export interface TraceInsightCreateJobResponse {
  job_id: string;

  status: string;

  trace_id: string;
}

export interface TraceInsightListJobsResponse {
  insight_jobs: Array<TraceInsightListJobsResponse.InsightJob>;
}

export namespace TraceInsightListJobsResponse {
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

export interface TraceInsightListParams {
  app?: string | null;

  experiment_id?: string | null;

  job_id?: string | null;

  limit?: number;

  offset?: number;

  project_id?: string | null;

  trace_id?: string | null;
}

export interface TraceInsightCreateJobParams {
  trace_id: string;
}

export interface TraceInsightListJobsParams {
  app?: string | null;

  experiment_id?: string | null;

  job_id?: string | null;

  job_status?: 'pending' | 'success' | 'failed' | 'cancelled' | null;

  limit?: number;

  offset?: number;

  project_id?: string | null;

  trace_id?: string | null;
}

export declare namespace TraceInsight {
  export {
    type TraceInsightListResponse as TraceInsightListResponse,
    type TraceInsightCreateJobResponse as TraceInsightCreateJobResponse,
    type TraceInsightListJobsResponse as TraceInsightListJobsResponse,
    type TraceInsightListParams as TraceInsightListParams,
    type TraceInsightCreateJobParams as TraceInsightCreateJobParams,
    type TraceInsightListJobsParams as TraceInsightListJobsParams,
  };
}
