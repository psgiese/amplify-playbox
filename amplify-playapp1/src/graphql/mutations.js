/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusinessContactRelationships = /* GraphQL */ `
  mutation CreateBusinessContactRelationships(
    $input: CreateBusinessContactRelationshipsInput!
    $condition: ModelBusinessContactRelationshipsConditionInput
  ) {
    createBusinessContactRelationships(input: $input, condition: $condition) {
      id
      business_id
      contact_id
      contact_role_name
      relationship_created_on
      is_active_relationship
      relationship_ended_on
      relationship_ended_by
      businessesID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBusinessContactRelationships = /* GraphQL */ `
  mutation UpdateBusinessContactRelationships(
    $input: UpdateBusinessContactRelationshipsInput!
    $condition: ModelBusinessContactRelationshipsConditionInput
  ) {
    updateBusinessContactRelationships(input: $input, condition: $condition) {
      id
      business_id
      contact_id
      contact_role_name
      relationship_created_on
      is_active_relationship
      relationship_ended_on
      relationship_ended_by
      businessesID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBusinessContactRelationships = /* GraphQL */ `
  mutation DeleteBusinessContactRelationships(
    $input: DeleteBusinessContactRelationshipsInput!
    $condition: ModelBusinessContactRelationshipsConditionInput
  ) {
    deleteBusinessContactRelationships(input: $input, condition: $condition) {
      id
      business_id
      contact_id
      contact_role_name
      relationship_created_on
      is_active_relationship
      relationship_ended_on
      relationship_ended_by
      businessesID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBusinessTypes = /* GraphQL */ `
  mutation CreateBusinessTypes(
    $input: CreateBusinessTypesInput!
    $condition: ModelBusinessTypesConditionInput
  ) {
    createBusinessTypes(input: $input, condition: $condition) {
      id
      business_type_name
      is_active
      created_on
      created_by
      Businesses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBusinessTypes = /* GraphQL */ `
  mutation UpdateBusinessTypes(
    $input: UpdateBusinessTypesInput!
    $condition: ModelBusinessTypesConditionInput
  ) {
    updateBusinessTypes(input: $input, condition: $condition) {
      id
      business_type_name
      is_active
      created_on
      created_by
      Businesses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBusinessTypes = /* GraphQL */ `
  mutation DeleteBusinessTypes(
    $input: DeleteBusinessTypesInput!
    $condition: ModelBusinessTypesConditionInput
  ) {
    deleteBusinessTypes(input: $input, condition: $condition) {
      id
      business_type_name
      is_active
      created_on
      created_by
      Businesses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBusinesses = /* GraphQL */ `
  mutation CreateBusinesses(
    $input: CreateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    createBusinesses(input: $input, condition: $condition) {
      id
      business_name
      address
      city
      state
      zip
      business_phone
      business_email
      website
      license_registration_id
      license_issued_by
      license_expiration_date
      general_liability_insurance
      license_registration_name
      business_type_id
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBusinesses = /* GraphQL */ `
  mutation UpdateBusinesses(
    $input: UpdateBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    updateBusinesses(input: $input, condition: $condition) {
      id
      business_name
      address
      city
      state
      zip
      business_phone
      business_email
      website
      license_registration_id
      license_issued_by
      license_expiration_date
      general_liability_insurance
      license_registration_name
      business_type_id
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBusinesses = /* GraphQL */ `
  mutation DeleteBusinesses(
    $input: DeleteBusinessesInput!
    $condition: ModelBusinessesConditionInput
  ) {
    deleteBusinesses(input: $input, condition: $condition) {
      id
      business_name
      address
      city
      state
      zip
      business_phone
      business_email
      website
      license_registration_id
      license_issued_by
      license_expiration_date
      general_liability_insurance
      license_registration_name
      business_type_id
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContactTypes = /* GraphQL */ `
  mutation CreateContactTypes(
    $input: CreateContactTypesInput!
    $condition: ModelContactTypesConditionInput
  ) {
    createContactTypes(input: $input, condition: $condition) {
      id
      contact_type_name
      is_active
      created_on
      created_by
      Contacts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContactTypes = /* GraphQL */ `
  mutation UpdateContactTypes(
    $input: UpdateContactTypesInput!
    $condition: ModelContactTypesConditionInput
  ) {
    updateContactTypes(input: $input, condition: $condition) {
      id
      contact_type_name
      is_active
      created_on
      created_by
      Contacts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContactTypes = /* GraphQL */ `
  mutation DeleteContactTypes(
    $input: DeleteContactTypesInput!
    $condition: ModelContactTypesConditionInput
  ) {
    deleteContactTypes(input: $input, condition: $condition) {
      id
      contact_type_name
      is_active
      created_on
      created_by
      Contacts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContractorProjectRelationships = /* GraphQL */ `
  mutation CreateContractorProjectRelationships(
    $input: CreateContractorProjectRelationshipsInput!
    $condition: ModelContractorProjectRelationshipsConditionInput
  ) {
    createContractorProjectRelationships(input: $input, condition: $condition) {
      id
      project_id
      contact_id
      work_start_date
      work_end_date
      review_id
      marked_complete_by
      marked_complete_on
      work_item_id
      projectID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContractorProjectRelationships = /* GraphQL */ `
  mutation UpdateContractorProjectRelationships(
    $input: UpdateContractorProjectRelationshipsInput!
    $condition: ModelContractorProjectRelationshipsConditionInput
  ) {
    updateContractorProjectRelationships(input: $input, condition: $condition) {
      id
      project_id
      contact_id
      work_start_date
      work_end_date
      review_id
      marked_complete_by
      marked_complete_on
      work_item_id
      projectID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContractorProjectRelationships = /* GraphQL */ `
  mutation DeleteContractorProjectRelationships(
    $input: DeleteContractorProjectRelationshipsInput!
    $condition: ModelContractorProjectRelationshipsConditionInput
  ) {
    deleteContractorProjectRelationships(input: $input, condition: $condition) {
      id
      project_id
      contact_id
      work_start_date
      work_end_date
      review_id
      marked_complete_by
      marked_complete_on
      work_item_id
      projectID
      contactID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
      id
      address
      bath_count
      bed_count
      projected_start_date
      actual_start_date
      builder_id
      city
      state
      actual_inspection_date
      lot_block
      model_name
      permit_number
      projected_list_price
      projected_completion_date
      actual_completion_date
      subdivision
      approximate_latitude
      approximate_longitude
      approximate_sqft_house
      assigned_super_id
      project_notes
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
      id
      address
      bath_count
      bed_count
      projected_start_date
      actual_start_date
      builder_id
      city
      state
      actual_inspection_date
      lot_block
      model_name
      permit_number
      projected_list_price
      projected_completion_date
      actual_completion_date
      subdivision
      approximate_latitude
      approximate_longitude
      approximate_sqft_house
      assigned_super_id
      project_notes
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
      id
      address
      bath_count
      bed_count
      projected_start_date
      actual_start_date
      builder_id
      city
      state
      actual_inspection_date
      lot_block
      model_name
      permit_number
      projected_list_price
      projected_completion_date
      actual_completion_date
      subdivision
      approximate_latitude
      approximate_longitude
      approximate_sqft_house
      assigned_super_id
      project_notes
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      primary_phone
      business_id
      business_name
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      contact_type_name
      contact_type_id
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        nextToken
        __typename
      }
      contacttypesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      primary_phone
      business_id
      business_name
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      contact_type_name
      contact_type_id
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        nextToken
        __typename
      }
      contacttypesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      first_name
      last_name
      primary_phone
      business_id
      business_name
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      contact_type_name
      contact_type_id
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        nextToken
        __typename
      }
      contacttypesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
