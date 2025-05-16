# EvaluatorCriteria

Types:

- <code><a href="./src/resources/evaluator-criteria.ts">EvaluatorCriteria</a></code>
- <code><a href="./src/resources/evaluator-criteria.ts">EvaluatorCriterionCreateResponse</a></code>
- <code><a href="./src/resources/evaluator-criteria.ts">EvaluatorCriterionListResponse</a></code>
- <code><a href="./src/resources/evaluator-criteria.ts">EvaluatorCriterionAddRevisionResponse</a></code>
- <code><a href="./src/resources/evaluator-criteria.ts">EvaluatorCriterionArchiveResponse</a></code>

Methods:

- <code title="post /v1/evaluator-criteria">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria.ts">create</a>({ ...params }) -> EvaluatorCriterionCreateResponse</code>
- <code title="get /v1/evaluator-criteria">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria.ts">list</a>({ ...params }) -> EvaluatorCriterionListResponse</code>
- <code title="post /v1/evaluator-criteria/{public_id}/revision">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria.ts">addRevision</a>(publicId, { ...params }) -> EvaluatorCriterionAddRevisionResponse</code>
- <code title="patch /v1/evaluator-criteria/{public_id}/archive">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria.ts">archive</a>(publicId) -> EvaluatorCriterionArchiveResponse</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">Experiment</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentCreateResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentRetrieveResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ExperimentListResponse</a></code>

Methods:

- <code title="post /v1/experiments">client.experiments.<a href="./src/resources/experiments.ts">create</a>({ ...params }) -> ExperimentCreateResponse</code>
- <code title="get /v1/experiments/{id}">client.experiments.<a href="./src/resources/experiments.ts">retrieve</a>(id) -> ExperimentRetrieveResponse</code>
- <code title="get /v1/experiments">client.experiments.<a href="./src/resources/experiments.ts">list</a>({ ...params }) -> ExperimentListResponse</code>
- <code title="delete /v1/experiments/{id}">client.experiments.<a href="./src/resources/experiments.ts">delete</a>(id) -> void</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">Project</a></code>
- <code><a href="./src/resources/projects.ts">ProjectRetrieveResponse</a></code>
- <code><a href="./src/resources/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/projects/{id}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(id) -> ProjectRetrieveResponse</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /v1/projects/{id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(id) -> void</code>

# Evaluations

Types:

- <code><a href="./src/resources/evaluations.ts">EvaluationRetrieveResponse</a></code>
- <code><a href="./src/resources/evaluations.ts">EvaluationBatchCreateResponse</a></code>
- <code><a href="./src/resources/evaluations.ts">EvaluationEvaluateResponse</a></code>
- <code><a href="./src/resources/evaluations.ts">EvaluationSearchResponse</a></code>

Methods:

- <code title="get /v1/evaluations/{id}">client.evaluations.<a href="./src/resources/evaluations.ts">retrieve</a>(id) -> EvaluationRetrieveResponse</code>
- <code title="delete /v1/evaluations/{id}">client.evaluations.<a href="./src/resources/evaluations.ts">delete</a>(id) -> void</code>
- <code title="post /v1/evaluations/batch">client.evaluations.<a href="./src/resources/evaluations.ts">batchCreate</a>({ ...params }) -> EvaluationBatchCreateResponse</code>
- <code title="post /v1/evaluate">client.evaluations.<a href="./src/resources/evaluations.ts">evaluate</a>({ ...params }) -> EvaluationEvaluateResponse</code>
- <code title="post /v1/evaluations/search">client.evaluations.<a href="./src/resources/evaluations.ts">search</a>({ ...params }) -> EvaluationSearchResponse</code>

# Otel

## Logs

Types:

- <code><a href="./src/resources/otel/logs.ts">LogSearchResponse</a></code>

Methods:

- <code title="post /v1/otel/logs/search">client.otel.logs.<a href="./src/resources/otel/logs.ts">search</a>({ ...params }) -> LogSearchResponse</code>

## Spans

Types:

- <code><a href="./src/resources/otel/spans.ts">SpanSearchResponse</a></code>

Methods:

- <code title="post /v1/otel/spans/search">client.otel.spans.<a href="./src/resources/otel/spans.ts">search</a>({ ...params }) -> SpanSearchResponse</code>

# TraceInsight

Types:

- <code><a href="./src/resources/trace-insight.ts">TraceInsightListResponse</a></code>
- <code><a href="./src/resources/trace-insight.ts">TraceInsightCreateJobResponse</a></code>
- <code><a href="./src/resources/trace-insight.ts">TraceInsightListJobsResponse</a></code>

Methods:

- <code title="get /v1/trace-insight">client.traceInsight.<a href="./src/resources/trace-insight.ts">list</a>({ ...params }) -> TraceInsightListResponse</code>
- <code title="post /v1/trace-insight-jobs">client.traceInsight.<a href="./src/resources/trace-insight.ts">createJob</a>({ ...params }) -> TraceInsightCreateJobResponse</code>
- <code title="get /v1/trace-insight-jobs">client.traceInsight.<a href="./src/resources/trace-insight.ts">listJobs</a>({ ...params }) -> TraceInsightListJobsResponse</code>

# Evaluators

Types:

- <code><a href="./src/resources/evaluators.ts">EvaluatorListResponse</a></code>
- <code><a href="./src/resources/evaluators.ts">EvaluatorListFamiliesResponse</a></code>

Methods:

- <code title="get /v1/evaluators">client.evaluators.<a href="./src/resources/evaluators.ts">list</a>() -> EvaluatorListResponse</code>
- <code title="get /v1/evaluator-families">client.evaluators.<a href="./src/resources/evaluators.ts">listFamilies</a>() -> EvaluatorListFamiliesResponse</code>

# Whoami

Types:

- <code><a href="./src/resources/whoami.ts">WhoamiRetrieveResponse</a></code>

Methods:

- <code title="get /v1/whoami">client.whoami.<a href="./src/resources/whoami.ts">retrieve</a>() -> WhoamiRetrieveResponse</code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppListResponse</a></code>

Methods:

- <code title="get /v1/apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppListResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">PromptCreateRevisionResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptListDefinitionsResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptListRevisionsResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptUpdateDefinitionResponse</a></code>

Methods:

- <code title="post /v1/prompt-revisions">client.prompts.<a href="./src/resources/prompts.ts">createRevision</a>({ ...params }) -> PromptCreateRevisionResponse</code>
- <code title="delete /v1/prompt-definitions">client.prompts.<a href="./src/resources/prompts.ts">deleteDefinitions</a>({ ...params }) -> void</code>
- <code title="get /v1/prompt-definitions">client.prompts.<a href="./src/resources/prompts.ts">listDefinitions</a>({ ...params }) -> PromptListDefinitionsResponse</code>
- <code title="get /v1/prompt-revisions">client.prompts.<a href="./src/resources/prompts.ts">listRevisions</a>({ ...params }) -> PromptListRevisionsResponse</code>
- <code title="post /v1/prompt-revisions/{revision_id}/remove-labels">client.prompts.<a href="./src/resources/prompts.ts">removeLabels</a>(revisionId, { ...params }) -> void</code>
- <code title="post /v1/prompt-revisions/{revision_id}/set-labels">client.prompts.<a href="./src/resources/prompts.ts">setLabels</a>(revisionId, { ...params }) -> void</code>
- <code title="patch /v1/prompt-definitions/{prompt_id}">client.prompts.<a href="./src/resources/prompts.ts">updateDefinition</a>(promptId, { ...params }) -> PromptUpdateDefinitionResponse</code>
