// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluationResults', () => {
  test('retrieve', async () => {
    const responsePromise = client.evaluationResults.retrieve(0);
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
    await expect(client.evaluationResults.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('batchCreate: only required params', async () => {
    const responsePromise = client.evaluationResults.batchCreate({
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

  test('batchCreate: required and optional params', async () => {
    const response = await client.evaluationResults.batchCreate({
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

  test('evaluationFeedback: only required params', async () => {
    const responsePromise = client.evaluationResults.evaluationFeedback(0, { feedback: 'positive' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('evaluationFeedback: required and optional params', async () => {
    const response = await client.evaluationResults.evaluationFeedback(0, { feedback: 'positive' });
  });

  test('favorite', async () => {
    const responsePromise = client.evaluationResults.favorite(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('favorite: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.evaluationResults.favorite(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      PatronusAPI.NotFoundError,
    );
  });

  test('removeEvaluationFeedback', async () => {
    const responsePromise = client.evaluationResults.removeEvaluationFeedback(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('removeEvaluationFeedback: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationResults.removeEvaluationFeedback(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });

  test('search', async () => {
    const responsePromise = client.evaluationResults.search({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unfavorite', async () => {
    const responsePromise = client.evaluationResults.unfavorite(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('unfavorite: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.evaluationResults.unfavorite(0, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(PatronusAPI.NotFoundError);
  });
});
