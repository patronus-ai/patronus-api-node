// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Logs extends APIResource {
  /**
   * Search Logs
   */
  search(body: LogSearchParams, options?: Core.RequestOptions): Core.APIPromise<LogSearchResponse> {
    return this._client.post('/v1/otel/logs/search', { body, ...options });
  }
}

export interface LogSearchResponse {
  logs: Array<LogSearchResponse.Log>;
}

export namespace LogSearchResponse {
  export interface Log {
    body: unknown;

    log_attributes: Record<string, string> | null;

    resource_attributes: Record<string, string> | null;

    resource_schema_url: string | null;

    scope_attributes: Record<string, string> | null;

    scope_name: string | null;

    scope_schema_url: string | null;

    scope_version: string | null;

    service_name: string | null;

    severity_number: number | null;

    severity_text: string | null;

    span_id: string | null;

    timestamp: string | null;

    trace_flags: number | null;

    trace_id: string | null;
  }
}

export interface LogSearchParams {
  filters?: Array<LogSearchParams.Filter>;

  limit?: number;

  order?: 'timestamp asc' | 'timestamp desc';
}

export namespace LogSearchParams {
  export interface Filter {
    and_?: Array<unknown> | null;

    field?: string | null;

    op?: 'eq' | 'ne' | 'gt' | 'ge' | 'lt' | 'le' | 'starts_with' | 'ends_with' | null;

    or_?: Array<unknown> | null;

    value?: unknown;
  }
}

export declare namespace Logs {
  export { type LogSearchResponse as LogSearchResponse, type LogSearchParams as LogSearchParams };
}
