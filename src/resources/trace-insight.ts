// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class TraceInsight extends APIResource {
  /**
   * List Insights
   */
  list(
    query: TraceInsightListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceInsightListResponse> {
    return this._client.get('/v1/trace-insight', { query, ...options });
  }
}

export interface TraceInsightListResponse {
  trace_insights: Array<TraceInsightListResponse.TraceInsight>;
}

export namespace TraceInsightListResponse {
  export interface TraceInsight {
    account_id: string;

    error_message: string | null;

    insights: Array<TraceInsight.Insight>;

    job_id: string;

    processing_status: string;

    trace_id: string;
  }

  export namespace TraceInsight {
    export interface Insight {
      input_analysis: string;

      output_analysis: Insight.OutputAnalysis;
    }

    export namespace Insight {
      export interface OutputAnalysis {
        error_classification: Array<OutputAnalysis.ErrorClassification>;

        overall_evaluation_analysis: string;

        performance_metrics: OutputAnalysis.PerformanceMetrics;

        span_error_rate: string;
      }

      export namespace OutputAnalysis {
        export interface ErrorClassification {
          description: string | null;

          evidence: string | null;

          explanation: string | null;

          immediate_fix: string | null;

          impact_details: string | null;

          impact_level: 'LOW' | 'MEDIUM' | 'MEDIUM-HIGH' | 'HIGH' | 'UNKNOWN' | null;

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

export interface TraceInsightListParams {
  trace_id: string | null;
}

export declare namespace TraceInsight {
  export {
    type TraceInsightListResponse as TraceInsightListResponse,
    type TraceInsightListParams as TraceInsightListParams,
  };
}
