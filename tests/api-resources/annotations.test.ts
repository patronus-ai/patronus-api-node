// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import PatronusAPI from 'patronus-api';
import { Response } from 'node-fetch';

const client = new PatronusAPI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource annotations', () => {
  test('annotate: only required params', async () => {
    const responsePromise = client.annotations.annotate({
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
    const response = await client.annotations.annotate({
      annotation_criteria_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      log_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      explanation: 'explanation',
      value_pass: true,
      value_score: 0,
      value_text: 'value_text',
    });
  });
});
