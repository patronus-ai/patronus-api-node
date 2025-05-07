// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Spans extends APIResource {
  /**
   * Search Spans
   */
  search(body: SpanSearchParams, options?: Core.RequestOptions): Core.APIPromise<SpanSearchResponse> {
    return this._client.post('/v1/otel/spans/search', { body, ...options });
  }
}

export interface SpanSearchResponse {
  spans: Array<SpanSearchResponse.Span>;
}

export namespace SpanSearchResponse {
  export interface Span {
    duration: string;

    events: Array<unknown> | null;

    links: Array<unknown> | null;

    parent_span_id: string | null;

    resource_attributes: Record<string, string> | null;

    scope_name: string | null;

    scope_version: string | null;

    service_name: string | null;

    span_attributes: Record<string, string> | null;

    span_id: string;

    span_kind: string | null;

    span_name: string | null;

    status_code: string | null;

    status_message: string | null;

    timestamp: string;

    trace_id: string;

    trace_state: string | null;
  }
}

export interface SpanSearchParams {
  filters?: Array<SpanSearchParams.Filter>;

  limit?: number;

  order?: 'timestamp asc' | 'timestamp desc';
}

export namespace SpanSearchParams {
  export interface Filter {
    and_?: Array<unknown> | null;

    field?: string | null;

    op?: 'eq' | 'ne' | 'gt' | 'ge' | 'lt' | 'le' | 'starts_with' | 'ends_with' | null;

    or_?: Array<unknown> | null;

    value?: unknown;
  }
}

export declare namespace Spans {
  export { type SpanSearchResponse as SpanSearchResponse, type SpanSearchParams as SpanSearchParams };
}
