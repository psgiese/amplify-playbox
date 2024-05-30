/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBusinessContactRelationships = /* GraphQL */ `
  query GetBusinessContactRelationships($id: ID!) {
    getBusinessContactRelationships(id: $id) {
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
export const listBusinessContactRelationships = /* GraphQL */ `
  query ListBusinessContactRelationships(
    $filter: ModelBusinessContactRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessContactRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const businessContactRelationshipsByBusinessesID = /* GraphQL */ `
  query BusinessContactRelationshipsByBusinessesID(
    $businessesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessContactRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessContactRelationshipsByBusinessesID(
      businessesID: $businessesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const businessContactRelationshipsByContactID = /* GraphQL */ `
  query BusinessContactRelationshipsByContactID(
    $contactID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessContactRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessContactRelationshipsByContactID(
      contactID: $contactID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getBusinessTypes = /* GraphQL */ `
  query GetBusinessTypes($id: ID!) {
    getBusinessTypes(id: $id) {
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
export const listBusinessTypes = /* GraphQL */ `
  query ListBusinessTypes(
    $filter: ModelBusinessTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinessTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              nextToken
              __typename
            }
            Projects {
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
      nextToken
      __typename
    }
  }
`;
export const getBusinesses = /* GraphQL */ `
  query GetBusinesses($id: ID!) {
    getBusinesses(id: $id) {
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
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            ContractorProjectRelationships {
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
      nextToken
      __typename
    }
  }
`;
export const businessesByBusinesstypesID = /* GraphQL */ `
  query BusinessesByBusinesstypesID(
    $businesstypesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessesByBusinesstypesID(
      businesstypesID: $businesstypesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
            ContractorProjectRelationships {
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
      nextToken
      __typename
    }
  }
`;
export const getContactTypes = /* GraphQL */ `
  query GetContactTypes($id: ID!) {
    getContactTypes(id: $id) {
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
export const listContactTypes = /* GraphQL */ `
  query ListContactTypes(
    $filter: ModelContactTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContactTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
              nextToken
              __typename
            }
            primary_email
            BusinessContactRelationships {
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
      nextToken
      __typename
    }
  }
`;
export const getContractorProjectRelationships = /* GraphQL */ `
  query GetContractorProjectRelationships($id: ID!) {
    getContractorProjectRelationships(id: $id) {
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
export const listContractorProjectRelationships = /* GraphQL */ `
  query ListContractorProjectRelationships(
    $filter: ModelContractorProjectRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContractorProjectRelationships(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const contractorProjectRelationshipsByProjectID = /* GraphQL */ `
  query ContractorProjectRelationshipsByProjectID(
    $projectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContractorProjectRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractorProjectRelationshipsByProjectID(
      projectID: $projectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const contractorProjectRelationshipsByContactID = /* GraphQL */ `
  query ContractorProjectRelationshipsByContactID(
    $contactID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContractorProjectRelationshipsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contractorProjectRelationshipsByContactID(
      contactID: $contactID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const projectsByBusinessesID = /* GraphQL */ `
  query ProjectsByBusinessesID(
    $businessesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    projectsByBusinessesID(
      businessesID: $businessesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
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
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const contactsByContacttypesID = /* GraphQL */ `
  query ContactsByContacttypesID(
    $contacttypesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByContacttypesID(
      contacttypesID: $contacttypesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
