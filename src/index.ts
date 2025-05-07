// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { AppListParams, AppListResponse, Apps } from './resources/apps';
import {
  EvaluationBatchCreateParams,
  EvaluationBatchCreateResponse,
  EvaluationEvaluateParams,
  EvaluationEvaluateResponse,
  EvaluationRetrieveResponse,
  EvaluationSearchParams,
  EvaluationSearchResponse,
  Evaluations,
} from './resources/evaluations';
import {
  EvaluatorCriteria,
  EvaluatorCriterionAddRevisionParams,
  EvaluatorCriterionAddRevisionResponse,
  EvaluatorCriterionArchiveResponse,
  EvaluatorCriterionCreateParams,
  EvaluatorCriterionCreateResponse,
  EvaluatorCriterionListParams,
  EvaluatorCriterionListResponse,
} from './resources/evaluator-criteria';
import { EvaluatorListFamiliesResponse, EvaluatorListResponse, Evaluators } from './resources/evaluators';
import {
  Experiment,
  ExperimentCreateParams,
  ExperimentCreateResponse,
  ExperimentListParams,
  ExperimentListResponse,
  ExperimentRetrieveResponse,
  Experiments,
} from './resources/experiments';
import {
  Project,
  ProjectCreateParams,
  ProjectListParams,
  ProjectListResponse,
  ProjectRetrieveResponse,
  Projects,
} from './resources/projects';
import {
  PromptCreateParams,
  PromptCreateResponse,
  PromptCreateRevisionParams,
  PromptCreateRevisionResponse,
  PromptDeleteParams,
  PromptDeleteResponse,
  PromptListParams,
  PromptListResponse,
  PromptSetLabelsParams,
  PromptUpdateParams,
  PromptUpdateResponse,
  Prompts,
} from './resources/prompts';
import {
  TraceInsight,
  TraceInsightCreateJobParams,
  TraceInsightCreateJobResponse,
  TraceInsightListJobsParams,
  TraceInsightListJobsResponse,
  TraceInsightListParams,
  TraceInsightListResponse,
} from './resources/trace-insight';
import { Whoami, WhoamiRetrieveResponse } from './resources/whoami';
import { Otel } from './resources/otel/otel';

export interface ClientOptions {
  /**
   * Defaults to process.env['PATRONUS_API_KEY'].
   */
  apiKey?: string | null | undefined;

  accessToken?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['PATRONUS_API_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Patronus API API.
 */
export class PatronusAPI extends Core.APIClient {
  apiKey: string | null;
  accessToken: string | null;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Patronus API API.
   *
   * @param {string | null | undefined} [opts.apiKey=process.env['PATRONUS_API_KEY'] ?? null]
   * @param {string | null | undefined} [opts.accessToken]
   * @param {string} [opts.baseURL=process.env['PATRONUS_API_BASE_URL'] ?? https://api.patronus.ai] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('PATRONUS_API_BASE_URL'),
    apiKey = Core.readEnv('PATRONUS_API_KEY') ?? null,
    accessToken = null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      apiKey,
      accessToken,
      ...opts,
      baseURL: baseURL || `https://api.patronus.ai`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
    this.accessToken = accessToken;
  }

  evaluatorCriteria: API.EvaluatorCriteria = new API.EvaluatorCriteria(this);
  experiments: API.Experiments = new API.Experiments(this);
  projects: API.Projects = new API.Projects(this);
  evaluations: API.Evaluations = new API.Evaluations(this);
  prompts: API.Prompts = new API.Prompts(this);
  otel: API.Otel = new API.Otel(this);
  traceInsight: API.TraceInsight = new API.TraceInsight(this);
  evaluators: API.Evaluators = new API.Evaluators(this);
  whoami: API.Whoami = new API.Whoami(this);
  apps: API.Apps = new API.Apps(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override validateHeaders(headers: Core.Headers, customHeaders: Core.Headers) {
    if (this.accessToken && headers['authorization']) {
      return;
    }
    if (customHeaders['authorization'] === null) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the accessToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    if (this.accessToken == null) {
      return {};
    }
    return { Authorization: `Bearer ${this.accessToken}` };
  }

  static PatronusAPI = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static PatronusAPIError = Errors.PatronusAPIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

PatronusAPI.Experiments = Experiments;
PatronusAPI.Projects = Projects;
PatronusAPI.Evaluations = Evaluations;
PatronusAPI.Prompts = Prompts;
PatronusAPI.Otel = Otel;
PatronusAPI.TraceInsight = TraceInsight;
PatronusAPI.Evaluators = Evaluators;
PatronusAPI.Whoami = Whoami;
PatronusAPI.Apps = Apps;
export declare namespace PatronusAPI {
  export type RequestOptions = Core.RequestOptions;

  export {
    type EvaluatorCriteria as EvaluatorCriteria,
    type EvaluatorCriterionCreateResponse as EvaluatorCriterionCreateResponse,
    type EvaluatorCriterionListResponse as EvaluatorCriterionListResponse,
    type EvaluatorCriterionAddRevisionResponse as EvaluatorCriterionAddRevisionResponse,
    type EvaluatorCriterionArchiveResponse as EvaluatorCriterionArchiveResponse,
    type EvaluatorCriterionCreateParams as EvaluatorCriterionCreateParams,
    type EvaluatorCriterionListParams as EvaluatorCriterionListParams,
    type EvaluatorCriterionAddRevisionParams as EvaluatorCriterionAddRevisionParams,
  };

  export {
    Experiments as Experiments,
    type Experiment as Experiment,
    type ExperimentCreateResponse as ExperimentCreateResponse,
    type ExperimentRetrieveResponse as ExperimentRetrieveResponse,
    type ExperimentListResponse as ExperimentListResponse,
    type ExperimentCreateParams as ExperimentCreateParams,
    type ExperimentListParams as ExperimentListParams,
  };

  export {
    Projects as Projects,
    type Project as Project,
    type ProjectRetrieveResponse as ProjectRetrieveResponse,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };

  export {
    Evaluations as Evaluations,
    type EvaluationRetrieveResponse as EvaluationRetrieveResponse,
    type EvaluationBatchCreateResponse as EvaluationBatchCreateResponse,
    type EvaluationEvaluateResponse as EvaluationEvaluateResponse,
    type EvaluationSearchResponse as EvaluationSearchResponse,
    type EvaluationBatchCreateParams as EvaluationBatchCreateParams,
    type EvaluationEvaluateParams as EvaluationEvaluateParams,
    type EvaluationSearchParams as EvaluationSearchParams,
  };

  export {
    Prompts as Prompts,
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

  export { Otel as Otel };

  export {
    TraceInsight as TraceInsight,
    type TraceInsightListResponse as TraceInsightListResponse,
    type TraceInsightCreateJobResponse as TraceInsightCreateJobResponse,
    type TraceInsightListJobsResponse as TraceInsightListJobsResponse,
    type TraceInsightListParams as TraceInsightListParams,
    type TraceInsightCreateJobParams as TraceInsightCreateJobParams,
    type TraceInsightListJobsParams as TraceInsightListJobsParams,
  };

  export {
    Evaluators as Evaluators,
    type EvaluatorListResponse as EvaluatorListResponse,
    type EvaluatorListFamiliesResponse as EvaluatorListFamiliesResponse,
  };

  export { Whoami as Whoami, type WhoamiRetrieveResponse as WhoamiRetrieveResponse };

  export { Apps as Apps, type AppListResponse as AppListResponse, type AppListParams as AppListParams };
}

export { toFile, fileFromPath } from './uploads';
export {
  PatronusAPIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default PatronusAPI;
