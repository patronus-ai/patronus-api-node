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
  evaluation: unknown;
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
