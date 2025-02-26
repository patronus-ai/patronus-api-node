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
  ): Core.APIPromise<CreateAnnotationCriteriaResponse> {
    return this._client.post('/v1/annotation-criteria', { body, ...options });
  }

  /**
   * Get Annotation Criteria
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<GetAnnotationCriteriaResponse> {
    return this._client.get(`/v1/annotation-criteria/${id}`, options);
  }

  /**
   * Update Annotation Criteria
   */
  update(
    id: string,
    body: AnnotationCriterionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UpdateAnnotationCriteriaResponse> {
    return this._client.put(`/v1/annotation-criteria/${id}`, { body, ...options });
  }

  /**
   * List Annotation Criteria
   */
  list(
    query?: AnnotationCriterionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListAnnotationCriteriaResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListAnnotationCriteriaResponse>;
  list(
    query: AnnotationCriterionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListAnnotationCriteriaResponse> {
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

export interface CreateAnnotationCriteriaResponse {
  annotation_criteria: CreateAnnotationCriteriaResponse.AnnotationCriteria;
}

export namespace CreateAnnotationCriteriaResponse {
  export interface AnnotationCriteria {
    id: string;

    annotation_type: string;

    categories: Array<AnnotationCriteria.Category> | null;

    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string;
  }

  export namespace AnnotationCriteria {
    export interface Category {
      label?: string | null;

      score?: number | null;
    }
  }
}

export interface GetAnnotationCriteriaResponse {
  annotation_criteria: GetAnnotationCriteriaResponse.AnnotationCriteria;
}

export namespace GetAnnotationCriteriaResponse {
  export interface AnnotationCriteria {
    id: string;

    annotation_type: string;

    categories: Array<AnnotationCriteria.Category> | null;

    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string;
  }

  export namespace AnnotationCriteria {
    export interface Category {
      label?: string | null;

      score?: number | null;
    }
  }
}

export interface ListAnnotationCriteriaResponse {
  annotation_criteria: Array<ListAnnotationCriteriaResponse.AnnotationCriterion>;
}

export namespace ListAnnotationCriteriaResponse {
  export interface AnnotationCriterion {
    id: string;

    annotation_type: string;

    categories: Array<AnnotationCriterion.Category> | null;

    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string;
  }

  export namespace AnnotationCriterion {
    export interface Category {
      label?: string | null;

      score?: number | null;
    }
  }
}

export interface UpdateAnnotationCriteriaResponse {
  annotation_criteria: UpdateAnnotationCriteriaResponse.AnnotationCriteria;
}

export namespace UpdateAnnotationCriteriaResponse {
  export interface AnnotationCriteria {
    id: string;

    annotation_type: string;

    categories: Array<AnnotationCriteria.Category> | null;

    created_at: string;

    description: string | null;

    name: string;

    project_id: string;

    updated_at: string;
  }

  export namespace AnnotationCriteria {
    export interface Category {
      label?: string | null;

      score?: number | null;
    }
  }
}

export interface AnnotationCriterionCreateParams {
  annotation_type: 'binary' | 'continuous' | 'discrete' | 'categorical' | 'text_annotation';

  name: string;

  project_id: string;

  categories?: Array<AnnotationCriterionCreateParams.Category> | null;

  description?: string | null;
}

export namespace AnnotationCriterionCreateParams {
  export interface Category {
    label?: string | null;

    score?: number | null;
  }
}

export interface AnnotationCriterionUpdateParams {
  annotation_type: 'binary' | 'continuous' | 'discrete' | 'categorical' | 'text_annotation';

  name: string;

  categories?: Array<AnnotationCriterionUpdateParams.Category> | null;

  description?: string | null;
}

export namespace AnnotationCriterionUpdateParams {
  export interface Category {
    label?: string | null;

    score?: number | null;
  }
}

export interface AnnotationCriterionListParams {
  limit?: number;

  offset?: number;

  project_id?: string | null;
}

export declare namespace AnnotationCriteria {
  export {
    type CreateAnnotationCriteriaResponse as CreateAnnotationCriteriaResponse,
    type GetAnnotationCriteriaResponse as GetAnnotationCriteriaResponse,
    type ListAnnotationCriteriaResponse as ListAnnotationCriteriaResponse,
    type UpdateAnnotationCriteriaResponse as UpdateAnnotationCriteriaResponse,
    type AnnotationCriterionCreateParams as AnnotationCriterionCreateParams,
    type AnnotationCriterionUpdateParams as AnnotationCriterionUpdateParams,
    type AnnotationCriterionListParams as AnnotationCriterionListParams,
  };
}
