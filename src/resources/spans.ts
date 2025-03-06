// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Spans extends APIResource {
  /**
   * The endpoint is deprecated. Please use `/v1/otel/spans/search` instead.
   */
  search(body: SpanSearchParams, options?: Core.RequestOptions): Core.APIPromise<SpanSearchResponse> {
    return this._client.post('/v1/spans/search', { body, ...options });
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
  limit?: number;

  parent_span_id?: 'any' | null;

  project_id?: string | null;

  trace_id?: string | null;
}

export declare namespace Spans {
  export { type SpanSearchResponse as SpanSearchResponse, type SpanSearchParams as SpanSearchParams };
}
