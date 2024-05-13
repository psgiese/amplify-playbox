/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createContractor } from "../graphql/mutations";
const client = generateClient();
export default function ContractorCreateForm(props) {
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
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    business_id: "",
    business_name: "",
    license_number: "",
    insurance_id: "",
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [email, setEmail] = React.useState(initialValues.email);
  const [business_id, setBusiness_id] = React.useState(
    initialValues.business_id
  );
  const [business_name, setBusiness_name] = React.useState(
    initialValues.business_name
  );
  const [license_number, setLicense_number] = React.useState(
    initialValues.license_number
  );
  const [insurance_id, setInsurance_id] = React.useState(
    initialValues.insurance_id
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setBusiness_id(initialValues.business_id);
    setBusiness_name(initialValues.business_name);
    setLicense_number(initialValues.license_number);
    setInsurance_id(initialValues.insurance_id);
    setErrors({});
  };
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    phone: [{ type: "Required" }, { type: "Phone" }],
    email: [{ type: "Required" }, { type: "Email" }],
    business_id: [],
    business_name: [],
    license_number: [],
    insurance_id: [],
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
          first_name,
          last_name,
          phone,
          email,
          business_id,
          business_name,
          license_number,
          insurance_id,
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
            query: createContractor.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "ContractorCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              phone,
              email,
              business_id,
              business_name,
              license_number,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              phone,
              email,
              business_id,
              business_name,
              license_number,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone: value,
              email,
              business_id,
              business_name,
              license_number,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone,
              email: value,
              business_id,
              business_name,
              license_number,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Business id"
        isRequired={false}
        isReadOnly={false}
        value={business_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone,
              email,
              business_id: value,
              business_name,
              license_number,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.business_id ?? value;
          }
          if (errors.business_id?.hasError) {
            runValidationTasks("business_id", value);
          }
          setBusiness_id(value);
        }}
        onBlur={() => runValidationTasks("business_id", business_id)}
        errorMessage={errors.business_id?.errorMessage}
        hasError={errors.business_id?.hasError}
        {...getOverrideProps(overrides, "business_id")}
      ></TextField>
      <TextField
        label="Business name"
        isRequired={false}
        isReadOnly={false}
        value={business_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone,
              email,
              business_id,
              business_name: value,
              license_number,
              insurance_id,
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
        label="License number"
        isRequired={false}
        isReadOnly={false}
        value={license_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone,
              email,
              business_id,
              business_name,
              license_number: value,
              insurance_id,
            };
            const result = onChange(modelFields);
            value = result?.license_number ?? value;
          }
          if (errors.license_number?.hasError) {
            runValidationTasks("license_number", value);
          }
          setLicense_number(value);
        }}
        onBlur={() => runValidationTasks("license_number", license_number)}
        errorMessage={errors.license_number?.errorMessage}
        hasError={errors.license_number?.hasError}
        {...getOverrideProps(overrides, "license_number")}
      ></TextField>
      <TextField
        label="Insurance id"
        isRequired={false}
        isReadOnly={false}
        value={insurance_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              phone,
              email,
              business_id,
              business_name,
              license_number,
              insurance_id: value,
            };
            const result = onChange(modelFields);
            value = result?.insurance_id ?? value;
          }
          if (errors.insurance_id?.hasError) {
            runValidationTasks("insurance_id", value);
          }
          setInsurance_id(value);
        }}
        onBlur={() => runValidationTasks("insurance_id", insurance_id)}
        errorMessage={errors.insurance_id?.errorMessage}
        hasError={errors.insurance_id?.hasError}
        {...getOverrideProps(overrides, "insurance_id")}
      ></TextField>
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
