// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Tags extends APIResource {
  /**
   * List Tags
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ListTagsResponse> {
    return this._client.get('/v1/evaluation-results/tags', options);
  }
}

export interface ListTagsResponse {
  tags: Array<unknown>;
}

export declare namespace Tags {
  export { type ListTagsResponse as ListTagsResponse };
}
