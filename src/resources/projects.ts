// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Projects extends APIResource {
  /**
   * Create Projects
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<Project> {
    return this._client.post('/v1/projects', { body, ...options });
  }

  /**
   * Get Project
   */
  retrieve(id: string, options?: Core.RequestOptions): Core.APIPromise<GetProjectResponse> {
    return this._client.get(`/v1/projects/${id}`, options);
  }

  /**
   * List Projects
   */
  list(query?: ProjectListParams, options?: Core.RequestOptions): Core.APIPromise<ListProjectsResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ListProjectsResponse>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ListProjectsResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/projects', { query, ...options });
  }

  /**
   * Delete Project
   */
  delete(id: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/v1/projects/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface GetProjectResponse {
  project: Project;
}

export interface ListProjectsResponse {
  projects: Array<Project>;
}

export interface Project {
  id: string;

  created_at: string;

  /**
   * @deprecated
   */
  created_by: string | null;

  name: string;
}

export interface ProjectCreateParams {
  name: string;
}

export interface ProjectListParams {
  limit?: number;

  offset?: number;
}

export declare namespace Projects {
  export {
    type GetProjectResponse as GetProjectResponse,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };
}
