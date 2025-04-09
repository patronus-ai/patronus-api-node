// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Prompts extends APIResource {
  /**
   * Create Prompt
   */
  create(body: PromptCreateParams, options?: Core.RequestOptions): Core.APIPromise<PromptCreateResponse> {
    return this._client.post('/v1/prompts', { body, ...options });
  }

  /**
   * Update Prompt
   */
  update(
    pathName: string,
    params: PromptUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { project_id, project_name, ...body } = params;
    return this._client.patch(`/v1/prompts/${pathName}`, {
      query: { project_id, project_name },
      body,
      ...options,
    });
  }

  /**
   * List Prompts
   */
  list(query?: PromptListParams, options?: Core.RequestOptions): Core.APIPromise<PromptListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PromptListResponse>;
  list(
    query: PromptListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/prompts', { query, ...options });
  }

  /**
   * Delete Prompt
   */
  delete(name: string, params?: PromptDeleteParams, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(name: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  delete(
    name: string,
    params: PromptDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(params)) {
      return this.delete(name, {}, params);
    }
    const { project_id, project_name } = params;
    return this._client.delete(`/v1/prompts/${name}`, { query: { project_id, project_name }, ...options });
  }

  /**
   * Create Prompt Revision
   */
  createRevision(
    name: string,
    params: PromptCreateRevisionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptCreateRevisionResponse> {
    const { project_id, project_name, ...body } = params;
    return this._client.post(`/v1/prompts/${name}/revision`, {
      query: { project_id, project_name },
      body,
      ...options,
    });
  }

  /**
   * Set Labels
   */
  setLabels(
    name: string,
    params: PromptSetLabelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { project_id, project_name, ...body } = params;
    return this._client.post(`/v1/prompts/${name}/set-labels`, {
      query: { project_id, project_name },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface PromptCreateResponse {
  prompt: PromptCreateResponse.Prompt;
}

export namespace PromptCreateResponse {
  export interface Prompt {
    id: string;

    account_id: string;

    body: string;

    created_at: string;

    labels: Array<string>;

    name: string;

    project_id: string;

    version: number;

    description?: string | null;
  }
}

export type PromptUpdateResponse = unknown;

export interface PromptListResponse {
  prompts: Array<PromptListResponse.Prompt>;
}

export namespace PromptListResponse {
  export interface Prompt {
    id: string;

    account_id: string;

    body: string;

    created_at: string;

    labels: Array<string>;

    name: string;

    project_id: string;

    version: number;

    description?: string | null;
  }
}

export type PromptDeleteResponse = unknown;

export interface PromptCreateRevisionResponse {
  prompt: PromptCreateRevisionResponse.Prompt;
}

export namespace PromptCreateRevisionResponse {
  export interface Prompt {
    id: string;

    account_id: string;

    body: string;

    created_at: string;

    labels: Array<string>;

    name: string;

    project_id: string;

    version: number;

    description?: string | null;
  }
}

export interface PromptCreateParams {
  body: string;

  name: string;

  description?: string | null;

  labels?: Array<string>;

  project_id?: string | null;

  project_name?: string | null;
}

export interface PromptUpdateParams {
  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Query param:
   */
  project_name?: string | null;

  /**
   * Body param:
   */
  description?: string | null;

  /**
   * Body param:
   */
  body_name?: string | null;
}

export interface PromptListParams {
  id?: string | null;

  label?: string | null;

  name?: string | null;

  project_id?: string | null;

  project_name?: string | null;

  version?: number | null;
}

export interface PromptDeleteParams {
  project_id?: string | null;

  project_name?: string | null;
}

export interface PromptCreateRevisionParams {
  /**
   * Body param:
   */
  body: string;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Query param:
   */
  project_name?: string | null;
}

export interface PromptSetLabelsParams {
  /**
   * Body param:
   */
  labels: Array<string>;

  /**
   * Body param:
   */
  version: number;

  /**
   * Query param:
   */
  project_id?: string | null;

  /**
   * Query param:
   */
  project_name?: string | null;
}

export declare namespace Prompts {
  export {
    type PromptCreateResponse as PromptCreateResponse,
    type PromptUpdateResponse as PromptUpdateResponse,
    type PromptListResponse as PromptListResponse,
    type PromptDeleteResponse as PromptDeleteResponse,
    type PromptCreateRevisionResponse as PromptCreateRevisionResponse,
    type PromptCreateParams as PromptCreateParams,
    type PromptUpdateParams as PromptUpdateParams,
    type PromptListParams as PromptListParams,
    type PromptDeleteParams as PromptDeleteParams,
    type PromptCreateRevisionParams as PromptCreateRevisionParams,
    type PromptSetLabelsParams as PromptSetLabelsParams,
  };
}
