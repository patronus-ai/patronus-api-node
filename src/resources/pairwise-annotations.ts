// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class PairwiseAnnotations extends APIResource {
  /**
   * Create Pairwise Annotation
   */
  create(
    body: PairwiseAnnotationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PairwiseAnnotationCreateResponse> {
    return this._client.post('/v1/pairwise-annotations', { body, ...options });
  }

  /**
   * List Pairwise Annotations
   */
  list(
    query?: PairwiseAnnotationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PairwiseAnnotationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PairwiseAnnotationListResponse>;
  list(
    query: PairwiseAnnotationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PairwiseAnnotationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/pairwise-annotations', { query, ...options });
  }

  /**
   * Delete Pairwise Annotation
   */
  delete(params: PairwiseAnnotationDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { log_a_id, log_b_id, name } = params;
    return this._client.delete('/v1/pairwise-annotations', {
      query: { log_a_id, log_b_id, name },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Get Batch Pairwise Annotations
   */
  getBatch(
    body: PairwiseAnnotationGetBatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PairwiseAnnotationGetBatchResponse> {
    return this._client.post('/v1/pairwise-annotations/get-batch', { body, ...options });
  }
}

export interface PairwiseAnnotation {
  created_at: string;

  log_a_id: string;

  log_a_score: number;

  log_b_id: string;

  log_b_score: number;

  name: string;
}

export interface PairwiseAnnotationCreateResponse {
  pairwise_annotation: PairwiseAnnotation;
}

export interface PairwiseAnnotationListResponse {
  pairwise_annotations: Array<PairwiseAnnotation>;
}

export interface PairwiseAnnotationGetBatchResponse {
  pairwise_annotations: Array<PairwiseAnnotation | null>;
}

export interface PairwiseAnnotationCreateParams {
  log_a_id: string;

  log_a_score: number;

  log_b_id: string;

  log_b_score: number;

  name: string;
}

export interface PairwiseAnnotationListParams {
  experiment_id?: Array<number> | null;

  limit?: number;

  log_id?: string | null;

  name?: string | null;

  offset?: number;

  project_id?: Array<string> | null;
}

export interface PairwiseAnnotationDeleteParams {
  log_a_id: string;

  log_b_id: string;

  name: string;
}

export interface PairwiseAnnotationGetBatchParams {
  pairwise_annotations: Array<PairwiseAnnotationGetBatchParams.PairwiseAnnotation>;
}

export namespace PairwiseAnnotationGetBatchParams {
  export interface PairwiseAnnotation {
    log_a_id: string;

    log_b_id: string;

    name: string;
  }
}

export declare namespace PairwiseAnnotations {
  export {
    type PairwiseAnnotation as PairwiseAnnotation,
    type PairwiseAnnotationCreateResponse as PairwiseAnnotationCreateResponse,
    type PairwiseAnnotationListResponse as PairwiseAnnotationListResponse,
    type PairwiseAnnotationGetBatchResponse as PairwiseAnnotationGetBatchResponse,
    type PairwiseAnnotationCreateParams as PairwiseAnnotationCreateParams,
    type PairwiseAnnotationListParams as PairwiseAnnotationListParams,
    type PairwiseAnnotationDeleteParams as PairwiseAnnotationDeleteParams,
    type PairwiseAnnotationGetBatchParams as PairwiseAnnotationGetBatchParams,
  };
}
