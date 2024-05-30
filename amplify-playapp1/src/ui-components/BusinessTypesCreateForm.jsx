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
import { listBusinesses } from "../graphql/queries";
import { createBusinessTypes, updateBusinesses } from "../graphql/mutations";
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
export default function BusinessTypesCreateForm(props) {
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
    business_type_name: "",
    is_active: false,
    created_by: "",
    Businesses: [],
  };
  const [business_type_name, setBusiness_type_name] = React.useState(
    initialValues.business_type_name
  );
  const [is_active, setIs_active] = React.useState(initialValues.is_active);
  const [created_by, setCreated_by] = React.useState(initialValues.created_by);
  const [Businesses, setBusinesses] = React.useState(initialValues.Businesses);
  const [BusinessesLoading, setBusinessesLoading] = React.useState(false);
  const [businessesRecords, setBusinessesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBusiness_type_name(initialValues.business_type_name);
    setIs_active(initialValues.is_active);
    setCreated_by(initialValues.created_by);
    setBusinesses(initialValues.Businesses);
    setCurrentBusinessesValue(undefined);
    setCurrentBusinessesDisplayValue("");
    setErrors({});
  };
  const [currentBusinessesDisplayValue, setCurrentBusinessesDisplayValue] =
    React.useState("");
  const [currentBusinessesValue, setCurrentBusinessesValue] =
    React.useState(undefined);
  const BusinessesRef = React.createRef();
  const getIDValue = {
    Businesses: (r) => JSON.stringify({ id: r?.id }),
  };
  const BusinessesIdSet = new Set(
    Array.isArray(Businesses)
      ? Businesses.map((r) => getIDValue.Businesses?.(r))
      : getIDValue.Businesses?.(Businesses)
  );
  const getDisplayValue = {
    Businesses: (r) =>
      `${r?.business_name ? r?.business_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    business_type_name: [{ type: "Required" }],
    is_active: [{ type: "Required" }],
    created_by: [],
    Businesses: [],
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
  const fetchBusinessesRecords = async (value) => {
    setBusinessesLoading(true);
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
      var loaded = result.filter(
        (item) => !BusinessesIdSet.has(getIDValue.Businesses?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setBusinessesRecords(newOptions.slice(0, autocompleteLength));
    setBusinessesLoading(false);
  };
  React.useEffect(() => {
    fetchBusinessesRecords("");
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
          business_type_name,
          is_active,
          created_by,
          Businesses,
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
            business_type_name: modelFields.business_type_name,
            is_active: modelFields.is_active,
            created_by: modelFields.created_by,
          };
          const businessTypes = (
            await client.graphql({
              query: createBusinessTypes.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createBusinessTypes;
          const promises = [];
          promises.push(
            ...Businesses.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateBusinesses.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      businesstypesID: businessTypes.id,
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
      {...getOverrideProps(overrides, "BusinessTypesCreateForm")}
      {...rest}
    >
      <TextField
        label="Business type name"
        isRequired={true}
        isReadOnly={false}
        value={business_type_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_type_name: value,
              is_active,
              created_by,
              Businesses,
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
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_active}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              business_type_name,
              is_active: value,
              created_by,
              Businesses,
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
        isRequired={false}
        isReadOnly={false}
        value={created_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              business_type_name,
              is_active,
              created_by: value,
              Businesses,
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
              business_type_name,
              is_active,
              created_by,
              Businesses: values,
            };
            const result = onChange(modelFields);
            values = result?.Businesses ?? values;
          }
          setBusinesses(values);
          setCurrentBusinessesValue(undefined);
          setCurrentBusinessesDisplayValue("");
        }}
        currentFieldValue={currentBusinessesValue}
        label={"Businesses"}
        items={Businesses}
        hasError={errors?.Businesses?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Businesses", currentBusinessesValue)
        }
        errorMessage={errors?.Businesses?.errorMessage}
        getBadgeText={getDisplayValue.Businesses}
        setFieldValue={(model) => {
          setCurrentBusinessesDisplayValue(
            model ? getDisplayValue.Businesses(model) : ""
          );
          setCurrentBusinessesValue(model);
        }}
        inputFieldRef={BusinessesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Businesses"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Businesses"
          value={currentBusinessesDisplayValue}
          options={businessesRecords
            .filter((r) => !BusinessesIdSet.has(getIDValue.Businesses?.(r)))
            .map((r) => ({
              id: getIDValue.Businesses?.(r),
              label: getDisplayValue.Businesses?.(r),
            }))}
          isLoading={BusinessesLoading}
          onSelect={({ id, label }) => {
            setCurrentBusinessesValue(
              businessesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBusinessesDisplayValue(label);
            runValidationTasks("Businesses", label);
          }}
          onClear={() => {
            setCurrentBusinessesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchBusinessesRecords(value);
            if (errors.Businesses?.hasError) {
              runValidationTasks("Businesses", value);
            }
            setCurrentBusinessesDisplayValue(value);
            setCurrentBusinessesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Businesses", currentBusinessesDisplayValue)
          }
          errorMessage={errors.Businesses?.errorMessage}
          hasError={errors.Businesses?.hasError}
          ref={BusinessesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Businesses")}
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
