/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getContactTypes } from "../graphql/queries";
import { updateContactTypes } from "../graphql/mutations";
const client = generateClient();
export default function ContactTypesUpdateForm(props) {
  const {
    id: idProp,
    contactTypes: contactTypesModelProp,
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
  };
  const [contact_type_name, setContact_type_name] = React.useState(
    initialValues.contact_type_name
  );
  const [is_active, setIs_active] = React.useState(initialValues.is_active);
  const [created_by, setCreated_by] = React.useState(initialValues.created_by);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactTypesRecord
      ? { ...initialValues, ...contactTypesRecord }
      : initialValues;
    setContact_type_name(cleanValues.contact_type_name);
    setIs_active(cleanValues.is_active);
    setCreated_by(cleanValues.created_by);
    setErrors({});
  };
  const [contactTypesRecord, setContactTypesRecord] = React.useState(
    contactTypesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContactTypes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContactTypes
        : contactTypesModelProp;
      setContactTypesRecord(record);
    };
    queryData();
  }, [idProp, contactTypesModelProp]);
  React.useEffect(resetStateValues, [contactTypesRecord]);
  const validations = {
    contact_type_name: [{ type: "Required" }],
    is_active: [{ type: "Required" }],
    created_by: [{ type: "Required" }],
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
            query: updateContactTypes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: contactTypesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContactTypesUpdateForm")}
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || contactTypesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || contactTypesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}