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
import { listContacts } from "../graphql/queries";
import { createContactTypes, updateContact } from "../graphql/mutations";
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
export default function ContactTypesCreateForm(props) {
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
    contact_type_name: "",
    is_active: false,
    created_by: "",
    Contacts: [],
  };
  const [contact_type_name, setContact_type_name] = React.useState(
    initialValues.contact_type_name
  );
  const [is_active, setIs_active] = React.useState(initialValues.is_active);
  const [created_by, setCreated_by] = React.useState(initialValues.created_by);
  const [Contacts, setContacts] = React.useState(initialValues.Contacts);
  const [ContactsLoading, setContactsLoading] = React.useState(false);
  const [contactsRecords, setContactsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setContact_type_name(initialValues.contact_type_name);
    setIs_active(initialValues.is_active);
    setCreated_by(initialValues.created_by);
    setContacts(initialValues.Contacts);
    setCurrentContactsValue(undefined);
    setCurrentContactsDisplayValue("");
    setErrors({});
  };
  const [currentContactsDisplayValue, setCurrentContactsDisplayValue] =
    React.useState("");
  const [currentContactsValue, setCurrentContactsValue] =
    React.useState(undefined);
  const ContactsRef = React.createRef();
  const getIDValue = {
    Contacts: (r) => JSON.stringify({ id: r?.id }),
  };
  const ContactsIdSet = new Set(
    Array.isArray(Contacts)
      ? Contacts.map((r) => getIDValue.Contacts?.(r))
      : getIDValue.Contacts?.(Contacts)
  );
  const getDisplayValue = {
    Contacts: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    contact_type_name: [{ type: "Required" }],
    is_active: [{ type: "Required" }],
    created_by: [{ type: "Required" }],
    Contacts: [],
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
  const fetchContactsRecords = async (value) => {
    setContactsLoading(true);
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
      var loaded = result.filter(
        (item) => !ContactsIdSet.has(getIDValue.Contacts?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setContactsRecords(newOptions.slice(0, autocompleteLength));
    setContactsLoading(false);
  };
  React.useEffect(() => {
    fetchContactsRecords("");
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
          contact_type_name,
          is_active,
          created_by,
          Contacts,
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
            contact_type_name: modelFields.contact_type_name,
            is_active: modelFields.is_active,
            created_by: modelFields.created_by,
          };
          const contactTypes = (
            await client.graphql({
              query: createContactTypes.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createContactTypes;
          const promises = [];
          promises.push(
            ...Contacts.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateContact.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      contacttypesID: contactTypes.id,
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
      {...getOverrideProps(overrides, "ContactTypesCreateForm")}
      {...rest}
    >
      <TextField
        label="Contact type name"
        isRequired={true}
        isReadOnly={false}
        value={contact_type_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_type_name: value,
              is_active,
              created_by,
              Contacts,
            };
            const result = onChange(modelFields);
            value = result?.contact_type_name ?? value;
          }
          if (errors.contact_type_name?.hasError) {
            runValidationTasks("contact_type_name", value);
          }
          setContact_type_name(value);
        }}
        onBlur={() =>
          runValidationTasks("contact_type_name", contact_type_name)
        }
        errorMessage={errors.contact_type_name?.errorMessage}
        hasError={errors.contact_type_name?.hasError}
        {...getOverrideProps(overrides, "contact_type_name")}
      ></TextField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              contact_type_name,
              is_active: value,
              created_by,
              Contacts,
            };
            const result = onChange(modelFields);
            value = result?.is_active ?? value;
          }
          if (errors.is_active?.hasError) {
            runValidationTasks("is_active", value);
          }
          setIs_active(value);
        }}
        onBlur={() => runValidationTasks("is_active", is_active)}
        errorMessage={errors.is_active?.errorMessage}
        hasError={errors.is_active?.hasError}
        {...getOverrideProps(overrides, "is_active")}
      ></SwitchField>
      <TextField
        label="Created by"
        isRequired={true}
        isReadOnly={false}
        value={created_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contact_type_name,
              is_active,
              created_by: value,
              Contacts,
            };
            const result = onChange(modelFields);
            value = result?.created_by ?? value;
          }
          if (errors.created_by?.hasError) {
            runValidationTasks("created_by", value);
          }
          setCreated_by(value);
        }}
        onBlur={() => runValidationTasks("created_by", created_by)}
        errorMessage={errors.created_by?.errorMessage}
        hasError={errors.created_by?.hasError}
        {...getOverrideProps(overrides, "created_by")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              contact_type_name,
              is_active,
              created_by,
              Contacts: values,
            };
            const result = onChange(modelFields);
            values = result?.Contacts ?? values;
          }
          setContacts(values);
          setCurrentContactsValue(undefined);
          setCurrentContactsDisplayValue("");
        }}
        currentFieldValue={currentContactsValue}
        label={"Contacts"}
        items={Contacts}
        hasError={errors?.Contacts?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Contacts", currentContactsValue)
        }
        errorMessage={errors?.Contacts?.errorMessage}
        getBadgeText={getDisplayValue.Contacts}
        setFieldValue={(model) => {
          setCurrentContactsDisplayValue(
            model ? getDisplayValue.Contacts(model) : ""
          );
          setCurrentContactsValue(model);
        }}
        inputFieldRef={ContactsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Contacts"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Contact"
          value={currentContactsDisplayValue}
          options={contactsRecords
            .filter((r) => !ContactsIdSet.has(getIDValue.Contacts?.(r)))
            .map((r) => ({
              id: getIDValue.Contacts?.(r),
              label: getDisplayValue.Contacts?.(r),
            }))}
          isLoading={ContactsLoading}
          onSelect={({ id, label }) => {
            setCurrentContactsValue(
              contactsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentContactsDisplayValue(label);
            runValidationTasks("Contacts", label);
          }}
          onClear={() => {
            setCurrentContactsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchContactsRecords(value);
            if (errors.Contacts?.hasError) {
              runValidationTasks("Contacts", value);
            }
            setCurrentContactsDisplayValue(value);
            setCurrentContactsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Contacts", currentContactsDisplayValue)
          }
          errorMessage={errors.Contacts?.errorMessage}
          hasError={errors.Contacts?.hasError}
          ref={ContactsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Contacts")}
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
