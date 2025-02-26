// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Misc extends APIResource {
  /**
   * Whoami
   */
  whoami(options?: Core.RequestOptions): Core.APIPromise<WhoAmIResponse> {
    return this._client.get('/v1/whoami', options);
  }
}

export interface WhoAmIResponse {
  caller: unknown;
}

export declare namespace Misc {
  export { type WhoAmIResponse as WhoAmIResponse };
}
