// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class EvaluatorProfiles extends APIResource {
  /**
   * Create Evaluator Profile
   */
  create(
    body: EvaluatorProfileCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateEvaluatorProfileResponse> {
    return this._client.post('/v1/evaluator-profiles', { body, ...options });
  }

  /**
   * List Evaluator Profiles
   */
  list(
    query?: EvaluatorProfileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEvaluatorProfilesResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListEvaluatorProfilesResponse>;
  list(
    query: EvaluatorProfileListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListEvaluatorProfilesResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/evaluator-profiles', { query, ...options });
  }

  /**
   * Archive Evaluator Profile
   */
  archive(publicId: string, options?: Core.RequestOptions): Core.APIPromise<ArchiveEvaluatorProfileResponse> {
    return this._client.patch(`/v1/evaluator-profiles/${publicId}/archive`, options);
  }

  /**
   * Add Evaluator Profile Revision
   */
  revision(
    publicId: string,
    body: EvaluatorProfileRevisionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddEvaluatorProfileRevision> {
    return this._client.post(`/v1/evaluator-profiles/${publicId}/revision`, { body, ...options });
  }
}

export interface AddEvaluatorProfileRevision {
  evaluator_profile: AddEvaluatorProfileRevision.EvaluatorProfile | null;
}

export namespace AddEvaluatorProfileRevision {
  export interface EvaluatorProfile {
    config: unknown | null;

    created_at: string;

    evaluator_family: string | null;

    is_patronus_managed: boolean;

    name: string | null;

    public_id: string;

    revision: number;

    description?: string | null;
  }
}

export interface ArchiveEvaluatorProfileResponse {
  evaluator_profiles: Array<ArchiveEvaluatorProfileResponse.EvaluatorProfile>;
}

export namespace ArchiveEvaluatorProfileResponse {
  export interface EvaluatorProfile {
    config: unknown | null;

    created_at: string;

    evaluator_family: string | null;

    is_patronus_managed: boolean;

    name: string | null;

    public_id: string;

    revision: number;

    description?: string | null;
  }
}

export interface CreateEvaluatorProfileResponse {
  evaluator_profile: CreateEvaluatorProfileResponse.EvaluatorProfile | null;
}

export namespace CreateEvaluatorProfileResponse {
  export interface EvaluatorProfile {
    config: unknown | null;

    created_at: string;

    evaluator_family: string | null;

    is_patronus_managed: boolean;

    name: string | null;

    public_id: string;

    revision: number;

    description?: string | null;
  }
}

export interface ListEvaluatorProfilesResponse {
  evaluator_profiles: Array<ListEvaluatorProfilesResponse.EvaluatorProfile>;
}

export namespace ListEvaluatorProfilesResponse {
  export interface EvaluatorProfile {
    config: unknown | null;

    created_at: string;

    evaluator_family: string | null;

    is_patronus_managed: boolean;

    name: string | null;

    public_id: string;

    revision: number;

    description?: string | null;
  }
}

export interface EvaluatorProfileCreateParams {
  config: unknown;

  evaluator_family: string;

  name: string;

  description?: string | null;
}

export interface EvaluatorProfileListParams {
  enabled?: boolean | null;

  evaluator_family?: string | null;

  get_last_revision?: boolean;

  is_patronus_managed?: boolean | null;

  limit?: number;

  name?: string | null;

  offset?: number;

  public_id?: string | null;

  revision?: number | null;
}

export interface EvaluatorProfileRevisionParams {
  config: unknown;

  description?: string | null;
}

export declare namespace EvaluatorProfiles {
  export {
    type AddEvaluatorProfileRevision as AddEvaluatorProfileRevision,
    type ArchiveEvaluatorProfileResponse as ArchiveEvaluatorProfileResponse,
    type CreateEvaluatorProfileResponse as CreateEvaluatorProfileResponse,
    type ListEvaluatorProfilesResponse as ListEvaluatorProfilesResponse,
    type EvaluatorProfileCreateParams as EvaluatorProfileCreateParams,
    type EvaluatorProfileListParams as EvaluatorProfileListParams,
    type EvaluatorProfileRevisionParams as EvaluatorProfileRevisionParams,
  };
}
