/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusinessContactRelationships = /* GraphQL */ `
  subscription OnCreateBusinessContactRelationships(
    $filter: ModelSubscriptionBusinessContactRelationshipsFilterInput
  ) {
    onCreateBusinessContactRelationships(filter: $filter) {
      id
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
export const onUpdateBusinessContactRelationships = /* GraphQL */ `
  subscription OnUpdateBusinessContactRelationships(
    $filter: ModelSubscriptionBusinessContactRelationshipsFilterInput
  ) {
    onUpdateBusinessContactRelationships(filter: $filter) {
      id
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
export const onDeleteBusinessContactRelationships = /* GraphQL */ `
  subscription OnDeleteBusinessContactRelationships(
    $filter: ModelSubscriptionBusinessContactRelationshipsFilterInput
  ) {
    onDeleteBusinessContactRelationships(filter: $filter) {
      id
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
export const onCreateBusinessTypes = /* GraphQL */ `
  subscription OnCreateBusinessTypes(
    $filter: ModelSubscriptionBusinessTypesFilterInput
  ) {
    onCreateBusinessTypes(filter: $filter) {
      id
      business_type_name
      is_active
      created_by
      Businesses {
        items {
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
          business_type_name
          businesstypesID
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          Projects {
            items {
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
              inspector_id
              project_name
              created_by
              zip
              businessesID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBusinessTypes = /* GraphQL */ `
  subscription OnUpdateBusinessTypes(
    $filter: ModelSubscriptionBusinessTypesFilterInput
  ) {
    onUpdateBusinessTypes(filter: $filter) {
      id
      business_type_name
      is_active
      created_by
      Businesses {
        items {
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
          business_type_name
          businesstypesID
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          Projects {
            items {
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
              inspector_id
              project_name
              created_by
              zip
              businessesID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBusinessTypes = /* GraphQL */ `
  subscription OnDeleteBusinessTypes(
    $filter: ModelSubscriptionBusinessTypesFilterInput
  ) {
    onDeleteBusinessTypes(filter: $filter) {
      id
      business_type_name
      is_active
      created_by
      Businesses {
        items {
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
          business_type_name
          businesstypesID
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          Projects {
            items {
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
              inspector_id
              project_name
              created_by
              zip
              businessesID
              createdAt
              updatedAt
              __typename
            }
            nextToken
            __typename
          }
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBusinesses = /* GraphQL */ `
  subscription OnCreateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onCreateBusinesses(filter: $filter) {
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
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      Projects {
        items {
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
            items {
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
            nextToken
            __typename
          }
          inspector_id
          project_name
          created_by
          zip
          businessesID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBusinesses = /* GraphQL */ `
  subscription OnUpdateBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onUpdateBusinesses(filter: $filter) {
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
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      Projects {
        items {
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
            items {
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
            nextToken
            __typename
          }
          inspector_id
          project_name
          created_by
          zip
          businessesID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBusinesses = /* GraphQL */ `
  subscription OnDeleteBusinesses(
    $filter: ModelSubscriptionBusinessesFilterInput
  ) {
    onDeleteBusinesses(filter: $filter) {
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
      business_type_name
      businesstypesID
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      Projects {
        items {
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
            items {
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
            nextToken
            __typename
          }
          inspector_id
          project_name
          created_by
          zip
          businessesID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContactTypes = /* GraphQL */ `
  subscription OnCreateContactTypes(
    $filter: ModelSubscriptionContactTypesFilterInput
  ) {
    onCreateContactTypes(filter: $filter) {
      id
      contact_type_name
      is_active
      created_by
      Contacts {
        items {
          id
          first_name
          last_name
          primary_phone
          address
          city
          state
          zip
          allowed_actions
          ok_to_bid
          secondary_phone
          secondary_email
          website
          ContractorProjectRelationships {
            items {
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
            nextToken
            __typename
          }
          primary_email
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          contacttypesID
          bid_email
          bid_phone
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateContactTypes = /* GraphQL */ `
  subscription OnUpdateContactTypes(
    $filter: ModelSubscriptionContactTypesFilterInput
  ) {
    onUpdateContactTypes(filter: $filter) {
      id
      contact_type_name
      is_active
      created_by
      Contacts {
        items {
          id
          first_name
          last_name
          primary_phone
          address
          city
          state
          zip
          allowed_actions
          ok_to_bid
          secondary_phone
          secondary_email
          website
          ContractorProjectRelationships {
            items {
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
            nextToken
            __typename
          }
          primary_email
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          contacttypesID
          bid_email
          bid_phone
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteContactTypes = /* GraphQL */ `
  subscription OnDeleteContactTypes(
    $filter: ModelSubscriptionContactTypesFilterInput
  ) {
    onDeleteContactTypes(filter: $filter) {
      id
      contact_type_name
      is_active
      created_by
      Contacts {
        items {
          id
          first_name
          last_name
          primary_phone
          address
          city
          state
          zip
          allowed_actions
          ok_to_bid
          secondary_phone
          secondary_email
          website
          ContractorProjectRelationships {
            items {
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
            nextToken
            __typename
          }
          primary_email
          BusinessContactRelationships {
            items {
              id
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
            nextToken
            __typename
          }
          contacttypesID
          bid_email
          bid_phone
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContractorProjectRelationships = /* GraphQL */ `
  subscription OnCreateContractorProjectRelationships(
    $filter: ModelSubscriptionContractorProjectRelationshipsFilterInput
  ) {
    onCreateContractorProjectRelationships(filter: $filter) {
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
export const onUpdateContractorProjectRelationships = /* GraphQL */ `
  subscription OnUpdateContractorProjectRelationships(
    $filter: ModelSubscriptionContractorProjectRelationshipsFilterInput
  ) {
    onUpdateContractorProjectRelationships(filter: $filter) {
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
export const onDeleteContractorProjectRelationships = /* GraphQL */ `
  subscription OnDeleteContractorProjectRelationships(
    $filter: ModelSubscriptionContractorProjectRelationshipsFilterInput
  ) {
    onDeleteContractorProjectRelationships(filter: $filter) {
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
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
        items {
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
        nextToken
        __typename
      }
      inspector_id
      project_name
      created_by
      zip
      businessesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
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
        items {
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
        nextToken
        __typename
      }
      inspector_id
      project_name
      created_by
      zip
      businessesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
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
        items {
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
        nextToken
        __typename
      }
      inspector_id
      project_name
      created_by
      zip
      businessesID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact($filter: ModelSubscriptionContactFilterInput) {
    onCreateContact(filter: $filter) {
      id
      first_name
      last_name
      primary_phone
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        items {
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
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      contacttypesID
      bid_email
      bid_phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact($filter: ModelSubscriptionContactFilterInput) {
    onUpdateContact(filter: $filter) {
      id
      first_name
      last_name
      primary_phone
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        items {
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
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      contacttypesID
      bid_email
      bid_phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact($filter: ModelSubscriptionContactFilterInput) {
    onDeleteContact(filter: $filter) {
      id
      first_name
      last_name
      primary_phone
      address
      city
      state
      zip
      allowed_actions
      ok_to_bid
      secondary_phone
      secondary_email
      website
      ContractorProjectRelationships {
        items {
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
        nextToken
        __typename
      }
      primary_email
      BusinessContactRelationships {
        items {
          id
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
        nextToken
        __typename
      }
      contacttypesID
      bid_email
      bid_phone
      createdAt
      updatedAt
      __typename
    }
  }
`;
