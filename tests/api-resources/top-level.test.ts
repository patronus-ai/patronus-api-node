// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('top level methods', () => {
  test('annotate: only required params', async () => {
    const responsePromise = client.annotate({
      annotation_criteria_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('annotate: required and optional params', async () => {
    const response = await client.annotate({
      annotation_criteria_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      explanation: 'explanation',
      value_pass: true,
      value_score: 0,
      value_text: 'value_text',
    });
  });

  test('evaluate: only required params', async () => {
    const responsePromise = client.evaluate({ evaluators: [{ evaluator: 'evaluator' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluate: required and optional params', async () => {
    const response = await client.evaluate({
      evaluators: [{ evaluator: 'evaluator', criteria: 'x', explain_strategy: 'never' }],
      app: 'xx',
      capture: 'all',
      confidence_interval_strategy: 'none',
      dataset_id: 'dataset_id',
      dataset_sample_id: 0,
      evaluated_model_attachments: [
        { media_type: 'image/jpeg', url: 'https://example.com', usage_type: 'evaluated_model_system_prompt' },
      ],
      evaluated_model_gold_answer: 'evaluated_model_gold_answer',
      evaluated_model_input: 'evaluated_model_input',
      evaluated_model_output: 'evaluated_model_output',
      evaluated_model_retrieved_context: ['string'],
      evaluated_model_system_prompt: 'evaluated_model_system_prompt',
      experiment_id: 'experiment_id',
      log_id: 'log_id',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_name: 'project_name',
      span_id: 'span_id',
      tags: { foo: '._' },
      trace_id: 'trace_id',
    });
  });

  test('listApps', async () => {
    const responsePromise = client.listApps();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listApps: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.listApps({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('listApps: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.listApps({ limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('listEvaluatorFamilies', async () => {
    const responsePromise = client.listEvaluatorFamilies();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listEvaluatorFamilies: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.listEvaluatorFamilies({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('listEvaluators', async () => {
    const responsePromise = client.listEvaluators();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('listEvaluators: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.listEvaluators({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('whoami', async () => {
    const responsePromise = client.whoami();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('whoami: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.whoami({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });
});
