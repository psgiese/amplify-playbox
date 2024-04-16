/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createContractor = /* GraphQL */ `
  mutation CreateContractor(
    $input: CreateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    createContractor(input: $input, condition: $condition) {
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
export const updateContractor = /* GraphQL */ `
  mutation UpdateContractor(
    $input: UpdateContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    updateContractor(input: $input, condition: $condition) {
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
export const deleteContractor = /* GraphQL */ `
  mutation DeleteContractor(
    $input: DeleteContractorInput!
    $condition: ModelContractorConditionInput
  ) {
    deleteContractor(input: $input, condition: $condition) {
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
