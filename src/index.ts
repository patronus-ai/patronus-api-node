// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AnnotationCriteria,
  AnnotationCriterionCreateParams,
  AnnotationCriterionListParams,
  AnnotationCriterionUpdateParams,
  CreateAnnotationCriteriaResponse,
  GetAnnotationCriteriaResponse,
  ListAnnotationCriteriaResponse,
  UpdateAnnotationCriteriaResponse,
} from './resources/annotation-criteria';
import { AnnotateResponse, AnnotationAnnotateParams, Annotations } from './resources/annotations';
import { AppListParams, AppResponse, Apps } from './resources/apps';
import { EvaluateResponse, EvaluationEvaluateParams, Evaluations } from './resources/evaluations';
import { EvaluatorFamilies, ListEvaluatorFamilyResponse } from './resources/evaluator-families';
import { Evaluators, ListEvaluatorsResponse } from './resources/evaluators';
import {
  CreateExperimentResponse,
  ExperimentCreateParams,
  ExperimentListParams,
  Experiments,
  GetExperimentResponse,
  ListExperimentResponse,
} from './resources/experiments';
import { Misc, WhoAmIResponse } from './resources/misc';
import {
  CreatePairwiseAnnotationResponse,
  GetBatchPairwiseAnnotationsResponse,
  ListPairwiseAnnotationsResponse,
  PairwiseAnnotationCreateParams,
  PairwiseAnnotationDeleteParams,
  PairwiseAnnotationGetBatchParams,
  PairwiseAnnotationListParams,
  PairwiseAnnotations,
} from './resources/pairwise-annotations';
import {
  GetProjectResponse,
  ListProjectsResponse,
  Project,
  ProjectCreateParams,
  ProjectListParams,
  Projects,
} from './resources/projects';
import {
  CreateDatasetResponse,
  DatasetCreateParams,
  DatasetListParams,
  DatasetUpdateParams,
  Datasets,
  GetDatasetsResponse,
  ListDatasetsResponse,
  UpdateDatasetResponse,
} from './resources/datasets/datasets';
import {
  CreateEvaluationResultsBatchResponse,
  EvaluateResultSearchResponse,
  EvaluationResultBatchCreateParams,
  EvaluationResultEvaluationFeedbackParams,
  EvaluationResultSearchParams,
  EvaluationResults,
  GetEvaluationResult,
} from './resources/evaluation-results/evaluation-results';
import {
  ArchiveEvaluatorCriteriaResponse,
  CreateEvaluatorCriteriaResponse,
  EvaluatorCriteria,
  EvaluatorCriterionCreateParams,
  EvaluatorCriterionListParams,
  ListEvaluatorCriteriaResponse,
} from './resources/evaluator-criteria/evaluator-criteria';

export interface ClientOptions {
  /**
   * API Key for authenticating with the Patronus AI API. Include in request headers as 'X-API-KEY'.
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
  evaluations: API.Evaluations = new API.Evaluations(this);
  evaluationResults: API.EvaluationResults = new API.EvaluationResults(this);
  evaluatorCriteria: API.EvaluatorCriteria = new API.EvaluatorCriteria(this);
  experiments: API.Experiments = new API.Experiments(this);
  projects: API.Projects = new API.Projects(this);
  evaluators: API.Evaluators = new API.Evaluators(this);
  misc: API.Misc = new API.Misc(this);
  apps: API.Apps = new API.Apps(this);
  evaluatorFamilies: API.EvaluatorFamilies = new API.EvaluatorFamilies(this);
  annotations: API.Annotations = new API.Annotations(this);
  annotationCriteria: API.AnnotationCriteria = new API.AnnotationCriteria(this);
  pairwiseAnnotations: API.PairwiseAnnotations = new API.PairwiseAnnotations(this);

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
PatronusAPI.Evaluations = Evaluations;
PatronusAPI.EvaluationResults = EvaluationResults;
PatronusAPI.EvaluatorCriteria = EvaluatorCriteria;
PatronusAPI.Experiments = Experiments;
PatronusAPI.Projects = Projects;
PatronusAPI.Evaluators = Evaluators;
PatronusAPI.Misc = Misc;
PatronusAPI.Apps = Apps;
PatronusAPI.EvaluatorFamilies = EvaluatorFamilies;
PatronusAPI.Annotations = Annotations;
PatronusAPI.AnnotationCriteria = AnnotationCriteria;
PatronusAPI.PairwiseAnnotations = PairwiseAnnotations;
export declare namespace PatronusAPI {
  export type RequestOptions = Core.RequestOptions;

  export {
    Datasets as Datasets,
    type CreateDatasetResponse as CreateDatasetResponse,
    type GetDatasetsResponse as GetDatasetsResponse,
    type ListDatasetsResponse as ListDatasetsResponse,
    type UpdateDatasetResponse as UpdateDatasetResponse,
    type DatasetCreateParams as DatasetCreateParams,
    type DatasetUpdateParams as DatasetUpdateParams,
    type DatasetListParams as DatasetListParams,
  };

  export {
    Evaluations as Evaluations,
    type EvaluateResponse as EvaluateResponse,
    type EvaluationEvaluateParams as EvaluationEvaluateParams,
  };

  export {
    EvaluationResults as EvaluationResults,
    type CreateEvaluationResultsBatchResponse as CreateEvaluationResultsBatchResponse,
    type EvaluateResultSearchResponse as EvaluateResultSearchResponse,
    type GetEvaluationResult as GetEvaluationResult,
    type EvaluationResultBatchCreateParams as EvaluationResultBatchCreateParams,
    type EvaluationResultEvaluationFeedbackParams as EvaluationResultEvaluationFeedbackParams,
    type EvaluationResultSearchParams as EvaluationResultSearchParams,
  };

  export {
    EvaluatorCriteria as EvaluatorCriteria,
    type ArchiveEvaluatorCriteriaResponse as ArchiveEvaluatorCriteriaResponse,
    type CreateEvaluatorCriteriaResponse as CreateEvaluatorCriteriaResponse,
    type ListEvaluatorCriteriaResponse as ListEvaluatorCriteriaResponse,
    type EvaluatorCriterionCreateParams as EvaluatorCriterionCreateParams,
    type EvaluatorCriterionListParams as EvaluatorCriterionListParams,
  };

  export {
    Experiments as Experiments,
    type CreateExperimentResponse as CreateExperimentResponse,
    type GetExperimentResponse as GetExperimentResponse,
    type ListExperimentResponse as ListExperimentResponse,
    type ExperimentCreateParams as ExperimentCreateParams,
    type ExperimentListParams as ExperimentListParams,
  };

  export {
    Projects as Projects,
    type GetProjectResponse as GetProjectResponse,
    type ListProjectsResponse as ListProjectsResponse,
    type Project as Project,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };

  export { Evaluators as Evaluators, type ListEvaluatorsResponse as ListEvaluatorsResponse };

  export { Misc as Misc, type WhoAmIResponse as WhoAmIResponse };

  export { Apps as Apps, type AppResponse as AppResponse, type AppListParams as AppListParams };

  export {
    EvaluatorFamilies as EvaluatorFamilies,
    type ListEvaluatorFamilyResponse as ListEvaluatorFamilyResponse,
  };

  export {
    Annotations as Annotations,
    type AnnotateResponse as AnnotateResponse,
    type AnnotationAnnotateParams as AnnotationAnnotateParams,
  };

  export {
    AnnotationCriteria as AnnotationCriteria,
    type CreateAnnotationCriteriaResponse as CreateAnnotationCriteriaResponse,
    type GetAnnotationCriteriaResponse as GetAnnotationCriteriaResponse,
    type ListAnnotationCriteriaResponse as ListAnnotationCriteriaResponse,
    type UpdateAnnotationCriteriaResponse as UpdateAnnotationCriteriaResponse,
    type AnnotationCriterionCreateParams as AnnotationCriterionCreateParams,
    type AnnotationCriterionUpdateParams as AnnotationCriterionUpdateParams,
    type AnnotationCriterionListParams as AnnotationCriterionListParams,
  };

  export {
    PairwiseAnnotations as PairwiseAnnotations,
    type CreatePairwiseAnnotationResponse as CreatePairwiseAnnotationResponse,
    type GetBatchPairwiseAnnotationsResponse as GetBatchPairwiseAnnotationsResponse,
    type ListPairwiseAnnotationsResponse as ListPairwiseAnnotationsResponse,
    type PairwiseAnnotationCreateParams as PairwiseAnnotationCreateParams,
    type PairwiseAnnotationListParams as PairwiseAnnotationListParams,
    type PairwiseAnnotationDeleteParams as PairwiseAnnotationDeleteParams,
    type PairwiseAnnotationGetBatchParams as PairwiseAnnotationGetBatchParams,
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
