/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getContractor = /* GraphQL */ `
  query GetContractor($id: ID!) {
    getContractor(id: $id) {
      id
      first_name
      last_name
      phone
      email
      business_id
      business_name
      license_number
      insurance_id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listContractors = /* GraphQL */ `
  query ListContractors(
    $filter: ModelContractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        phone
        email
        business_id
        business_name
        license_number
        insurance_id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
