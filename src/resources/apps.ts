// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Apps extends APIResource {
  /**
   * List Apps
   */
  list(query?: AppListParams, options?: Core.RequestOptions): Core.APIPromise<AppListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AppListResponse>;
  list(
    query: AppListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AppListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/v1/apps', { query, ...options });
  }
}

export interface AppListResponse {
  apps: Array<AppListResponse.App>;
}

export namespace AppListResponse {
  export interface App {
    name: string;
  }
}

export interface AppListParams {
  limit?: number;

  offset?: number;
}

export declare namespace Apps {
  export { type AppListResponse as AppListResponse, type AppListParams as AppListParams };
}
