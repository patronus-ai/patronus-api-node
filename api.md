# Datasets

Types:

- <code><a href="./src/resources/datasets/datasets.ts">CreateDatasetResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">GetDatasetsResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">ListDatasetsResponse</a></code>
- <code><a href="./src/resources/datasets/datasets.ts">UpdateDatasetResponse</a></code>

Methods:

- <code title="post /v1/datasets">client.datasets.<a href="./src/resources/datasets/datasets.ts">create</a>({ ...params }) -> CreateDatasetResponse</code>
- <code title="get /v1/datasets/{id}">client.datasets.<a href="./src/resources/datasets/datasets.ts">retrieve</a>(id) -> GetDatasetsResponse</code>
- <code title="patch /v1/datasets/{dataset_id}">client.datasets.<a href="./src/resources/datasets/datasets.ts">update</a>(datasetId, { ...params }) -> UpdateDatasetResponse</code>
- <code title="get /v1/datasets">client.datasets.<a href="./src/resources/datasets/datasets.ts">list</a>({ ...params }) -> ListDatasetsResponse</code>
- <code title="delete /v1/datasets/{id}">client.datasets.<a href="./src/resources/datasets/datasets.ts">delete</a>(id) -> void</code>

## Data

Types:

- <code><a href="./src/resources/datasets/data.ts">ListDatasetDataResponse</a></code>

Methods:

- <code title="get /v1/datasets/{id}/data">client.datasets.data.<a href="./src/resources/datasets/data.ts">retrieve</a>(id) -> ListDatasetDataResponse</code>

## JSONL

Types:

- <code><a href="./src/resources/datasets/jsonl.ts">JSONLRetrieveResponse</a></code>

Methods:

- <code title="get /v1/datasets/{id}/jsonl">client.datasets.jsonl.<a href="./src/resources/datasets/jsonl.ts">retrieve</a>(id) -> unknown</code>

## Csv

Types:

- <code><a href="./src/resources/datasets/csv.ts">CsvRetrieveResponse</a></code>

Methods:

- <code title="get /v1/datasets/{id}/csv">client.datasets.csv.<a href="./src/resources/datasets/csv.ts">retrieve</a>(id) -> unknown</code>

# Evaluations

Types:

- <code><a href="./src/resources/evaluations.ts">EvaluateResponse</a></code>

Methods:

- <code title="post /v1/evaluate">client.evaluations.<a href="./src/resources/evaluations.ts">evaluate</a>({ ...params }) -> EvaluateResponse</code>

# EvaluationResults

Types:

- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">CreateEvaluationResultsBatchResponse</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">EvaluateResultSearchResponse</a></code>
- <code><a href="./src/resources/evaluation-results/evaluation-results.ts">GetEvaluationResult</a></code>

Methods:

- <code title="get /v1/evaluation-results/{id}">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">retrieve</a>(id) -> GetEvaluationResult</code>
- <code title="post /v1/evaluation-results/batch">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">batchCreate</a>({ ...params }) -> CreateEvaluationResultsBatchResponse</code>
- <code title="post /v1/evaluation-results/{id}/evaluation-feedback">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">evaluationFeedback</a>(id, { ...params }) -> void</code>
- <code title="post /v1/evaluation-results/{id}/favorite">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">favorite</a>(id) -> void</code>
- <code title="delete /v1/evaluation-results/{id}/evaluation-feedback">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">removeEvaluationFeedback</a>(id) -> void</code>
- <code title="post /v1/evaluation-results/search">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">search</a>({ ...params }) -> EvaluateResultSearchResponse</code>
- <code title="delete /v1/evaluation-results/{id}/favorite">client.evaluationResults.<a href="./src/resources/evaluation-results/evaluation-results.ts">unfavorite</a>(id) -> void</code>

## Tags

Types:

- <code><a href="./src/resources/evaluation-results/tags.ts">ListTagsResponse</a></code>

Methods:

- <code title="get /v1/evaluation-results/tags">client.evaluationResults.tags.<a href="./src/resources/evaluation-results/tags.ts">list</a>() -> ListTagsResponse</code>

# EvaluatorProfiles

Types:

- <code><a href="./src/resources/evaluator-profiles.ts">AddEvaluatorProfileRevision</a></code>
- <code><a href="./src/resources/evaluator-profiles.ts">ArchiveEvaluatorProfileResponse</a></code>
- <code><a href="./src/resources/evaluator-profiles.ts">CreateEvaluatorProfileResponse</a></code>
- <code><a href="./src/resources/evaluator-profiles.ts">ListEvaluatorProfilesResponse</a></code>

Methods:

- <code title="post /v1/evaluator-profiles">client.evaluatorProfiles.<a href="./src/resources/evaluator-profiles.ts">create</a>({ ...params }) -> CreateEvaluatorProfileResponse</code>
- <code title="get /v1/evaluator-profiles">client.evaluatorProfiles.<a href="./src/resources/evaluator-profiles.ts">list</a>({ ...params }) -> ListEvaluatorProfilesResponse</code>
- <code title="patch /v1/evaluator-profiles/{public_id}/archive">client.evaluatorProfiles.<a href="./src/resources/evaluator-profiles.ts">archive</a>(publicId) -> ArchiveEvaluatorProfileResponse</code>
- <code title="post /v1/evaluator-profiles/{public_id}/revision">client.evaluatorProfiles.<a href="./src/resources/evaluator-profiles.ts">revision</a>(publicId, { ...params }) -> AddEvaluatorProfileRevision</code>

# EvaluatorCriteria

Types:

- <code><a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">ArchiveEvaluatorCriteriaResponse</a></code>
- <code><a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">CreateEvaluatorCriteriaResponse</a></code>
- <code><a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">ListEvaluatorCriteriaResponse</a></code>

Methods:

- <code title="post /v1/evaluator-criteria">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">create</a>({ ...params }) -> CreateEvaluatorCriteriaResponse</code>
- <code title="get /v1/evaluator-criteria">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">list</a>({ ...params }) -> ListEvaluatorCriteriaResponse</code>
- <code title="patch /v1/evaluator-criteria/{public_id}/archive">client.evaluatorCriteria.<a href="./src/resources/evaluator-criteria/evaluator-criteria.ts">archive</a>(publicId) -> ArchiveEvaluatorCriteriaResponse</code>

## Revision

Types:

- <code><a href="./src/resources/evaluator-criteria/revision.ts">AddEvaluatorCriteriaRevision</a></code>

Methods:

- <code title="post /v1/evaluator-criteria/{public_id}/revision">client.evaluatorCriteria.revision.<a href="./src/resources/evaluator-criteria/revision.ts">create</a>(publicId, { ...params }) -> AddEvaluatorCriteriaRevision</code>

# Experiments

Types:

- <code><a href="./src/resources/experiments.ts">CreateExperimentResponse</a></code>
- <code><a href="./src/resources/experiments.ts">GetExperimentResponse</a></code>
- <code><a href="./src/resources/experiments.ts">ListExperimentResponse</a></code>

Methods:

- <code title="post /v1/experiments">client.experiments.<a href="./src/resources/experiments.ts">create</a>({ ...params }) -> CreateExperimentResponse</code>
- <code title="get /v1/experiments/{id}">client.experiments.<a href="./src/resources/experiments.ts">retrieve</a>(id) -> GetExperimentResponse</code>
- <code title="get /v1/experiments">client.experiments.<a href="./src/resources/experiments.ts">list</a>({ ...params }) -> ListExperimentResponse</code>
- <code title="delete /v1/experiments/{id}">client.experiments.<a href="./src/resources/experiments.ts">delete</a>(id) -> void</code>

# Feedback

Types:

- <code><a href="./src/resources/feedback.ts">CreateFeedbackResponse</a></code>
- <code><a href="./src/resources/feedback.ts">ListFeedbackResponse</a></code>

Methods:

- <code title="get /v1/feedback">client.feedback.<a href="./src/resources/feedback.ts">retrieve</a>({ ...params }) -> ListFeedbackResponse</code>
- <code title="delete /v1/feedback/{id}">client.feedback.<a href="./src/resources/feedback.ts">delete</a>(id) -> void</code>
- <code title="post /v1/feedback">client.feedback.<a href="./src/resources/feedback.ts">give</a>({ ...params }) -> CreateFeedbackResponse</code>

# Projects

Types:

- <code><a href="./src/resources/projects.ts">GetProjectResponse</a></code>
- <code><a href="./src/resources/projects.ts">ListProjectsResponse</a></code>
- <code><a href="./src/resources/projects.ts">Project</a></code>

Methods:

- <code title="post /v1/projects">client.projects.<a href="./src/resources/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /v1/projects/{id}">client.projects.<a href="./src/resources/projects.ts">retrieve</a>(id) -> GetProjectResponse</code>
- <code title="get /v1/projects">client.projects.<a href="./src/resources/projects.ts">list</a>({ ...params }) -> ListProjectsResponse</code>
- <code title="delete /v1/projects/{id}">client.projects.<a href="./src/resources/projects.ts">delete</a>(id) -> void</code>

# Evaluators

Types:

- <code><a href="./src/resources/evaluators.ts">ListEvaluatorsResponse</a></code>

Methods:

- <code title="get /v1/evaluators">client.evaluators.<a href="./src/resources/evaluators.ts">list</a>() -> ListEvaluatorsResponse</code>

# Misc

Types:

- <code><a href="./src/resources/misc.ts">WhoAmIResponse</a></code>

Methods:

- <code title="get /v1/whoami">client.misc.<a href="./src/resources/misc.ts">whoami</a>() -> WhoAmIResponse</code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppResponse</a></code>

Methods:

- <code title="get /v1/apps">client.apps.<a href="./src/resources/apps.ts">list</a>({ ...params }) -> AppResponse</code>

# EvaluatorFamilies

Types:

- <code><a href="./src/resources/evaluator-families.ts">ListEvaluatorFamilyResponse</a></code>

Methods:

- <code title="get /v1/evaluator-families">client.evaluatorFamilies.<a href="./src/resources/evaluator-families.ts">list</a>() -> ListEvaluatorFamilyResponse</code>

# Annotations

Types:

- <code><a href="./src/resources/annotations.ts">AnnotateResponse</a></code>

Methods:

- <code title="post /v1/annotate">client.annotations.<a href="./src/resources/annotations.ts">annotate</a>({ ...params }) -> AnnotateResponse</code>

# AnnotationCriteria

Types:

- <code><a href="./src/resources/annotation-criteria.ts">CreateAnnotationCriteriaResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">GetAnnotationCriteriaResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">ListAnnotationCriteriaResponse</a></code>
- <code><a href="./src/resources/annotation-criteria.ts">UpdateAnnotationCriteriaResponse</a></code>

Methods:

- <code title="post /v1/annotation-criteria">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">create</a>({ ...params }) -> CreateAnnotationCriteriaResponse</code>
- <code title="get /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">retrieve</a>(id) -> GetAnnotationCriteriaResponse</code>
- <code title="put /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">update</a>(id, { ...params }) -> UpdateAnnotationCriteriaResponse</code>
- <code title="get /v1/annotation-criteria">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">list</a>({ ...params }) -> ListAnnotationCriteriaResponse</code>
- <code title="delete /v1/annotation-criteria/{id}">client.annotationCriteria.<a href="./src/resources/annotation-criteria.ts">delete</a>(id) -> void</code>

# PairwiseAnnotations

Types:

- <code><a href="./src/resources/pairwise-annotations.ts">CreatePairwiseAnnotationResponse</a></code>
- <code><a href="./src/resources/pairwise-annotations.ts">GetBatchPairwiseAnnotationsResponse</a></code>
- <code><a href="./src/resources/pairwise-annotations.ts">ListPairwiseAnnotationsResponse</a></code>

Methods:

- <code title="post /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">create</a>({ ...params }) -> CreatePairwiseAnnotationResponse</code>
- <code title="get /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">list</a>({ ...params }) -> ListPairwiseAnnotationsResponse</code>
- <code title="delete /v1/pairwise-annotations">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">delete</a>({ ...params }) -> void</code>
- <code title="post /v1/pairwise-annotations/get-batch">client.pairwiseAnnotations.<a href="./src/resources/pairwise-annotations.ts">getBatch</a>({ ...params }) -> GetBatchPairwiseAnnotationsResponse</code>
