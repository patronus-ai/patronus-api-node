// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource evaluations', () => {
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
      tags: {},
      trace_id: 'trace_id',
    });
  });
});
