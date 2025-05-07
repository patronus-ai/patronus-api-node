// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource traceInsight', () => {
  test('list', async () => {
    const responsePromise = client.traceInsight.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.traceInsight.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.traceInsight.list(
        {
          app: 'app',
          experiment_id: 'experiment_id',
          job_id: 'job_id',
          limit: 1,
          offset: 0,
          project_id: 'project_id',
          trace_id: 'trace_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('createJob: only required params', async () => {
    const responsePromise = client.traceInsight.createJob({ trace_id: 'trace_id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createJob: required and optional params', async () => {
    const response = await client.traceInsight.createJob({ trace_id: 'trace_id' });
  });

  test('listJobs', async () => {
    const responsePromise = client.traceInsight.listJobs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listJobs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.traceInsight.listJobs({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('listJobs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.traceInsight.listJobs(
        {
          app: 'app',
          experiment_id: 'experiment_id',
          job_id: 'job_id',
          job_status: 'pending',
          limit: 1,
          offset: 0,
          project_id: 'project_id',
          trace_id: 'trace_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });
});
