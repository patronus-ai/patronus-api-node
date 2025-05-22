// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Prompts extends APIResource {
  /**
   * Create a new prompt revision.
   *
   * If prompt_id is provided, creates a new revision of an existing prompt
   * definition. If prompt_id is not provided but prompt_name is, creates a new
   * prompt definition with its first revision.
   *
   * Either project_id or project_name must be provided. If project_name is provided
   * and doesn't exist, a new project will be created.
   *
   * Returns the newly created prompt revision.
   */
  createRevision(
    body: PromptCreateRevisionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptCreateRevisionResponse> {
    return this._client.post('/v1/prompt-revisions', { body, ...options });
  }

  /**
   * Delete prompt definitions with either a specific ID or all for a project.
   *
   * Either prompt_id or project_id must be provided. If prompt_id is provided,
   * deletes only that prompt definition. If project_id is provided, deletes all
   * prompt definitions for that project. Returns 204 No Content on success.
   */
  deleteDefinitions(
    params?: PromptDeleteDefinitionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  deleteDefinitions(options?: Core.RequestOptions): Core.APIPromise<void>;
  deleteDefinitions(
    params: PromptDeleteDefinitionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.deleteDefinitions({}, params);
    }
    const { project_id, prompt_id } = params;
    return this._client.delete('/v1/prompt-definitions', {
      query: { project_id, prompt_id },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * List prompt definitions with optional filtering.
   *
   * Returns prompt definitions with their latest revision number. If no filters are
   * provided, returns all prompt definitions for the account (up to limit).
   */
  listDefinitions(
    query?: PromptListDefinitionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListDefinitionsResponse>;
  listDefinitions(options?: Core.RequestOptions): Core.APIPromise<PromptListDefinitionsResponse>;
  listDefinitions(
    query: PromptListDefinitionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListDefinitionsResponse> {
    if (isRequestOptions(query)) {
      return this.listDefinitions({}, query);
    }
    return this._client.get('/v1/prompt-definitions', { query, ...options });
  }

  /**
   * List prompt revisions with optional filtering.
   *
   * Returns prompt revisions matching the criteria. If project_name is provided, it
   * resolves to project_id. If no filters are provided, returns all prompt revisions
   * for the account.
   */
  listRevisions(
    query?: PromptListRevisionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListRevisionsResponse>;
  listRevisions(options?: Core.RequestOptions): Core.APIPromise<PromptListRevisionsResponse>;
  listRevisions(
    query: PromptListRevisionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptListRevisionsResponse> {
    if (isRequestOptions(query)) {
      return this.listRevisions({}, query);
    }
    return this._client.get('/v1/prompt-revisions', { query, ...options });
  }

  /**
   * Remove labels from a prompt revision.
   *
   * Returns 204 No Content on success.
   */
  removeLabels(
    revisionId: string,
    body: PromptRemoveLabelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/prompt-revisions/${revisionId}/remove-labels`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Add labels to a prompt revision.
   *
   * Removes these labels from other revisions and adds them to the specified
   * revision. Returns 204 No Content on success.
   */
  setLabels(
    revisionId: string,
    body: PromptSetLabelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    return this._client.post(`/v1/prompt-revisions/${revisionId}/set-labels`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Update a prompt definition's name or description.
   *
   * Only updates fields that are provided (not null). Returns the updated prompt
   * definition.
   */
  updateDefinition(
    promptId: string,
    body: PromptUpdateDefinitionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PromptUpdateDefinitionResponse> {
    return this._client.patch(`/v1/prompt-definitions/${promptId}`, { body, ...options });
  }
}

/**
 * Response model for creating a prompt revision.
 */
export interface PromptCreateRevisionResponse {
  /**
   * Represents a specific revision of a prompt.
   */
  prompt_revision: PromptCreateRevisionResponse.PromptRevision;
}

export namespace PromptCreateRevisionResponse {
  /**
   * Represents a specific revision of a prompt.
   */
  export interface PromptRevision {
    /**
     * Unique identifier for this specific prompt revision
     */
    id: string;

    /**
     * The actual content/text of the prompt - immutable for a specific revision
     */
    body: string;

    /**
     * Timestamp when this revision was created
     */
    created_at: string;

    /**
     * List of tags/labels associated with this specific revision
     */
    labels: Array<string>;

    /**
     * SHA-256 hash of the prompt body with whitespace stripped from start and end
     */
    normalized_body_sha256: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Name of the project this prompt belongs to
     */
    project_name: string;

    /**
     * Identifier of the prompt definition this revision belongs to
     */
    prompt_definition_id: string;

    /**
     * Name of the prompt definition this revision belongs to
     */
    prompt_definition_name: string;

    /**
     * Sequential revision number, starting from 1 for the first version
     */
    revision: number;

    /**
     * Optional JSON metadata associated with this revision
     */
    metadata?: unknown | null;
  }
}

/**
 * Response model for listing prompt definitions.
 */
export interface PromptListDefinitionsResponse {
  prompt_definitions: Array<PromptListDefinitionsResponse.PromptDefinition>;
}

export namespace PromptListDefinitionsResponse {
  /**
   * Represents a prompt definition with basic information.
   */
  export interface PromptDefinition {
    /**
     * Unique identifier for the prompt definition
     */
    id: string;

    /**
     * Timestamp when the prompt definition was created
     */
    created_at: string;

    /**
     * Name of the prompt definition
     */
    name: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Name of the project this prompt belongs to
     */
    project_name: string;

    /**
     * Timestamp when the prompt definition was last updated
     */
    updated_at: string;

    /**
     * Optional description of the prompt's purpose or contents
     */
    description?: string | null;

    /**
     * Latest revision number, if available
     */
    latest_revision?: number | null;
  }
}

/**
 * Response model for listing prompt revisions.
 */
export interface PromptListRevisionsResponse {
  prompt_revisions: Array<PromptListRevisionsResponse.PromptRevision>;
}

export namespace PromptListRevisionsResponse {
  /**
   * Represents a specific revision of a prompt.
   */
  export interface PromptRevision {
    /**
     * Unique identifier for this specific prompt revision
     */
    id: string;

    /**
     * The actual content/text of the prompt - immutable for a specific revision
     */
    body: string;

    /**
     * Timestamp when this revision was created
     */
    created_at: string;

    /**
     * List of tags/labels associated with this specific revision
     */
    labels: Array<string>;

    /**
     * SHA-256 hash of the prompt body with whitespace stripped from start and end
     */
    normalized_body_sha256: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Name of the project this prompt belongs to
     */
    project_name: string;

    /**
     * Identifier of the prompt definition this revision belongs to
     */
    prompt_definition_id: string;

    /**
     * Name of the prompt definition this revision belongs to
     */
    prompt_definition_name: string;

    /**
     * Sequential revision number, starting from 1 for the first version
     */
    revision: number;

    /**
     * Optional JSON metadata associated with this revision
     */
    metadata?: unknown | null;
  }
}

/**
 * Response model for a single prompt definition.
 */
export interface PromptUpdateDefinitionResponse {
  /**
   * Represents a prompt definition with basic information.
   */
  prompt_definition: PromptUpdateDefinitionResponse.PromptDefinition;
}

export namespace PromptUpdateDefinitionResponse {
  /**
   * Represents a prompt definition with basic information.
   */
  export interface PromptDefinition {
    /**
     * Unique identifier for the prompt definition
     */
    id: string;

    /**
     * Timestamp when the prompt definition was created
     */
    created_at: string;

    /**
     * Name of the prompt definition
     */
    name: string;

    /**
     * ID of the project this prompt belongs to
     */
    project_id: string;

    /**
     * Name of the project this prompt belongs to
     */
    project_name: string;

    /**
     * Timestamp when the prompt definition was last updated
     */
    updated_at: string;

    /**
     * Optional description of the prompt's purpose or contents
     */
    description?: string | null;

    /**
     * Latest revision number, if available
     */
    latest_revision?: number | null;
  }
}

export interface PromptCreateRevisionParams {
  body: string;

  /**
   * If true, creation will fail if a prompt with the same name already exists in the
   * project. Only applies when creating a new prompt (not providing prompt_id).
   */
  create_only_if_not_exists?: boolean;

  /**
   * Optional JSON metadata to associate with this revision
   */
  metadata?: unknown | null;

  project_id?: string | null;

  project_name?: string | null;

  prompt_description?: string | null;

  prompt_id?: string | null;

  prompt_name?: string | null;
}

export interface PromptDeleteDefinitionsParams {
  /**
   * Delete all prompt definitions for this project
   */
  project_id?: string | null;

  /**
   * Delete a specific prompt definition by ID
   */
  prompt_id?: string | null;
}

export interface PromptListDefinitionsParams {
  /**
   * Maximum number of records to return
   */
  limit?: number;

  /**
   * Filter by exact prompt definition name
   */
  name?: string | null;

  /**
   * Filter by prompt definition name prefix
   */
  name_startswith?: string | null;

  /**
   * Number of records to skip
   */
  offset?: number;

  /**
   * Filter by project ID
   */
  project_id?: string | null;

  /**
   * Filter by project name
   */
  project_name?: string | null;

  /**
   * Filter by specific prompt definition ID
   */
  prompt_id?: string | null;
}

export interface PromptListRevisionsParams {
  /**
   * Filter by revisions that have this label
   */
  label?: string | null;

  /**
   * Only return the latest revision for each prompt
   */
  latest_revision_only?: boolean;

  /**
   * Maximum number of records to return
   */
  limit?: number;

  /**
   * Filter by SHA-256 hash prefix of prompt body with whitespace stripped from start
   * and end
   */
  normalized_body_sha256?: string | null;

  /**
   * Number of records to skip
   */
  offset?: number;

  /**
   * Filter by project ID
   */
  project_id?: string | null;

  /**
   * Filter by project name
   */
  project_name?: string | null;

  /**
   * Filter by prompt definition ID
   */
  prompt_id?: string | null;

  /**
   * Filter by prompt definition name
   */
  prompt_name?: string | null;

  /**
   * Filter by prompt definition name prefix
   */
  prompt_name_startswith?: string | null;

  /**
   * Filter by revision number
   */
  revision?: number | null;

  /**
   * Filter by specific revision ID
   */
  revision_id?: string | null;
}

export interface PromptRemoveLabelsParams {
  labels: Array<string>;
}

export interface PromptSetLabelsParams {
  labels: Array<string>;
}

export interface PromptUpdateDefinitionParams {
  description?: string | null;

  name?: string | null;
}

export declare namespace Prompts {
  export {
    type PromptCreateRevisionResponse as PromptCreateRevisionResponse,
    type PromptListDefinitionsResponse as PromptListDefinitionsResponse,
    type PromptListRevisionsResponse as PromptListRevisionsResponse,
    type PromptUpdateDefinitionResponse as PromptUpdateDefinitionResponse,
    type PromptCreateRevisionParams as PromptCreateRevisionParams,
    type PromptDeleteDefinitionsParams as PromptDeleteDefinitionsParams,
    type PromptListDefinitionsParams as PromptListDefinitionsParams,
    type PromptListRevisionsParams as PromptListRevisionsParams,
    type PromptRemoveLabelsParams as PromptRemoveLabelsParams,
    type PromptSetLabelsParams as PromptSetLabelsParams,
    type PromptUpdateDefinitionParams as PromptUpdateDefinitionParams,
  };
}
