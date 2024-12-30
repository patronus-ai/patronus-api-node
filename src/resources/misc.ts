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
  caller: WhoAmIResponse.Caller;
}

export namespace WhoAmIResponse {
  export interface Caller {
    api_key: Caller.APIKey | null;

    user: Caller.User | null;
  }

  export namespace Caller {
    export interface APIKey {
      id: string;

      account: APIKey.Account;
    }

    export namespace APIKey {
      export interface Account {
        id: string;

        name: string;
      }
    }

    export interface User {
      id: string;

      accounts: Array<User.Account>;

      is_staff: boolean;

      sub: string;
    }

    export namespace User {
      export interface Account {
        id: string;

        name: string;

        role: string | null;

        features_enabled?: Array<string>;
      }
    }
  }
}

export declare namespace Misc {
  export { type WhoAmIResponse as WhoAmIResponse };
}
