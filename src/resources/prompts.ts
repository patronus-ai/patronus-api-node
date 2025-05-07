// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Prompts extends APIResource {
  /**
   * Create a new prompt.
   *
   * Creates the first version of a prompt in the specified project. Either
   * project_id or project_name must be provided in the request. Prompts are
   * versioned, with the first version starting at 1.
   *
   * To create additional versions of an existing prompt, use the Create Prompt
   * Revision endpoint.
   *
   * Naming recommendations: For organizing related prompts (e.g., system, user
   * prompts), we recommend following a convention:
   *
   * - `<name>/<role>[/<number>]`
   * - Examples: `"my-agent/system/1"`, `"my-agent/system/2"`, `"my-agent/user"`
   *
   * For simple templating needs, we recommend using Python format strings:
   *
   * - Example: `"You're an agent that is a specialist in {subject} subject"`
   * - Client usage: `prompt.body.format(subject="Astronomy")`
   */
  create(body: PromptCreateParams, options?: Core.RequestOptions): Core.APIPromise<PromptCreateResponse> {
    return this._client.post('/v1/prompts', { body, ...options });
  }

  /**
   * Update prompt metadata.
   *
   * Updates the name and/or description of a prompt. This affects all versions of
   * the prompt. Either project_id or project_name must be provided to identify the
   * project.
   *
   * Important: This endpoint does not update the prompt's body content. To create a
   * new version with updated content, use the Create Prompt Revision endpoint.
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
   * List prompts with optional filtering.
   *
   * Returns a list of prompt versions that match the provided filter criteria.
   * Either project_id or project_name must be provided, but not both. Results can be
   * further filtered by name, id, version, or label.
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
   * Create a new revision of an existing prompt.
   *
   * Creates a new version of the prompt with an updated body. The version number is
   * automatically incremented. Either project_id or project_name must be provided to
   * identify the project.
   *
   * Use this endpoint to update the content of an existing prompt rather than
   * creating a new prompt with the Create Prompt endpoint.
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
  /**
   * The prompt version data
   */
  prompt: PromptCreateResponse.Prompt;
}

export namespace PromptCreateResponse {
  /**
   * The prompt version data
   */
  export interface Prompt {
    id: string;

    /**
     * The actual content of the prompt
     */
    body: string;

    /**
     * Timestamp when this prompt version was created
     */
    created_at: string;

    /**
     * List of labels associated with this prompt version
     */
    labels: Array<string>;

    /**
     * Unique name for the prompt, used to group different versions
     */
    name: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Version number of the prompt, starting from 1
     */
    version: number;

    /**
     * Optional description of the prompt's purpose or usage
     */
    description?: string | null;
  }
}

export type PromptUpdateResponse = unknown;

/**
 * Response model containing a list of prompts.
 */
export interface PromptListResponse {
  /**
   * List of prompts matching the filter criteria
   */
  prompts: Array<PromptListResponse.Prompt>;
}

export namespace PromptListResponse {
  /**
   * Represents a specific version of a prompt.
   *
   * Each prompt is uniquely identified by its ID and belongs to a specific project.
   * Prompts with the same name are considered different versions of the same prompt.
   */
  export interface Prompt {
    id: string;

    /**
     * The actual content of the prompt
     */
    body: string;

    /**
     * Timestamp when this prompt version was created
     */
    created_at: string;

    /**
     * List of labels associated with this prompt version
     */
    labels: Array<string>;

    /**
     * Unique name for the prompt, used to group different versions
     */
    name: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Version number of the prompt, starting from 1
     */
    version: number;

    /**
     * Optional description of the prompt's purpose or usage
     */
    description?: string | null;
  }
}

export type PromptDeleteResponse = unknown;

export interface PromptCreateRevisionResponse {
  /**
   * The prompt version data
   */
  prompt: PromptCreateRevisionResponse.Prompt;
}

export namespace PromptCreateRevisionResponse {
  /**
   * The prompt version data
   */
  export interface Prompt {
    id: string;

    /**
     * The actual content of the prompt
     */
    body: string;

    /**
     * Timestamp when this prompt version was created
     */
    created_at: string;

    /**
     * List of labels associated with this prompt version
     */
    labels: Array<string>;

    /**
     * Unique name for the prompt, used to group different versions
     */
    name: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Version number of the prompt, starting from 1
     */
    version: number;

    /**
     * Optional description of the prompt's purpose or usage
     */
    description?: string | null;
  }
}

export interface PromptCreateParams {
  /**
   * Content of the prompt
   */
  body: string;

  /**
   * Name for the prompt, must contain only alphanumeric characters, hyphens, and
   * underscores
   */
  name: string;

  /**
   * Optional description of the prompt's purpose or usage
   */
  description?: string | null;

  /**
   * Optional labels to associate with this prompt version
   */
  labels?: Array<string>;

  /**
   * ID of the project to create the prompt in
   */
  project_id?: string | null;

  /**
   * Name of the project to create the prompt in
   */
  project_name?: string | null;
}

export interface PromptUpdateParams {
  /**
   * Query param: Project ID containing the prompt
   */
  project_id?: string | null;

  /**
   * Query param: Project name containing the prompt
   */
  project_name?: string | null;

  /**
   * Body param: New description for the prompt
   */
  description?: string | null;

  /**
   * Body param: New name for the prompt, must contain only alphanumeric characters,
   * hyphens, and underscores
   */
  body_name?: string | null;
}

export interface PromptListParams {
  /**
   * Filter prompts by specific UUID
   */
  id?: string | null;

  /**
   * Filter prompts by label
   */
  label?: string | null;

  /**
   * Filter prompts by name
   */
  name?: string | null;

  /**
   * Filter prompts by project ID
   */
  project_id?: string | null;

  /**
   * Filter prompts by project name
   */
  project_name?: string | null;

  /**
   * Filter prompts by version number
   */
  version?: number | null;
}

export interface PromptDeleteParams {
  /**
   * Project ID containing the prompt
   */
  project_id?: string | null;

  /**
   * Project name containing the prompt
   */
  project_name?: string | null;
}

export interface PromptCreateRevisionParams {
  /**
   * Body param: New content for the prompt revision
   */
  body: string;

  /**
   * Query param: Project ID containing the prompt
   */
  project_id?: string | null;

  /**
   * Query param: Project name containing the prompt
   */
  project_name?: string | null;
}

export interface PromptSetLabelsParams {
  /**
   * Body param: List of labels to set on the prompt version
   */
  labels: Array<string>;

  /**
   * Body param: The version number of the prompt to set labels on
   */
  version: number;

  /**
   * Query param: Project ID containing the prompt
   */
  project_id?: string | null;

  /**
   * Query param: Project name containing the prompt
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
