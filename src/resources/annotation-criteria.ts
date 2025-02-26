// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class AnnotationCriteria extends APIResource {
  /**
   * Create Annotation Criteria
   */
  create(
    body: AnnotationCriterionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnnotationCriterionCreateResponse> {
    return this._client.post('/v1/annotation-criteria', { body, ...options });
  }

  /**
   * Get Annotation Criteria
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<AnnotationCriterionRetrieveResponse> {
    return this._client.get(`/v1/annotation-criteria/${id}`, options);
  }

  /**
   * Update Annotation Criteria
   */
  update(
    id: string,
    body: AnnotationCriterionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnnotationCriterionUpdateResponse> {
    return this._client.put(`/v1/annotation-criteria/${id}`, { body, ...options });
  }

  /**
   * List Annotation Criteria
   */
  list(
    query?: AnnotationCriterionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnnotationCriterionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AnnotationCriterionListResponse>;
  list(
    query: AnnotationCriterionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnnotationCriterionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/annotation-criteria', { query, ...options });
  }

  /**
   * Delete Annotation Criteria
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/annotation-criteria/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AnnotationCategory {
  label?: string | null;

  score?: number | null;
}

export interface AnnotationCriteria {
  id: string;

  annotation_type: string;

  categories: Array<AnnotationCategory> | null;

  created_at: string;

  description: string | null;

  name: string;

  project_id: string;

  updated_at: string;
}

export type AnnotationType = 'binary' | 'continuous' | 'discrete' | 'categorical' | 'text_annotation';

export interface AnnotationCriterionCreateResponse {
  annotation_criteria: AnnotationCriteria;
}

export interface AnnotationCriterionRetrieveResponse {
  annotation_criteria: AnnotationCriteria;
}

export interface AnnotationCriterionUpdateResponse {
  annotation_criteria: AnnotationCriteria;
}

export interface AnnotationCriterionListResponse {
  annotation_criteria: Array<AnnotationCriteria>;
}

export interface AnnotationCriterionCreateParams {
  annotation_type: AnnotationType;

  name: string;

  project_id: string;

  categories?: Array<AnnotationCategory> | null;

  description?: string | null;
}

export interface AnnotationCriterionUpdateParams {
  annotation_type: AnnotationType;

  name: string;

  categories?: Array<AnnotationCategory> | null;

  description?: string | null;
}

export interface AnnotationCriterionListParams {
  limit?: number;

  offset?: number;

  project_id?: string | null;
}

export declare namespace AnnotationCriteria {
  export {
    type AnnotationCategory as AnnotationCategory,
    type AnnotationCriteria as AnnotationCriteria,
    type AnnotationType as AnnotationType,
    type AnnotationCriterionCreateResponse as AnnotationCriterionCreateResponse,
    type AnnotationCriterionRetrieveResponse as AnnotationCriterionRetrieveResponse,
    type AnnotationCriterionUpdateResponse as AnnotationCriterionUpdateResponse,
    type AnnotationCriterionListResponse as AnnotationCriterionListResponse,
    type AnnotationCriterionCreateParams as AnnotationCriterionCreateParams,
    type AnnotationCriterionUpdateParams as AnnotationCriterionUpdateParams,
    type AnnotationCriterionListParams as AnnotationCriterionListParams,
  };
}
