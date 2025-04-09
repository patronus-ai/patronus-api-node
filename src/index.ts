// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isRequestOptions } from './core';
import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import * as TopLevelAPI from './resources/top-level';
import {
  AnnotateParams,
  AnnotateResponse,
  EvaluateParams,
  EvaluateResponse,
  ListAppsParams,
  ListAppsResponse,
  ListEvaluatorFamiliesResponse,
  ListEvaluatorsResponse,
  WhoamiResponse,
} from './resources/top-level';
import {
  AnnotationCategory,
  AnnotationCriteria,
  AnnotationCriterionCreateParams,
  AnnotationCriterionCreateResponse,
  AnnotationCriterionListParams,
  AnnotationCriterionListResponse,
  AnnotationCriterionRetrieveResponse,
  AnnotationCriterionUpdateParams,
  AnnotationCriterionUpdateResponse,
  AnnotationType,
} from './resources/annotation-criteria';
import {
  Dataset,
  DatasetDownloadCsvResponse,
  DatasetDownloadJSONLResponse,
  DatasetHasValues,
  DatasetListDataResponse,
  DatasetListParams,
  DatasetListResponse,
  DatasetRetrieveResponse,
  DatasetType,
  DatasetUpdateParams,
  DatasetUpdateResponse,
  DatasetUploadParams,
  DatasetUploadResponse,
  Datasets,
} from './resources/datasets';
import {
  EvaluationBatchCreateParams,
  EvaluationBatchCreateResponse,
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
  PairwiseAnnotation,
  PairwiseAnnotationCreateParams,
  PairwiseAnnotationCreateResponse,
  PairwiseAnnotationDeleteParams,
  PairwiseAnnotationGetBatchParams,
  PairwiseAnnotationGetBatchResponse,
  PairwiseAnnotationListParams,
  PairwiseAnnotationListResponse,
  PairwiseAnnotations,
} from './resources/pairwise-annotations';
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
import { TraceInsight, TraceInsightListParams, TraceInsightListResponse } from './resources/trace-insight';
import {
  TraceInsightJobCreateParams,
  TraceInsightJobCreateResponse,
  TraceInsightJobListParams,
  TraceInsightJobListResponse,
  TraceInsightJobs,
} from './resources/trace-insight-jobs';
import { Otel } from './resources/otel/otel';

export interface ClientOptions {
  /**
   * Defaults to process.env['PATRONUS_API_KEY'].
   */
  apiKey?: string | undefined;

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
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Patronus API API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['PATRONUS_API_KEY'] ?? undefined]
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
    apiKey = Core.readEnv('PATRONUS_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.PatronusAPIError(
        "The PATRONUS_API_KEY environment variable is missing or empty; either provide it, or instantiate the PatronusAPI client with an apiKey option, like new PatronusAPI({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
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
  }

  datasets: API.Datasets = new API.Datasets(this);
  evaluatorCriteria: API.EvaluatorCriteria = new API.EvaluatorCriteria(this);
  experiments: API.Experiments = new API.Experiments(this);
  projects: API.Projects = new API.Projects(this);
  annotationCriteria: API.AnnotationCriteria = new API.AnnotationCriteria(this);
  pairwiseAnnotations: API.PairwiseAnnotations = new API.PairwiseAnnotations(this);
  evaluations: API.Evaluations = new API.Evaluations(this);
  prompts: API.Prompts = new API.Prompts(this);
  otel: API.Otel = new API.Otel(this);
  traceInsightJobs: API.TraceInsightJobs = new API.TraceInsightJobs(this);
  traceInsight: API.TraceInsight = new API.TraceInsight(this);

  /**
   * Annotate
   */
  annotate(
    body: TopLevelAPI.AnnotateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.AnnotateResponse> {
    return this.post('/v1/annotate', { body, ...options });
  }

  /**
   * Requires either **input** or **output** field to be specified. Absence of both
   * leads to an HTTP_422 (Unprocessable Entity) error.
   */
  evaluate(
    body: TopLevelAPI.EvaluateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.EvaluateResponse> {
    return this.post('/v1/evaluate', { body, ...options });
  }

  /**
   * List Apps
   */
  listApps(
    query?: TopLevelAPI.ListAppsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ListAppsResponse>;
  listApps(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.ListAppsResponse>;
  listApps(
    query: TopLevelAPI.ListAppsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ListAppsResponse> {
    if (isRequestOptions(query)) {
      return this.listApps({}, query);
    }
    return this.get('/v1/apps', { query, ...options });
  }

  /**
   * List Evaluator Families
   */
  listEvaluatorFamilies(
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLevelAPI.ListEvaluatorFamiliesResponse> {
    return this.get('/v1/evaluator-families', options);
  }

  /**
   * List of available evaluators for Evaluation Runs and LLM Monitoring.
   */
  listEvaluators(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.ListEvaluatorsResponse> {
    return this.get('/v1/evaluators', options);
  }

  /**
   * Whoami
   */
  whoami(options?: Core.RequestOptions): Core.APIPromise<TopLevelAPI.WhoamiResponse> {
    return this.get('/v1/whoami', options);
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-API-KEY': this.apiKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
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

PatronusAPI.Datasets = Datasets;
PatronusAPI.Experiments = Experiments;
PatronusAPI.Projects = Projects;
PatronusAPI.PairwiseAnnotations = PairwiseAnnotations;
PatronusAPI.Evaluations = Evaluations;
PatronusAPI.Prompts = Prompts;
PatronusAPI.Otel = Otel;
PatronusAPI.TraceInsightJobs = TraceInsightJobs;
PatronusAPI.TraceInsight = TraceInsight;
export declare namespace PatronusAPI {
  export type RequestOptions = Core.RequestOptions;

  export {
    type AnnotateResponse as AnnotateResponse,
    type EvaluateResponse as EvaluateResponse,
    type ListAppsResponse as ListAppsResponse,
    type ListEvaluatorFamiliesResponse as ListEvaluatorFamiliesResponse,
    type ListEvaluatorsResponse as ListEvaluatorsResponse,
    type WhoamiResponse as WhoamiResponse,
    type AnnotateParams as AnnotateParams,
    type EvaluateParams as EvaluateParams,
    type ListAppsParams as ListAppsParams,
  };

  export {
    Datasets as Datasets,
    type Dataset as Dataset,
    type DatasetHasValues as DatasetHasValues,
    type DatasetType as DatasetType,
    type DatasetRetrieveResponse as DatasetRetrieveResponse,
    type DatasetUpdateResponse as DatasetUpdateResponse,
    type DatasetListResponse as DatasetListResponse,
    type DatasetDownloadCsvResponse as DatasetDownloadCsvResponse,
    type DatasetDownloadJSONLResponse as DatasetDownloadJSONLResponse,
    type DatasetListDataResponse as DatasetListDataResponse,
    type DatasetUploadResponse as DatasetUploadResponse,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
    type DatasetUploadParams as DatasetUploadParams,
  };

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
    type AnnotationCriteria as AnnotationCriteria,
    type AnnotationCategory as AnnotationCategory,
    type AnnotationType as AnnotationType,
    type AnnotationCriterionCreateResponse as AnnotationCriterionCreateResponse,
    type AnnotationCriterionRetrieveResponse as AnnotationCriterionRetrieveResponse,
    type AnnotationCriterionUpdateResponse as AnnotationCriterionUpdateResponse,
    type AnnotationCriterionListResponse as AnnotationCriterionListResponse,
    type AnnotationCriterionCreateParams as AnnotationCriterionCreateParams,
    type AnnotationCriterionUpdateParams as AnnotationCriterionUpdateParams,
    type AnnotationCriterionListParams as AnnotationCriterionListParams,
  };

  export {
    PairwiseAnnotations as PairwiseAnnotations,
    type PairwiseAnnotation as PairwiseAnnotation,
    type PairwiseAnnotationCreateResponse as PairwiseAnnotationCreateResponse,
    type PairwiseAnnotationListResponse as PairwiseAnnotationListResponse,
    type PairwiseAnnotationGetBatchResponse as PairwiseAnnotationGetBatchResponse,
    type PairwiseAnnotationCreateParams as PairwiseAnnotationCreateParams,
    type PairwiseAnnotationListParams as PairwiseAnnotationListParams,
    type PairwiseAnnotationDeleteParams as PairwiseAnnotationDeleteParams,
    type PairwiseAnnotationGetBatchParams as PairwiseAnnotationGetBatchParams,
  };

  export {
    Evaluations as Evaluations,
    type EvaluationRetrieveResponse as EvaluationRetrieveResponse,
    type EvaluationBatchCreateResponse as EvaluationBatchCreateResponse,
    type EvaluationSearchResponse as EvaluationSearchResponse,
    type EvaluationBatchCreateParams as EvaluationBatchCreateParams,
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
    TraceInsightJobs as TraceInsightJobs,
    type TraceInsightJobCreateResponse as TraceInsightJobCreateResponse,
    type TraceInsightJobListResponse as TraceInsightJobListResponse,
    type TraceInsightJobCreateParams as TraceInsightJobCreateParams,
    type TraceInsightJobListParams as TraceInsightJobListParams,
  };

  export {
    TraceInsight as TraceInsight,
    type TraceInsightListResponse as TraceInsightListResponse,
    type TraceInsightListParams as TraceInsightListParams,
  };
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
