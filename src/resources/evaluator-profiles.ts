// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class EvaluatorProfiles extends APIResource {}

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

export declare namespace EvaluatorProfiles {
  export {
    type AddEvaluatorProfileRevision as AddEvaluatorProfileRevision,
    type ArchiveEvaluatorProfileResponse as ArchiveEvaluatorProfileResponse,
    type CreateEvaluatorProfileResponse as CreateEvaluatorProfileResponse,
    type ListEvaluatorProfilesResponse as ListEvaluatorProfilesResponse,
  };
}
