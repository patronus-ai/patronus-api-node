// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pairwiseAnnotations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.pairwiseAnnotations.create({
      log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_a_score: 0,
      log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_b_score: 0,
      name: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.pairwiseAnnotations.create({
      log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_a_score: 0,
      log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_b_score: 0,
      name: 'x',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.pairwiseAnnotations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.pairwiseAnnotations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pairwiseAnnotations.list(
        {
          experiment_id: [0],
          limit: 1000,
          log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'name',
          offset: 0,
          project_id: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.pairwiseAnnotations.delete({
      log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.pairwiseAnnotations.delete({
      log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getBatch: only required params', async () => {
    const responsePromise = client.pairwiseAnnotations.getBatch({
      pairwise_annotations: [
        {
          log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'name',
        },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getBatch: required and optional params', async () => {
    const response = await client.pairwiseAnnotations.getBatch({
      pairwise_annotations: [
        {
          log_a_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          log_b_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          name: 'name',
        },
      ],
    });
  });
});
