# PatronusAPI

Types:

- <code><a href="./src/resources/top-level.ts">EvaluateResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListAppsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEvaluatorFamiliesResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEvaluatorsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiResponse</a></code>

Methods:

- <code title="post /v1/evaluate">client.<a href="./src/index.ts">evaluate</a>({ ...params }) -> EvaluateResponse</code>
- <code title="get /v1/apps">client.<a href="./src/index.ts">listApps</a>({ ...params }) -> ListAppsResponse</code>
- <code title="get /v1/evaluator-families">client.<a href="./src/index.ts">listEvaluatorFamilies</a>() -> ListEvaluatorFamiliesResponse</code>
- <code title="get /v1/evaluators">client.<a href="./src/index.ts">listEvaluators</a>() -> ListEvaluatorsResponse</code>
- <code title="get /v1/whoami">client.<a href="./src/index.ts">whoami</a>() -> WhoamiResponse</code>

# Datasets

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

# AnnotationCriteria

# PairwiseAnnotations

# Evaluations

Types:

- <code><a href="./src/resources/evaluations.ts">EvaluationRetrieveResponse</a></code>
- <code><a href="./src/resources/evaluations.ts">EvaluationBatchCreateResponse</a></code>
- <code><a href="./src/resources/evaluations.ts">EvaluationSearchResponse</a></code>

Methods:

- <code title="get /v1/evaluations/{id}">client.evaluations.<a href="./src/resources/evaluations.ts">retrieve</a>(id) -> EvaluationRetrieveResponse</code>
- <code title="delete /v1/evaluations/{id}">client.evaluations.<a href="./src/resources/evaluations.ts">delete</a>(id) -> void</code>
- <code title="post /v1/evaluations/batch">client.evaluations.<a href="./src/resources/evaluations.ts">batchCreate</a>({ ...params }) -> EvaluationBatchCreateResponse</code>
- <code title="post /v1/evaluations/search">client.evaluations.<a href="./src/resources/evaluations.ts">search</a>({ ...params }) -> EvaluationSearchResponse</code>

# Prompts

Types:

- <code><a href="./src/resources/prompts.ts">PromptCreateResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptUpdateResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptListResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptDeleteResponse</a></code>
- <code><a href="./src/resources/prompts.ts">PromptCreateRevisionResponse</a></code>

Methods:

- <code title="post /v1/prompts">client.prompts.<a href="./src/resources/prompts.ts">create</a>({ ...params }) -> PromptCreateResponse</code>
- <code title="patch /v1/prompts/{name}">client.prompts.<a href="./src/resources/prompts.ts">update</a>(pathName, { ...params }) -> unknown</code>
- <code title="get /v1/prompts">client.prompts.<a href="./src/resources/prompts.ts">list</a>({ ...params }) -> PromptListResponse</code>
- <code title="delete /v1/prompts/{name}">client.prompts.<a href="./src/resources/prompts.ts">delete</a>(name, { ...params }) -> unknown</code>
- <code title="post /v1/prompts/{name}/revision">client.prompts.<a href="./src/resources/prompts.ts">createRevision</a>(name, { ...params }) -> PromptCreateRevisionResponse</code>
- <code title="post /v1/prompts/{name}/set-labels">client.prompts.<a href="./src/resources/prompts.ts">setLabels</a>(name, { ...params }) -> void</code>

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

# TraceInsightJobs

Types:

- <code><a href="./src/resources/trace-insight-jobs.ts">TraceInsightJobCreateResponse</a></code>
- <code><a href="./src/resources/trace-insight-jobs.ts">TraceInsightJobListResponse</a></code>

Methods:

- <code title="post /v1/trace-insight-jobs">client.traceInsightJobs.<a href="./src/resources/trace-insight-jobs.ts">create</a>({ ...params }) -> TraceInsightJobCreateResponse</code>
- <code title="get /v1/trace-insight-jobs">client.traceInsightJobs.<a href="./src/resources/trace-insight-jobs.ts">list</a>({ ...params }) -> TraceInsightJobListResponse</code>

# TraceInsight

Types:

- <code><a href="./src/resources/trace-insight.ts">TraceInsightListResponse</a></code>

Methods:

- <code title="get /v1/trace-insight">client.traceInsight.<a href="./src/resources/trace-insight.ts">list</a>({ ...params }) -> TraceInsightListResponse</code>
