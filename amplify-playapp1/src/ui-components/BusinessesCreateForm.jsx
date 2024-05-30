/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  listBusinessContactRelationships,
  listBusinessTypes,
  listProjects,
} from "../graphql/queries";
import {
  createBusinesses,
  updateBusinessContactRelationships,
  updateProject,
} from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#f0f0f0" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function BusinessesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    business_name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    business_phone: "",
    business_email: "",
    website: "",
    license_registration_id: "",
    license_issued_by: "",
    license_expiration_date: "",
    general_liability_insurance: "",
    license_registration_name: "",
    business_type_name: "",
    businesstypesID: undefined,
    BusinessContactRelationships: [],
    Projects: [],
  };
  const [business_name, setBusiness_name] = React.useState(
    initialValues.business_name
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [business_phone, setBusiness_phone] = React.useState(
    initialValues.business_phone
  );
  const [business_email, setBusiness_email] = React.useState(
    initialValues.business_email
  );
  const [website, setWebsite] = React.useState(initialValues.website);
  const [license_registration_id, setLicense_registration_id] = React.useState(
    initialValues.license_registration_id
  );
  const [license_issued_by, setLicense_issued_by] = React.useState(
    initialValues.license_issued_by
  );
  const [license_expiration_date, setLicense_expiration_date] = React.useState(
    initialValues.license_expiration_date
  );
  const [general_liability_insurance, setGeneral_liability_insurance] =
    React.useState(initialValues.general_liability_insurance);
  const [license_registration_name, setLicense_registration_name] =
    React.useState(initialValues.license_registration_name);
  const [business_type_name, setBusiness_type_name] = React.useState(
    initialValues.business_type_name
  );
  const [businesstypesID, setBusinesstypesID] = React.useState(
    initialValues.businesstypesID
  );
  const [businesstypesIDLoading, setBusinesstypesIDLoading] =
    React.useState(false);
  const [businesstypesIDRecords, setBusinesstypesIDRecords] = React.useState(
    []
  );
  const [selectedBusinesstypesIDRecords, setSelectedBusinesstypesIDRecords] =
    React.useState([]);
  const [BusinessContactRelationships, setBusinessContactRelationships] =
    React.useState(initialValues.BusinessContactRelationships);
  const [
    BusinessContactRelationshipsLoading,
    setBusinessContactRelationshipsLoading,
  ] = React.useState(false);
  const [
    businessContactRelationshipsRecords,
    setBusinessContactRelationshipsRecords,
  ] = React.useState([]);
  const [Projects, setProjects] = React.useState(initialValues.Projects);
  const [ProjectsLoading, setProjectsLoading] = React.useState(false);
  const [projectsRecords, setProjectsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBusiness_name(initialValues.business_name);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZip(initialValues.zip);
    setBusiness_phone(initialValues.business_phone);
    setBusiness_email(initialValues.business_email);
    setWebsite(initialValues.website);
    setLicense_registration_id(initialValues.license_registration_id);
    setLicense_issued_by(initialValues.license_issued_by);
    setLicense_expiration_date(initialValues.license_expiration_date);
    setGeneral_liability_insurance(initialValues.general_liability_insurance);
    setLicense_registration_name(initialValues.license_registration_name);
    setBusiness_type_name(initialValues.business_type_name);
    setBusinesstypesID(initialValues.businesstypesID);
    setCurrentBusinesstypesIDValue(undefined);
    setCurrentBusinesstypesIDDisplayValue("");
    setBusinessContactRelationships(initialValues.BusinessContactRelationships);
    setCurrentBusinessContactRelationshipsValue(undefined);
    setCurrentBusinessContactRelationshipsDisplayValue("");
    setProjects(initialValues.Projects);
    setCurrentProjectsValue(undefined);
    setCurrentProjectsDisplayValue("");
    setErrors({});
  };
  const [
    currentBusinesstypesIDDisplayValue,
    setCurrentBusinesstypesIDDisplayValue,
  ] = React.useState("");
  const [currentBusinesstypesIDValue, setCurrentBusinesstypesIDValue] =
    React.useState(undefined);
  const businesstypesIDRef = React.createRef();
  const [
    currentBusinessContactRelationshipsDisplayValue,
    setCurrentBusinessContactRelationshipsDisplayValue,
  ] = React.useState("");
  const [
    currentBusinessContactRelationshipsValue,
    setCurrentBusinessContactRelationshipsValue,
  ] = React.useState(undefined);
  const BusinessContactRelationshipsRef = React.createRef();
  const [currentProjectsDisplayValue, setCurrentProjectsDisplayValue] =
    React.useState("");
  const [currentProjectsValue, setCurrentProjectsValue] =
    React.useState(undefined);
  const ProjectsRef = React.createRef();
  const getIDValue = {
    BusinessContactRelationships: (r) => JSON.stringify({ id: r?.id }),
    Projects: (r) => JSON.stringify({ id: r?.id }),
  };
  const BusinessContactRelationshipsIdSet = new Set(
    Array.isArray(BusinessContactRelationships)
      ? BusinessContactRelationships.map((r) =>
          getIDValue.BusinessContactRelationships?.(r)
        )
      : getIDValue.BusinessContactRelationships?.(BusinessContactRelationships)
  );
  const ProjectsIdSet = new Set(
    Array.isArray(Projects)
      ? Projects.map((r) => getIDValue.Projects?.(r))
      : getIDValue.Projects?.(Projects)
  );
  const getDisplayValue = {
    businesstypesID: (r) =>
      `${r?.business_type_name ? r?.business_type_name + " - " : ""}${r?.id}`,
    BusinessContactRelationships: (r) =>
      `${r?.contact_role_name ? r?.contact_role_name + " - " : ""}${r?.id}`,
    Projects: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
  };
  const validations = {
    business_name: [],
    address: [{ type: "Required" }],
    city: [],
    state: [],
    zip: [],
    business_phone: [{ type: "Phone" }],
    business_email: [{ type: "Email" }],
    website: [{ type: "URL" }],
    license_registration_id: [],
    license_issued_by: [],
    license_expiration_date: [],
    general_liability_insurance: [{ type: "JSON" }],
    license_registration_name: [],
    business_type_name: [{ type: "Required" }],
    businesstypesID: [{ type: "Required" }],
    BusinessContactRelationships: [],
    Projects: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchBusinesstypesIDRecords = async (value) => {
    setBusinesstypesIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { business_type_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listBusinessTypes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBusinessTypes?.items;
      var loaded = result.filter((item) => businesstypesID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBusinesstypesIDRecords(newOptions.slice(0, autocompleteLength));
    setBusinesstypesIDLoading(false);
  };
  const fetchBusinessContactRelationshipsRecords = async (value) => {
    setBusinessContactRelationshipsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { contact_role_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listBusinessContactRelationships.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBusinessContactRelationships?.items;
      var loaded = result.filter(
        (item) =>
          !BusinessContactRelationshipsIdSet.has(
            getIDValue.BusinessContactRelationships?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBusinessContactRelationshipsRecords(
      newOptions.slice(0, autocompleteLength)
    );
    setBusinessContactRelationshipsLoading(false);
  };
  const fetchProjectsRecords = async (value) => {
    setProjectsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ address: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listProjects.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listProjects?.items;
      var loaded = result.filter(
        (item) => !ProjectsIdSet.has(getIDValue.Projects?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProjectsRecords(newOptions.slice(0, autocompleteLength));
    setProjectsLoading(false);
  };
  React.useEffect(() => {
    fetchBusinesstypesIDRecords("");
    fetchBusinessContactRelationshipsRecords("");
    fetchProjectsRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          business_name,
          address,
          city,
          state,
          zip,
          business_phone,
          business_email,
          website,
          license_registration_id,
          license_issued_by,
          license_expiration_date,
          general_liability_insurance,
          license_registration_name,
          business_type_name,
          businesstypesID,
          BusinessContactRelationships,
          Projects,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            business_name: modelFields.business_name,
            address: modelFields.address,
            city: modelFields.city,
            state: modelFields.state,
            zip: modelFields.zip,
            business_phone: modelFields.business_phone,
            business_email: modelFields.business_email,
            website: modelFields.website,
            license_registration_id: modelFields.license_registration_id,
            license_issued_by: modelFields.license_issued_by,
            license_expiration_date: modelFields.license_expiration_date,
            general_liability_insurance:
              modelFields.general_liability_insurance,
            license_registration_name: modelFields.license_registration_name,
            business_type_name: modelFields.business_type_name,
            businesstypesID: modelFields.businesstypesID,
          };
          const businesses = (
            await client.graphql({
              query: createBusinesses.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createBusinesses;
          const promises = [];
          promises.push(
            ...BusinessContactRelationships.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateBusinessContactRelationships.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: original.id,
                      businessesID: businesses.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...Projects.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateProject.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      businessesID: businesses.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BusinessesCreateForm")}
      {...rest}
    >
      <TextField
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={business_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name: value,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.business_name ?? value;
          }
          if (errors.business_name?.hasError) {
            runValidationTasks("business_name", value);
          }
          setBusiness_name(value);
        }}
        onBlur={() => runValidationTasks("business_name", business_name)}
        errorMessage={errors.business_name?.errorMessage}
        hasError={errors.business_name?.hasError}
        {...getOverrideProps(overrides, "business_name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Address</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address: value,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city: value,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state: value,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip: value,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Business phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={business_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone: value,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.business_phone ?? value;
          }
          if (errors.business_phone?.hasError) {
            runValidationTasks("business_phone", value);
          }
          setBusiness_phone(value);
        }}
        onBlur={() => runValidationTasks("business_phone", business_phone)}
        errorMessage={errors.business_phone?.errorMessage}
        hasError={errors.business_phone?.hasError}
        {...getOverrideProps(overrides, "business_phone")}
      ></TextField>
      <TextField
        label="Business email"
        isRequired={false}
        isReadOnly={false}
        value={business_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email: value,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.business_email ?? value;
          }
          if (errors.business_email?.hasError) {
            runValidationTasks("business_email", value);
          }
          setBusiness_email(value);
        }}
        onBlur={() => runValidationTasks("business_email", business_email)}
        errorMessage={errors.business_email?.errorMessage}
        hasError={errors.business_email?.hasError}
        {...getOverrideProps(overrides, "business_email")}
      ></TextField>
      <TextField
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website: value,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.website ?? value;
          }
          if (errors.website?.hasError) {
            runValidationTasks("website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("website", website)}
        errorMessage={errors.website?.errorMessage}
        hasError={errors.website?.hasError}
        {...getOverrideProps(overrides, "website")}
      ></TextField>
      <TextField
        label="License registration id"
        isRequired={false}
        isReadOnly={false}
        value={license_registration_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id: value,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.license_registration_id ?? value;
          }
          if (errors.license_registration_id?.hasError) {
            runValidationTasks("license_registration_id", value);
          }
          setLicense_registration_id(value);
        }}
        onBlur={() =>
          runValidationTasks("license_registration_id", license_registration_id)
        }
        errorMessage={errors.license_registration_id?.errorMessage}
        hasError={errors.license_registration_id?.hasError}
        {...getOverrideProps(overrides, "license_registration_id")}
      ></TextField>
      <TextField
        label="License issued by"
        isRequired={false}
        isReadOnly={false}
        value={license_issued_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by: value,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.license_issued_by ?? value;
          }
          if (errors.license_issued_by?.hasError) {
            runValidationTasks("license_issued_by", value);
          }
          setLicense_issued_by(value);
        }}
        onBlur={() =>
          runValidationTasks("license_issued_by", license_issued_by)
        }
        errorMessage={errors.license_issued_by?.errorMessage}
        hasError={errors.license_issued_by?.hasError}
        {...getOverrideProps(overrides, "license_issued_by")}
      ></TextField>
      <TextField
        label="License expiration date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={license_expiration_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date: value,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.license_expiration_date ?? value;
          }
          if (errors.license_expiration_date?.hasError) {
            runValidationTasks("license_expiration_date", value);
          }
          setLicense_expiration_date(value);
        }}
        onBlur={() =>
          runValidationTasks("license_expiration_date", license_expiration_date)
        }
        errorMessage={errors.license_expiration_date?.errorMessage}
        hasError={errors.license_expiration_date?.hasError}
        {...getOverrideProps(overrides, "license_expiration_date")}
      ></TextField>
      <TextAreaField
        label="General liability insurance"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance: value,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.general_liability_insurance ?? value;
          }
          if (errors.general_liability_insurance?.hasError) {
            runValidationTasks("general_liability_insurance", value);
          }
          setGeneral_liability_insurance(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "general_liability_insurance",
            general_liability_insurance
          )
        }
        errorMessage={errors.general_liability_insurance?.errorMessage}
        hasError={errors.general_liability_insurance?.hasError}
        {...getOverrideProps(overrides, "general_liability_insurance")}
      ></TextAreaField>
      <TextField
        label="License registration name"
        isRequired={false}
        isReadOnly={false}
        value={license_registration_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name: value,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.license_registration_name ?? value;
          }
          if (errors.license_registration_name?.hasError) {
            runValidationTasks("license_registration_name", value);
          }
          setLicense_registration_name(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "license_registration_name",
            license_registration_name
          )
        }
        errorMessage={errors.license_registration_name?.errorMessage}
        hasError={errors.license_registration_name?.hasError}
        {...getOverrideProps(overrides, "license_registration_name")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Business type name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={business_type_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name: value,
              businesstypesID,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.business_type_name ?? value;
          }
          if (errors.business_type_name?.hasError) {
            runValidationTasks("business_type_name", value);
          }
          setBusiness_type_name(value);
        }}
        onBlur={() =>
          runValidationTasks("business_type_name", business_type_name)
        }
        errorMessage={errors.business_type_name?.errorMessage}
        hasError={errors.business_type_name?.hasError}
        {...getOverrideProps(overrides, "business_type_name")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID: value,
              BusinessContactRelationships,
              Projects,
            };
            const result = onChange(modelFields);
            value = result?.businesstypesID ?? value;
          }
          setBusinesstypesID(value);
          setCurrentBusinesstypesIDValue(undefined);
        }}
        currentFieldValue={currentBusinesstypesIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Businesstypes id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={businesstypesID ? [businesstypesID] : []}
        hasError={errors?.businesstypesID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "businesstypesID",
            currentBusinesstypesIDValue
          )
        }
        errorMessage={errors?.businesstypesID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.businesstypesID(
                businesstypesIDRecords.find((r) => r.id === value) ??
                  selectedBusinesstypesIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentBusinesstypesIDDisplayValue(
            value
              ? getDisplayValue.businesstypesID(
                  businesstypesIDRecords.find((r) => r.id === value) ??
                    selectedBusinesstypesIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentBusinesstypesIDValue(value);
          const selectedRecord = businesstypesIDRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedBusinesstypesIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={businesstypesIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Businesstypes id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search BusinessTypes"
          value={currentBusinesstypesIDDisplayValue}
          options={businesstypesIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.businesstypesID?.(r),
            }))}
          isLoading={businesstypesIDLoading}
          onSelect={({ id, label }) => {
            setCurrentBusinesstypesIDValue(id);
            setCurrentBusinesstypesIDDisplayValue(label);
            runValidationTasks("businesstypesID", label);
          }}
          onClear={() => {
            setCurrentBusinesstypesIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchBusinesstypesIDRecords(value);
            if (errors.businesstypesID?.hasError) {
              runValidationTasks("businesstypesID", value);
            }
            setCurrentBusinesstypesIDDisplayValue(value);
            setCurrentBusinesstypesIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("businesstypesID", currentBusinesstypesIDValue)
          }
          errorMessage={errors.businesstypesID?.errorMessage}
          hasError={errors.businesstypesID?.hasError}
          ref={businesstypesIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "businesstypesID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships: values,
              Projects,
            };
            const result = onChange(modelFields);
            values = result?.BusinessContactRelationships ?? values;
          }
          setBusinessContactRelationships(values);
          setCurrentBusinessContactRelationshipsValue(undefined);
          setCurrentBusinessContactRelationshipsDisplayValue("");
        }}
        currentFieldValue={currentBusinessContactRelationshipsValue}
        label={"Business contact relationships"}
        items={BusinessContactRelationships}
        hasError={errors?.BusinessContactRelationships?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "BusinessContactRelationships",
            currentBusinessContactRelationshipsValue
          )
        }
        errorMessage={errors?.BusinessContactRelationships?.errorMessage}
        getBadgeText={getDisplayValue.BusinessContactRelationships}
        setFieldValue={(model) => {
          setCurrentBusinessContactRelationshipsDisplayValue(
            model ? getDisplayValue.BusinessContactRelationships(model) : ""
          );
          setCurrentBusinessContactRelationshipsValue(model);
        }}
        inputFieldRef={BusinessContactRelationshipsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Business contact relationships"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BusinessContactRelationships"
          value={currentBusinessContactRelationshipsDisplayValue}
          options={businessContactRelationshipsRecords
            .filter(
              (r) =>
                !BusinessContactRelationshipsIdSet.has(
                  getIDValue.BusinessContactRelationships?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.BusinessContactRelationships?.(r),
              label: getDisplayValue.BusinessContactRelationships?.(r),
            }))}
          isLoading={BusinessContactRelationshipsLoading}
          onSelect={({ id, label }) => {
            setCurrentBusinessContactRelationshipsValue(
              businessContactRelationshipsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBusinessContactRelationshipsDisplayValue(label);
            runValidationTasks("BusinessContactRelationships", label);
          }}
          onClear={() => {
            setCurrentBusinessContactRelationshipsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchBusinessContactRelationshipsRecords(value);
            if (errors.BusinessContactRelationships?.hasError) {
              runValidationTasks("BusinessContactRelationships", value);
            }
            setCurrentBusinessContactRelationshipsDisplayValue(value);
            setCurrentBusinessContactRelationshipsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "BusinessContactRelationships",
              currentBusinessContactRelationshipsDisplayValue
            )
          }
          errorMessage={errors.BusinessContactRelationships?.errorMessage}
          hasError={errors.BusinessContactRelationships?.hasError}
          ref={BusinessContactRelationshipsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "BusinessContactRelationships")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              business_name,
              address,
              city,
              state,
              zip,
              business_phone,
              business_email,
              website,
              license_registration_id,
              license_issued_by,
              license_expiration_date,
              general_liability_insurance,
              license_registration_name,
              business_type_name,
              businesstypesID,
              BusinessContactRelationships,
              Projects: values,
            };
            const result = onChange(modelFields);
            values = result?.Projects ?? values;
          }
          setProjects(values);
          setCurrentProjectsValue(undefined);
          setCurrentProjectsDisplayValue("");
        }}
        currentFieldValue={currentProjectsValue}
        label={"Projects"}
        items={Projects}
        hasError={errors?.Projects?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Projects", currentProjectsValue)
        }
        errorMessage={errors?.Projects?.errorMessage}
        getBadgeText={getDisplayValue.Projects}
        setFieldValue={(model) => {
          setCurrentProjectsDisplayValue(
            model ? getDisplayValue.Projects(model) : ""
          );
          setCurrentProjectsValue(model);
        }}
        inputFieldRef={ProjectsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Projects"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Project"
          value={currentProjectsDisplayValue}
          options={projectsRecords
            .filter((r) => !ProjectsIdSet.has(getIDValue.Projects?.(r)))
            .map((r) => ({
              id: getIDValue.Projects?.(r),
              label: getDisplayValue.Projects?.(r),
            }))}
          isLoading={ProjectsLoading}
          onSelect={({ id, label }) => {
            setCurrentProjectsValue(
              projectsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentProjectsDisplayValue(label);
            runValidationTasks("Projects", label);
          }}
          onClear={() => {
            setCurrentProjectsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchProjectsRecords(value);
            if (errors.Projects?.hasError) {
              runValidationTasks("Projects", value);
            }
            setCurrentProjectsDisplayValue(value);
            setCurrentProjectsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Projects", currentProjectsDisplayValue)
          }
          errorMessage={errors.Projects?.errorMessage}
          hasError={errors.Projects?.hasError}
          ref={ProjectsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Projects")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
