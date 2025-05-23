// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluatorCriteria', () => {
  test('create: only required params', async () => {
    const responsePromise = client.evaluatorCriteria.create({
      config: {},
      evaluator_family: 'evaluator_family',
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

  test('create: required and optional params', async () => {
    const response = await client.evaluatorCriteria.create({
      config: {},
      evaluator_family: 'evaluator_family',
      name: 'name',
      description: 'description',
    });
  });

  test('list', async () => {
    const responsePromise = client.evaluatorCriteria.list();
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
    await expect(client.evaluatorCriteria.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluatorCriteria.list(
        {
          enabled: true,
          evaluator_family: 'evaluator_family',
          get_last_revision: true,
          is_patronus_managed: true,
          limit: 0,
          name: 'name',
          offset: 0,
          public_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          revision: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('addRevision: only required params', async () => {
    const responsePromise = client.evaluatorCriteria.addRevision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      config: {},
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('addRevision: required and optional params', async () => {
    const response = await client.evaluatorCriteria.addRevision('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      config: {},
      description: 'description',
    });
  });

  test('archive', async () => {
    const responsePromise = client.evaluatorCriteria.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('archive: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluatorCriteria.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });
});
