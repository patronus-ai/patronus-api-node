// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource evaluations', () => {
  test('retrieve', async () => {
    const responsePromise = client.evaluations.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluations.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.evaluations.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluations.delete(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('batchCreate: only required params', async () => {
    const responsePromise = client.evaluations.batchCreate({
      evaluations: [{ evaluator_id: 'evaluator_id', log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('batchCreate: required and optional params', async () => {
    const response = await client.evaluations.batchCreate({
      evaluations: [
        {
          evaluator_id: 'evaluator_id',
          log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          app: 'app',
          created_at: '2019-12-27T18:11:19.117Z',
          criteria: 'criteria',
          dataset_id: 'dataset_id',
          dataset_sample_id: 'dataset_sample_id',
          evaluation_duration: 'evaluation_duration',
          experiment_id: 'experiment_id',
          explanation: 'explanation',
          explanation_duration: 'explanation_duration',
          metadata: {},
          metric_description: 'metric_description',
          metric_name: 'metric_name',
          pass: true,
          project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          project_name: 'project_name',
          score: 0,
          span_id: 'span_id',
          tags: {},
          text_output: 'text_output',
          trace_id: 'trace_id',
        },
      ],
    });
  });

  test('evaluate: only required params', async () => {
    const responsePromise = client.evaluations.evaluate({ evaluators: [{ evaluator: 'evaluator' }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluate: required and optional params', async () => {
    const response = await client.evaluations.evaluate({
      evaluators: [{ evaluator: 'evaluator', criteria: 'x', explain_strategy: 'never' }],
      app: 'xx',
      capture: 'all',
      confidence_interval_strategy: 'none',
      dataset_id: 'dataset_id',
      dataset_sample_id: 'dataset_sample_id',
      evaluated_model_attachments: [
        { media_type: 'image/jpeg', url: 'https://example.com', usage_type: 'evaluated_model_system_prompt' },
      ],
      experiment_id: 'experiment_id',
      gold_answer: 'gold_answer',
      log_id: 'log_id',
      project_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      project_name: 'project_name',
      span_id: 'span_id',
      system_prompt: 'system_prompt',
      tags: {},
      task_context: ['string'],
      task_input: 'task_input',
      task_output: 'task_output',
      trace_id: 'trace_id',
    });
  });

  test('search', async () => {
    const responsePromise = client.evaluations.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
