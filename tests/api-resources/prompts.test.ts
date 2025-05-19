// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource prompts', () => {
  test('createRevision: only required params', async () => {
    const responsePromise = client.prompts.createRevision({ body: 'body' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createRevision: required and optional params', async () => {
    const response = await client.prompts.createRevision({
      body: 'body',
      create_only_if_not_exists: true,
      metadata: {},
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_name: 'project_name',
      prompt_description: 'prompt_description',
      prompt_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      prompt_name: 'prompt_name',
    });
  });

  test('deleteDefinitions', async () => {
    const responsePromise = client.prompts.deleteDefinitions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteDefinitions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.prompts.deleteDefinitions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('deleteDefinitions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prompts.deleteDefinitions(
        {
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          prompt_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('listDefinitions', async () => {
    const responsePromise = client.prompts.listDefinitions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listDefinitions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.prompts.listDefinitions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('listDefinitions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prompts.listDefinitions(
        {
          limit: 0,
          name: 'name',
          name_startswith: 'name_startswith',
          offset: 0,
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_name: 'project_name',
          prompt_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('listRevisions', async () => {
    const responsePromise = client.prompts.listRevisions();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listRevisions: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.prompts.listRevisions({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('listRevisions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.prompts.listRevisions(
        {
          label: 'label',
          latest_revision_only: true,
          limit: 0,
          normalized_body_sha256: 'normalized_body_sha256',
          offset: 0,
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_name: 'project_name',
          prompt_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          prompt_name: 'prompt_name',
          prompt_name_startswith: 'prompt_name_startswith',
          revision: 0,
          revision_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('removeLabels: only required params', async () => {
    const responsePromise = client.prompts.removeLabels('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      labels: ['-_-k..W2K-1V'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeLabels: required and optional params', async () => {
    const response = await client.prompts.removeLabels('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      labels: ['-_-k..W2K-1V'],
    });
  });

  test('setLabels: only required params', async () => {
    const responsePromise = client.prompts.setLabels('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      labels: ['-_-k..W2K-1V'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('setLabels: required and optional params', async () => {
    const response = await client.prompts.setLabels('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      labels: ['-_-k..W2K-1V'],
    });
  });

  test('updateDefinition', async () => {
    const responsePromise = client.prompts.updateDefinition('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
