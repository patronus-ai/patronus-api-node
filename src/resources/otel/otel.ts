// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LogsAPI from './logs';
import { LogSearchParams, LogSearchResponse, Logs } from './logs';
import * as SpansAPI from './spans';
import { SpanSearchParams, SpanSearchResponse, Spans } from './spans';

export class Otel extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  spans: SpansAPI.Spans = new SpansAPI.Spans(this._client);
}

Otel.Logs = Logs;
Otel.Spans = Spans;

export declare namespace Otel {
  export {
    Logs as Logs,
    type LogSearchResponse as LogSearchResponse,
    type LogSearchParams as LogSearchParams,
  };

  export {
    Spans as Spans,
    type SpanSearchResponse as SpanSearchResponse,
    type SpanSearchParams as SpanSearchParams,
  };
}
