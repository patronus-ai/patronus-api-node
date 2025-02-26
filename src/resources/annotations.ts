// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Annotations extends APIResource {
  /**
   * Annotate
   */
  annotate(body: AnnotationAnnotateParams, options?: Core.RequestOptions): Core.APIPromise<AnnotateResponse> {
    return this._client.post('/v1/annotate', { body, ...options });
  }
}

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

export interface AnnotationAnnotateParams {
  annotation_criteria_id: string;

  log_id: string;

  explanation?: string | null;

  value_pass?: boolean | null;

  value_score?: number | null;

  value_text?: string | null;
}

export declare namespace Annotations {
  export {
    type AnnotateResponse as AnnotateResponse,
    type AnnotationAnnotateParams as AnnotationAnnotateParams,
  };
}
