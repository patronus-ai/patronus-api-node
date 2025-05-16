// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Whoami extends APIResource {
  /**
   * Whoami
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<WhoamiRetrieveResponse> {
    return this._client.get('/v1/whoami', options);
  }
}

export interface WhoamiRetrieveResponse {
  caller: WhoamiRetrieveResponse.Caller;
}

export namespace WhoamiRetrieveResponse {
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

        custom_link_pp?: string | null;

        custom_link_tos?: string | null;

        custom_pp_accepted?: boolean | null;

        custom_tos_accepted?: boolean | null;

        features_enabled?: Array<string>;
      }
    }
  }
}

export declare namespace Whoami {
  export { type WhoamiRetrieveResponse as WhoamiRetrieveResponse };
}
