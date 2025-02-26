// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluationResults', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.evaluationResults.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluationResults.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('createBatch: only required params', async () => {
    const responsePromise = client.evaluationResults.createBatch({
      evaluation_results: [{ evaluator_id: 'evaluator_id' }],
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
  test.skip('createBatch: required and optional params', async () => {
    const response = await client.evaluationResults.createBatch({
      evaluation_results: [
        {
          evaluator_id: 'evaluator_id',
          app: 'app',
          criteria: 'criteria',
          dataset_id: 'dataset_id',
          dataset_sample_id: 0,
          evaluated_model_attachments: [{ media_type: 'media_type', url: 'url', usage_type: 'usage_type' }],
          evaluated_model_gold_answer: 'evaluated_model_gold_answer',
          evaluated_model_input: 'evaluated_model_input',
          evaluated_model_name: 'x',
          evaluated_model_output: 'evaluated_model_output',
          evaluated_model_params: { foo: 0 },
          evaluated_model_provider: 'x',
          evaluated_model_retrieved_context: ['string'],
          evaluated_model_selected_model: 'x',
          evaluated_model_system_prompt: 'evaluated_model_system_prompt',
          evaluation_duration: 'evaluation_duration',
          evaluation_metadata: {},
          experiment_id: 'experiment_id',
          explanation: 'explanation',
          explanation_duration: 'explanation_duration',
          pass: true,
          profile_name: 'profile_name',
          score_raw: 0,
          tags: {},
          text_output: 'text_output',
        },
      ],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listTags', async () => {
    const responsePromise = client.evaluationResults.listTags();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTags: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluationResults.listTags({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('search', async () => {
    const responsePromise = client.evaluationResults.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
