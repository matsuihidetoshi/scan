/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
      type
      id
      content
      timestamp
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
      type
      id
      content
      timestamp
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
      type
      id
      content
      timestamp
      owner
    }
  }
`;
