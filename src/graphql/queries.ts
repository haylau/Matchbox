/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNewsletterEmailModel = /* GraphQL */ `
  query GetNewsletterEmailModel($id: ID!) {
    getNewsletterEmailModel(id: $id) {
      id
      email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listNewsletterEmailModels = /* GraphQL */ `
  query ListNewsletterEmailModels(
    $filter: ModelNewsletterEmailModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewsletterEmailModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNewsletterEmailModels = /* GraphQL */ `
  query SyncNewsletterEmailModels(
    $filter: ModelNewsletterEmailModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNewsletterEmailModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchNewsletterEmailModels = /* GraphQL */ `
  query SearchNewsletterEmailModels(
    $filter: SearchableNewsletterEmailModelFilterInput
    $sort: [SearchableNewsletterEmailModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableNewsletterEmailModelAggregationInput]
  ) {
    searchNewsletterEmailModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getPostsModel = /* GraphQL */ `
  query GetPostsModel($id: ID!) {
    getPostsModel(id: $id) {
      id
      post_title
      description
      project_link
      image_link
      post_date
      userID
      lang_tag
      dev_type_tag
      interest_tag
      size_tag
      framework_tag
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPostsModels = /* GraphQL */ `
  query ListPostsModels(
    $filter: ModelPostsModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post_title
        description
        project_link
        image_link
        post_date
        userID
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostsModels = /* GraphQL */ `
  query SyncPostsModels(
    $filter: ModelPostsModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostsModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        post_title
        description
        project_link
        image_link
        post_date
        userID
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchPostsModels = /* GraphQL */ `
  query SearchPostsModels(
    $filter: SearchablePostsModelFilterInput
    $sort: [SearchablePostsModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePostsModelAggregationInput]
  ) {
    searchPostsModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        post_title
        description
        project_link
        image_link
        post_date
        userID
        lang_tag
        dev_type_tag
        interest_tag
        size_tag
        framework_tag
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getUsersModel = /* GraphQL */ `
  query GetUsersModel($id: ID!) {
    getUsersModel(id: $id) {
      id
      user_name
      email
      password
      user_posts {
        nextToken
        startedAt
      }
      first_name
      last_name
      user_creation_date
      dahublink
      saved_posts
      hide_posts
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUsersModels = /* GraphQL */ `
  query ListUsersModels(
    $filter: ModelUsersModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsersModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_name
        email
        password
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsersModels = /* GraphQL */ `
  query SyncUsersModels(
    $filter: ModelUsersModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsersModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_name
        email
        password
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const searchUsersModels = /* GraphQL */ `
  query SearchUsersModels(
    $filter: SearchableUsersModelFilterInput
    $sort: [SearchableUsersModelSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUsersModelAggregationInput]
  ) {
    searchUsersModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        user_name
        email
        password
        first_name
        last_name
        user_creation_date
        dahublink
        saved_posts
        hide_posts
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
