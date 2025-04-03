# PatronusAPI

Types:

- <code><a href="./src/resources/top-level.ts">AnnotateResponse</a></code>
- <code><a href="./src/resources/top-level.ts">EvaluateResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListAppsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEvaluatorFamiliesResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ListEvaluatorsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">WhoamiResponse</a></code>

Methods:

- <code title="post /v1/annotate">client.<a href="./src/index.ts">annotate</a>({ ...params }) -> AnnotateResponse</code>
- <code title="post /v1/evaluate">client.<a href="./src/index.ts">evaluate</a>({ ...params }) -> EvaluateResponse</code>
- <code title="get /v1/apps">client.<a href="./src/index.ts">listApps</a>({ ...params }) -> ListAppsResponse</code>
- <code title="get /v1/evaluator-families">client.<a href="./src/index.ts">listEvaluatorFamilies</a>() -> ListEvaluatorFamiliesResponse</code>
- <code title="get /v1/evaluators">client.<a href="./src/index.ts">listEvaluators</a>() -> ListEvaluatorsResponse</code>
- <code title="get /v1/whoami">client.<a href="./src/index.ts">whoami</a>() -> WhoamiResponse</code>

# Datasets

Types:

- <code><a href="./src/resources/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetHasValues</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetType</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetDownloadCsvResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetDownloadJSONLResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetListDataResponse</a></code>
- <code><a href="./src/resources/datasets.ts">DatasetUploadResponse</a></code>

Methods:

- <code title="get /v1/datasets/{id}">client.datasets.<a href="./src/resources/datasets.ts">retrieve</a>(id) -> DatasetRetrieveResponse</code>
- <code title="patch /v1/datasets/{dataset_id}">client.datasets.<a href="./src/resources/datasets.ts">update</a>(datasetId, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /v1/datasets">client.datasets.<a href="./src/resources/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="delete /v1/datasets/{id}">client.datasets.<a href="./src/resources/datasets.ts">delete</a>(id) -> void</code>
- <code title="get /v1/datasets/{id}/csv">client.datasets.<a href="./src/resources/datasets.ts">downloadCsv</a>(id) -> string</code>
- <code title="get /v1/datasets/{id}/jsonl">client.datasets.<a href="./src/resources/datasets.ts">downloadJSONL</a>(id) -> string</code>
- <code title="get /v1/datasets/{id}/data">client.datasets.<a href="./src/resources/datasets.ts">listData</a>(id) -> DatasetListDataResponse</code>
- <code title="post /v1/datasets">client.datasets.<a href="./src/resources/datasets.ts">upload</a>({ ...params }) -> DatasetUploadResponse</code>

# EvaluationResults

Types:

- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationExplainStrategies</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationResult</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationResultRetrieveResponse</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationResultCreateBatchResponse</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationResultListTagsResponse</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluationResultSearchResponse</a></code>

Methods:

- <code title="get /v1/evaluation-results/{id}">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">retrieve</a>(id) -> EvaluationResultRetrieveResponse</code>
- <code title="post /v1/evaluation-results/batch">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">createBatch</a>({ ...params }) -> EvaluationResultCreateBatchResponse</code>
- <code title="get /v1/evaluation-results/tags">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">listTags</a>() -> EvaluationResultListTagsResponse</code>
- <code title="post /v1/evaluation-results/search">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">search</a>({ ...params }) -> EvaluationResultSearchResponse</code>

## Favorite

Methods:

- <code title="post /v1/evaluation-results/{id}/favorite">client.evaluationResults.favorite.<a href="./src/resources/evaluation-results/favorite.ts">mark</a>(id) -> void</code>
- <code title="delete /v1/evaluation-results/{id}/favorite">client.evaluationResults.favorite.<a href="./src/resources/evaluation-results/favorite.ts">unmark</a>(id) -> void</code>

## EvaluationFeedback

Methods:

- <code title="delete /v1/evaluation-results/{id}/evaluation-feedback">client.evaluationResults.evaluationFeedback.<a href="./src/resources/evaluation-results/evaluation-feedback.ts">delete</a>(id) -> void</code>
- <code title="post /v1/evaluation-results/{id}/evaluation-feedback">client.evaluationResults.evaluationFeedback.<a href="./src/resources/evaluation-results/evaluation-feedback.ts">submit</a>(id, { ...params }) -> void</code>

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

Types:

- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCategory</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCriteria</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationType</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCriterionCreateResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCriterionRetrieveResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCriterionUpdateResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">AnnotationCriterionListResponse</a></code>

Methods:

- <code title="post /v1/annotation-criteria">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">create</a>({ ...params }) -> AnnotationCriterionCreateResponse</code>
- <code title="get /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">retrieve</a>(id) -> AnnotationCriterionRetrieveResponse</code>
- <code title="put /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">update</a>(id, { ...params }) -> AnnotationCriterionUpdateResponse</code>
- <code title="get /v1/annotation-criteria">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">list</a>({ ...params }) -> AnnotationCriterionListResponse</code>
- <code title="delete /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">delete</a>(id) -> void</code>

# PairwiseAnnotations

Types:

- <code><a href="./src/resources/pairwise-annotations.ts">PairwiseAnnotation</a></code>
- <code><a href="./src/resources/pairwise-annotations.ts">PairwiseAnnotationCreateResponse</a></code>
- <code><a href="./src/resources/pairwise-annotations.ts">PairwiseAnnotationListResponse</a></code>
- <code><a href="./src/resources/pairwise-annotations.ts">PairwiseAnnotationGetBatchResponse</a></code>

Methods:

- <code title="post /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">create</a>({ ...params }) -> PairwiseAnnotationCreateResponse</code>
- <code title="get /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">list</a>({ ...params }) -> PairwiseAnnotationListResponse</code>
- <code title="delete /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /v1/pairwise-annotations/get-batch">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">getBatch</a>({ ...params }) -> PairwiseAnnotationGetBatchResponse</code>

# Logs

# Spans

# Evaluations
