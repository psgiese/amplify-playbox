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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listBusinesses, listContacts } from "../graphql/queries";
import { createBusinessContactRelationships } from "../graphql/mutations";
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
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
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
export default function BusinessContactRelationshipsCreateForm(props) {
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
    contact_role_name: "",
    relationship_created_on: "",
    is_active_relationship: false,
    relationship_ended_on: "",
    relationship_ended_by: "",
    businessesID: undefined,
    contactID: undefined,
  };
  const [contact_role_name, setContact_role_name] = React.useState(
    initialValues.contact_role_name
  );
  const [relationship_created_on, setRelationship_created_on] = React.useState(
    initialValues.relationship_created_on
  );
  const [is_active_relationship, setIs_active_relationship] = React.useState(
    initialValues.is_active_relationship
  );
  const [relationship_ended_on, setRelationship_ended_on] = React.useState(
    initialValues.relationship_ended_on
  );
  const [relationship_ended_by, setRelationship_ended_by] = React.useState(
    initialValues.relationship_ended_by
  );
  const [businessesID, setBusinessesID] = React.useState(
    initialValues.businessesID
  );
  const [businessesIDLoading, setBusinessesIDLoading] = React.useState(false);
  const [businessesIDRecords, setBusinessesIDRecords] = React.useState([]);
  const [selectedBusinessesIDRecords, setSelectedBusinessesIDRecords] =
    React.useState([]);
  const [contactID, setContactID] = React.useState(initialValues.contactID);
  const [contactIDLoading, setContactIDLoading] = React.useState(false);
  const [contactIDRecords, setContactIDRecords] = React.useState([]);
  const [selectedContactIDRecords, setSelectedContactIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setContact_role_name(initialValues.contact_role_name);
    setRelationship_created_on(initialValues.relationship_created_on);
    setIs_active_relationship(initialValues.is_active_relationship);
    setRelationship_ended_on(initialValues.relationship_ended_on);
    setRelationship_ended_by(initialValues.relationship_ended_by);
    setBusinessesID(initialValues.businessesID);
    setCurrentBusinessesIDValue(undefined);
    setCurrentBusinessesIDDisplayValue("");
    setContactID(initialValues.contactID);
    setCurrentContactIDValue(undefined);
    setCurrentContactIDDisplayValue("");
    setErrors({});
  };
  const [currentBusinessesIDDisplayValue, setCurrentBusinessesIDDisplayValue] =
    React.useState("");
  const [currentBusinessesIDValue, setCurrentBusinessesIDValue] =
    React.useState(undefined);
  const businessesIDRef = React.createRef();
  const [currentContactIDDisplayValue, setCurrentContactIDDisplayValue] =
    React.useState("");
  const [currentContactIDValue, setCurrentContactIDValue] =
    React.useState(undefined);
  const contactIDRef = React.createRef();
  const getDisplayValue = {
    businessesID: (r) =>
      `${r?.business_name ? r?.business_name + " - " : ""}${r?.id}`,
    contactID: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    contact_role_name: [],
    relationship_created_on: [],
    is_active_relationship: [{ type: "Required" }],
    relationship_ended_on: [],
    relationship_ended_by: [],
    businessesID: [{ type: "Required" }],
    contactID: [{ type: "Required" }],
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
  const fetchBusinessesIDRecords = async (value) => {
    setBusinessesIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { business_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listBusinesses.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listBusinesses?.items;
      var loaded = result.filter((item) => businessesID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBusinessesIDRecords(newOptions.slice(0, autocompleteLength));
    setBusinessesIDLoading(false);
  };
  const fetchContactIDRecords = async (value) => {
    setContactIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { first_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listContacts.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listContacts?.items;
      var loaded = result.filter((item) => contactID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setContactIDRecords(newOptions.slice(0, autocompleteLength));
    setContactIDLoading(false);
  };
  React.useEffect(() => {
    fetchBusinessesIDRecords("");
    fetchContactIDRecords("");
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
          contact_role_name,
          relationship_created_on,
          is_active_relationship,
          relationship_ended_on,
          relationship_ended_by,
          businessesID,
          contactID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
          await client.graphql({
            query: createBusinessContactRelationships.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
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
      {...getOverrideProps(overrides, "BusinessContactRelationshipsCreateForm")}
      {...rest}
    >
      <TextField
        label="Contact role name"
        isRequired={false}
        isReadOnly={false}
        value={contact_role_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_role_name: value,
              relationship_created_on,
              is_active_relationship,
              relationship_ended_on,
              relationship_ended_by,
              businessesID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.contact_role_name ?? value;
          }
          if (errors.contact_role_name?.hasError) {
            runValidationTasks("contact_role_name", value);
          }
          setContact_role_name(value);
        }}
        onBlur={() =>
          runValidationTasks("contact_role_name", contact_role_name)
        }
        errorMessage={errors.contact_role_name?.errorMessage}
        hasError={errors.contact_role_name?.hasError}
        {...getOverrideProps(overrides, "contact_role_name")}
      ></TextField>
      <TextField
        label="Relationship created on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={relationship_created_on}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on: value,
              is_active_relationship,
              relationship_ended_on,
              relationship_ended_by,
              businessesID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.relationship_created_on ?? value;
          }
          if (errors.relationship_created_on?.hasError) {
            runValidationTasks("relationship_created_on", value);
          }
          setRelationship_created_on(value);
        }}
        onBlur={() =>
          runValidationTasks("relationship_created_on", relationship_created_on)
        }
        errorMessage={errors.relationship_created_on?.errorMessage}
        hasError={errors.relationship_created_on?.hasError}
        {...getOverrideProps(overrides, "relationship_created_on")}
      ></TextField>
      <SwitchField
        label="Is active relationship"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_active_relationship}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on,
              is_active_relationship: value,
              relationship_ended_on,
              relationship_ended_by,
              businessesID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.is_active_relationship ?? value;
          }
          if (errors.is_active_relationship?.hasError) {
            runValidationTasks("is_active_relationship", value);
          }
          setIs_active_relationship(value);
        }}
        onBlur={() =>
          runValidationTasks("is_active_relationship", is_active_relationship)
        }
        errorMessage={errors.is_active_relationship?.errorMessage}
        hasError={errors.is_active_relationship?.hasError}
        {...getOverrideProps(overrides, "is_active_relationship")}
      ></SwitchField>
      <TextField
        label="Relationship ended on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={relationship_ended_on}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on,
              is_active_relationship,
              relationship_ended_on: value,
              relationship_ended_by,
              businessesID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.relationship_ended_on ?? value;
          }
          if (errors.relationship_ended_on?.hasError) {
            runValidationTasks("relationship_ended_on", value);
          }
          setRelationship_ended_on(value);
        }}
        onBlur={() =>
          runValidationTasks("relationship_ended_on", relationship_ended_on)
        }
        errorMessage={errors.relationship_ended_on?.errorMessage}
        hasError={errors.relationship_ended_on?.hasError}
        {...getOverrideProps(overrides, "relationship_ended_on")}
      ></TextField>
      <TextField
        label="Relationship ended by"
        isRequired={false}
        isReadOnly={false}
        value={relationship_ended_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on,
              is_active_relationship,
              relationship_ended_on,
              relationship_ended_by: value,
              businessesID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.relationship_ended_by ?? value;
          }
          if (errors.relationship_ended_by?.hasError) {
            runValidationTasks("relationship_ended_by", value);
          }
          setRelationship_ended_by(value);
        }}
        onBlur={() =>
          runValidationTasks("relationship_ended_by", relationship_ended_by)
        }
        errorMessage={errors.relationship_ended_by?.errorMessage}
        hasError={errors.relationship_ended_by?.hasError}
        {...getOverrideProps(overrides, "relationship_ended_by")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on,
              is_active_relationship,
              relationship_ended_on,
              relationship_ended_by,
              businessesID: value,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.businessesID ?? value;
          }
          setBusinessesID(value);
          setCurrentBusinessesIDValue(undefined);
        }}
        currentFieldValue={currentBusinessesIDValue}
        label={"Businesses id"}
        items={businessesID ? [businessesID] : []}
        hasError={errors?.businessesID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("businessesID", currentBusinessesIDValue)
        }
        errorMessage={errors?.businessesID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.businessesID(
                businessesIDRecords.find((r) => r.id === value) ??
                  selectedBusinessesIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentBusinessesIDDisplayValue(
            value
              ? getDisplayValue.businessesID(
                  businessesIDRecords.find((r) => r.id === value) ??
                    selectedBusinessesIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentBusinessesIDValue(value);
          const selectedRecord = businessesIDRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedBusinessesIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={businessesIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Businesses id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Businesses"
          value={currentBusinessesIDDisplayValue}
          options={businessesIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.businessesID?.(r),
            }))}
          isLoading={businessesIDLoading}
          onSelect={({ id, label }) => {
            setCurrentBusinessesIDValue(id);
            setCurrentBusinessesIDDisplayValue(label);
            runValidationTasks("businessesID", label);
          }}
          onClear={() => {
            setCurrentBusinessesIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchBusinessesIDRecords(value);
            if (errors.businessesID?.hasError) {
              runValidationTasks("businessesID", value);
            }
            setCurrentBusinessesIDDisplayValue(value);
            setCurrentBusinessesIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("businessesID", currentBusinessesIDValue)
          }
          errorMessage={errors.businessesID?.errorMessage}
          hasError={errors.businessesID?.hasError}
          ref={businessesIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "businessesID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              contact_role_name,
              relationship_created_on,
              is_active_relationship,
              relationship_ended_on,
              relationship_ended_by,
              businessesID,
              contactID: value,
            };
            const result = onChange(modelFields);
            value = result?.contactID ?? value;
          }
          setContactID(value);
          setCurrentContactIDValue(undefined);
        }}
        currentFieldValue={currentContactIDValue}
        label={"Contact id"}
        items={contactID ? [contactID] : []}
        hasError={errors?.contactID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("contactID", currentContactIDValue)
        }
        errorMessage={errors?.contactID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.contactID(
                contactIDRecords.find((r) => r.id === value) ??
                  selectedContactIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentContactIDDisplayValue(
            value
              ? getDisplayValue.contactID(
                  contactIDRecords.find((r) => r.id === value) ??
                    selectedContactIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentContactIDValue(value);
          const selectedRecord = contactIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedContactIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={contactIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Contact id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Contact"
          value={currentContactIDDisplayValue}
          options={contactIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.contactID?.(r),
            }))}
          isLoading={contactIDLoading}
          onSelect={({ id, label }) => {
            setCurrentContactIDValue(id);
            setCurrentContactIDDisplayValue(label);
            runValidationTasks("contactID", label);
          }}
          onClear={() => {
            setCurrentContactIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchContactIDRecords(value);
            if (errors.contactID?.hasError) {
              runValidationTasks("contactID", value);
            }
            setCurrentContactIDDisplayValue(value);
            setCurrentContactIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("contactID", currentContactIDValue)}
          errorMessage={errors.contactID?.errorMessage}
          hasError={errors.contactID?.hasError}
          ref={contactIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "contactID")}
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
