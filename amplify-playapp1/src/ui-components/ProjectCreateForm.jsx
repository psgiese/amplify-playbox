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
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  listBusinesses,
  listContractorProjectRelationships,
} from "../graphql/queries";
import {
  createProject,
  updateContractorProjectRelationships,
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
export default function ProjectCreateForm(props) {
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
    address: "",
    bath_count: "",
    bed_count: "",
    projected_start_date: "",
    actual_start_date: "",
    builder_id: "",
    city: "",
    state: "",
    actual_inspection_date: "",
    lot_block: "",
    model_name: "",
    permit_number: "",
    projected_list_price: "",
    projected_completion_date: "",
    actual_completion_date: "",
    subdivision: "",
    approximate_latitude: "",
    approximate_longitude: "",
    approximate_sqft_house: "",
    assigned_super_id: "",
    project_notes: "",
    ContractorProjectRelationships: [],
    inspector_id: "",
    project_name: "",
    created_by: "",
    zip: "",
    businessesID: undefined,
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [bath_count, setBath_count] = React.useState(initialValues.bath_count);
  const [bed_count, setBed_count] = React.useState(initialValues.bed_count);
  const [projected_start_date, setProjected_start_date] = React.useState(
    initialValues.projected_start_date
  );
  const [actual_start_date, setActual_start_date] = React.useState(
    initialValues.actual_start_date
  );
  const [builder_id, setBuilder_id] = React.useState(initialValues.builder_id);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [actual_inspection_date, setActual_inspection_date] = React.useState(
    initialValues.actual_inspection_date
  );
  const [lot_block, setLot_block] = React.useState(initialValues.lot_block);
  const [model_name, setModel_name] = React.useState(initialValues.model_name);
  const [permit_number, setPermit_number] = React.useState(
    initialValues.permit_number
  );
  const [projected_list_price, setProjected_list_price] = React.useState(
    initialValues.projected_list_price
  );
  const [projected_completion_date, setProjected_completion_date] =
    React.useState(initialValues.projected_completion_date);
  const [actual_completion_date, setActual_completion_date] = React.useState(
    initialValues.actual_completion_date
  );
  const [subdivision, setSubdivision] = React.useState(
    initialValues.subdivision
  );
  const [approximate_latitude, setApproximate_latitude] = React.useState(
    initialValues.approximate_latitude
  );
  const [approximate_longitude, setApproximate_longitude] = React.useState(
    initialValues.approximate_longitude
  );
  const [approximate_sqft_house, setApproximate_sqft_house] = React.useState(
    initialValues.approximate_sqft_house
  );
  const [assigned_super_id, setAssigned_super_id] = React.useState(
    initialValues.assigned_super_id
  );
  const [project_notes, setProject_notes] = React.useState(
    initialValues.project_notes
  );
  const [ContractorProjectRelationships, setContractorProjectRelationships] =
    React.useState(initialValues.ContractorProjectRelationships);
  const [
    ContractorProjectRelationshipsLoading,
    setContractorProjectRelationshipsLoading,
  ] = React.useState(false);
  const [
    contractorProjectRelationshipsRecords,
    setContractorProjectRelationshipsRecords,
  ] = React.useState([]);
  const [inspector_id, setInspector_id] = React.useState(
    initialValues.inspector_id
  );
  const [project_name, setProject_name] = React.useState(
    initialValues.project_name
  );
  const [created_by, setCreated_by] = React.useState(initialValues.created_by);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [businessesID, setBusinessesID] = React.useState(
    initialValues.businessesID
  );
  const [businessesIDLoading, setBusinessesIDLoading] = React.useState(false);
  const [businessesIDRecords, setBusinessesIDRecords] = React.useState([]);
  const [selectedBusinessesIDRecords, setSelectedBusinessesIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAddress(initialValues.address);
    setBath_count(initialValues.bath_count);
    setBed_count(initialValues.bed_count);
    setProjected_start_date(initialValues.projected_start_date);
    setActual_start_date(initialValues.actual_start_date);
    setBuilder_id(initialValues.builder_id);
    setCity(initialValues.city);
    setState(initialValues.state);
    setActual_inspection_date(initialValues.actual_inspection_date);
    setLot_block(initialValues.lot_block);
    setModel_name(initialValues.model_name);
    setPermit_number(initialValues.permit_number);
    setProjected_list_price(initialValues.projected_list_price);
    setProjected_completion_date(initialValues.projected_completion_date);
    setActual_completion_date(initialValues.actual_completion_date);
    setSubdivision(initialValues.subdivision);
    setApproximate_latitude(initialValues.approximate_latitude);
    setApproximate_longitude(initialValues.approximate_longitude);
    setApproximate_sqft_house(initialValues.approximate_sqft_house);
    setAssigned_super_id(initialValues.assigned_super_id);
    setProject_notes(initialValues.project_notes);
    setContractorProjectRelationships(
      initialValues.ContractorProjectRelationships
    );
    setCurrentContractorProjectRelationshipsValue(undefined);
    setCurrentContractorProjectRelationshipsDisplayValue("");
    setInspector_id(initialValues.inspector_id);
    setProject_name(initialValues.project_name);
    setCreated_by(initialValues.created_by);
    setZip(initialValues.zip);
    setBusinessesID(initialValues.businessesID);
    setCurrentBusinessesIDValue(undefined);
    setCurrentBusinessesIDDisplayValue("");
    setErrors({});
  };
  const [
    currentContractorProjectRelationshipsDisplayValue,
    setCurrentContractorProjectRelationshipsDisplayValue,
  ] = React.useState("");
  const [
    currentContractorProjectRelationshipsValue,
    setCurrentContractorProjectRelationshipsValue,
  ] = React.useState(undefined);
  const ContractorProjectRelationshipsRef = React.createRef();
  const [currentBusinessesIDDisplayValue, setCurrentBusinessesIDDisplayValue] =
    React.useState("");
  const [currentBusinessesIDValue, setCurrentBusinessesIDValue] =
    React.useState(undefined);
  const businessesIDRef = React.createRef();
  const getIDValue = {
    ContractorProjectRelationships: (r) => JSON.stringify({ id: r?.id }),
  };
  const ContractorProjectRelationshipsIdSet = new Set(
    Array.isArray(ContractorProjectRelationships)
      ? ContractorProjectRelationships.map((r) =>
          getIDValue.ContractorProjectRelationships?.(r)
        )
      : getIDValue.ContractorProjectRelationships?.(
          ContractorProjectRelationships
        )
  );
  const getDisplayValue = {
    ContractorProjectRelationships: (r) => r?.id,
    businessesID: (r) =>
      `${r?.business_name ? r?.business_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    address: [],
    bath_count: [],
    bed_count: [],
    projected_start_date: [],
    actual_start_date: [],
    builder_id: [],
    city: [],
    state: [],
    actual_inspection_date: [],
    lot_block: [],
    model_name: [],
    permit_number: [],
    projected_list_price: [],
    projected_completion_date: [],
    actual_completion_date: [],
    subdivision: [],
    approximate_latitude: [],
    approximate_longitude: [],
    approximate_sqft_house: [],
    assigned_super_id: [],
    project_notes: [],
    ContractorProjectRelationships: [],
    inspector_id: [],
    project_name: [],
    created_by: [],
    zip: [],
    businessesID: [],
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
  const fetchContractorProjectRelationshipsRecords = async (value) => {
    setContractorProjectRelationshipsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: { or: [{ id: { contains: value } }] },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listContractorProjectRelationships.replaceAll(
            "__typename",
            ""
          ),
          variables,
        })
      )?.data?.listContractorProjectRelationships?.items;
      var loaded = result.filter(
        (item) =>
          !ContractorProjectRelationshipsIdSet.has(
            getIDValue.ContractorProjectRelationships?.(item)
          )
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setContractorProjectRelationshipsRecords(
      newOptions.slice(0, autocompleteLength)
    );
    setContractorProjectRelationshipsLoading(false);
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
  React.useEffect(() => {
    fetchContractorProjectRelationshipsRecords("");
    fetchBusinessesIDRecords("");
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
          address,
          bath_count,
          bed_count,
          projected_start_date,
          actual_start_date,
          builder_id,
          city,
          state,
          actual_inspection_date,
          lot_block,
          model_name,
          permit_number,
          projected_list_price,
          projected_completion_date,
          actual_completion_date,
          subdivision,
          approximate_latitude,
          approximate_longitude,
          approximate_sqft_house,
          assigned_super_id,
          project_notes,
          ContractorProjectRelationships,
          inspector_id,
          project_name,
          created_by,
          zip,
          businessesID,
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
            address: modelFields.address,
            bath_count: modelFields.bath_count,
            bed_count: modelFields.bed_count,
            projected_start_date: modelFields.projected_start_date,
            actual_start_date: modelFields.actual_start_date,
            builder_id: modelFields.builder_id,
            city: modelFields.city,
            state: modelFields.state,
            actual_inspection_date: modelFields.actual_inspection_date,
            lot_block: modelFields.lot_block,
            model_name: modelFields.model_name,
            permit_number: modelFields.permit_number,
            projected_list_price: modelFields.projected_list_price,
            projected_completion_date: modelFields.projected_completion_date,
            actual_completion_date: modelFields.actual_completion_date,
            subdivision: modelFields.subdivision,
            approximate_latitude: modelFields.approximate_latitude,
            approximate_longitude: modelFields.approximate_longitude,
            approximate_sqft_house: modelFields.approximate_sqft_house,
            assigned_super_id: modelFields.assigned_super_id,
            project_notes: modelFields.project_notes,
            inspector_id: modelFields.inspector_id,
            project_name: modelFields.project_name,
            created_by: modelFields.created_by,
            zip: modelFields.zip,
            businessesID: modelFields.businessesID,
          };
          const project = (
            await client.graphql({
              query: createProject.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createProject;
          const promises = [];
          promises.push(
            ...ContractorProjectRelationships.reduce((promises, original) => {
              promises.push(
                client.graphql({
                  query: updateContractorProjectRelationships.replaceAll(
                    "__typename",
                    ""
                  ),
                  variables: {
                    input: {
                      id: original.id,
                      projectID: project.id,
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
      {...getOverrideProps(overrides, "ProjectCreateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
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
        label="Bath count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bath_count}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count: value,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.bath_count ?? value;
          }
          if (errors.bath_count?.hasError) {
            runValidationTasks("bath_count", value);
          }
          setBath_count(value);
        }}
        onBlur={() => runValidationTasks("bath_count", bath_count)}
        errorMessage={errors.bath_count?.errorMessage}
        hasError={errors.bath_count?.hasError}
        {...getOverrideProps(overrides, "bath_count")}
      ></TextField>
      <TextField
        label="Bed count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bed_count}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count: value,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.bed_count ?? value;
          }
          if (errors.bed_count?.hasError) {
            runValidationTasks("bed_count", value);
          }
          setBed_count(value);
        }}
        onBlur={() => runValidationTasks("bed_count", bed_count)}
        errorMessage={errors.bed_count?.errorMessage}
        hasError={errors.bed_count?.hasError}
        {...getOverrideProps(overrides, "bed_count")}
      ></TextField>
      <TextField
        label="Projected start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={projected_start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date: value,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.projected_start_date ?? value;
          }
          if (errors.projected_start_date?.hasError) {
            runValidationTasks("projected_start_date", value);
          }
          setProjected_start_date(value);
        }}
        onBlur={() =>
          runValidationTasks("projected_start_date", projected_start_date)
        }
        errorMessage={errors.projected_start_date?.errorMessage}
        hasError={errors.projected_start_date?.hasError}
        {...getOverrideProps(overrides, "projected_start_date")}
      ></TextField>
      <TextField
        label="Actual start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={actual_start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date: value,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.actual_start_date ?? value;
          }
          if (errors.actual_start_date?.hasError) {
            runValidationTasks("actual_start_date", value);
          }
          setActual_start_date(value);
        }}
        onBlur={() =>
          runValidationTasks("actual_start_date", actual_start_date)
        }
        errorMessage={errors.actual_start_date?.errorMessage}
        hasError={errors.actual_start_date?.hasError}
        {...getOverrideProps(overrides, "actual_start_date")}
      ></TextField>
      <TextField
        label="Builder id"
        isRequired={false}
        isReadOnly={false}
        value={builder_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id: value,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.builder_id ?? value;
          }
          if (errors.builder_id?.hasError) {
            runValidationTasks("builder_id", value);
          }
          setBuilder_id(value);
        }}
        onBlur={() => runValidationTasks("builder_id", builder_id)}
        errorMessage={errors.builder_id?.errorMessage}
        hasError={errors.builder_id?.hasError}
        {...getOverrideProps(overrides, "builder_id")}
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
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city: value,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
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
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state: value,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
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
        label="Actual inspection date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={actual_inspection_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date: value,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.actual_inspection_date ?? value;
          }
          if (errors.actual_inspection_date?.hasError) {
            runValidationTasks("actual_inspection_date", value);
          }
          setActual_inspection_date(value);
        }}
        onBlur={() =>
          runValidationTasks("actual_inspection_date", actual_inspection_date)
        }
        errorMessage={errors.actual_inspection_date?.errorMessage}
        hasError={errors.actual_inspection_date?.hasError}
        {...getOverrideProps(overrides, "actual_inspection_date")}
      ></TextField>
      <TextField
        label="Lot block"
        isRequired={false}
        isReadOnly={false}
        value={lot_block}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block: value,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.lot_block ?? value;
          }
          if (errors.lot_block?.hasError) {
            runValidationTasks("lot_block", value);
          }
          setLot_block(value);
        }}
        onBlur={() => runValidationTasks("lot_block", lot_block)}
        errorMessage={errors.lot_block?.errorMessage}
        hasError={errors.lot_block?.hasError}
        {...getOverrideProps(overrides, "lot_block")}
      ></TextField>
      <TextField
        label="Model name"
        isRequired={false}
        isReadOnly={false}
        value={model_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name: value,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.model_name ?? value;
          }
          if (errors.model_name?.hasError) {
            runValidationTasks("model_name", value);
          }
          setModel_name(value);
        }}
        onBlur={() => runValidationTasks("model_name", model_name)}
        errorMessage={errors.model_name?.errorMessage}
        hasError={errors.model_name?.hasError}
        {...getOverrideProps(overrides, "model_name")}
      ></TextField>
      <TextField
        label="Permit number"
        isRequired={false}
        isReadOnly={false}
        value={permit_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number: value,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.permit_number ?? value;
          }
          if (errors.permit_number?.hasError) {
            runValidationTasks("permit_number", value);
          }
          setPermit_number(value);
        }}
        onBlur={() => runValidationTasks("permit_number", permit_number)}
        errorMessage={errors.permit_number?.errorMessage}
        hasError={errors.permit_number?.hasError}
        {...getOverrideProps(overrides, "permit_number")}
      ></TextField>
      <TextField
        label="Projected list price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={projected_list_price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price: value,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.projected_list_price ?? value;
          }
          if (errors.projected_list_price?.hasError) {
            runValidationTasks("projected_list_price", value);
          }
          setProjected_list_price(value);
        }}
        onBlur={() =>
          runValidationTasks("projected_list_price", projected_list_price)
        }
        errorMessage={errors.projected_list_price?.errorMessage}
        hasError={errors.projected_list_price?.hasError}
        {...getOverrideProps(overrides, "projected_list_price")}
      ></TextField>
      <TextField
        label="Projected completion date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={projected_completion_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date: value,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.projected_completion_date ?? value;
          }
          if (errors.projected_completion_date?.hasError) {
            runValidationTasks("projected_completion_date", value);
          }
          setProjected_completion_date(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "projected_completion_date",
            projected_completion_date
          )
        }
        errorMessage={errors.projected_completion_date?.errorMessage}
        hasError={errors.projected_completion_date?.hasError}
        {...getOverrideProps(overrides, "projected_completion_date")}
      ></TextField>
      <TextField
        label="Actual completion date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={actual_completion_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date: value,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.actual_completion_date ?? value;
          }
          if (errors.actual_completion_date?.hasError) {
            runValidationTasks("actual_completion_date", value);
          }
          setActual_completion_date(value);
        }}
        onBlur={() =>
          runValidationTasks("actual_completion_date", actual_completion_date)
        }
        errorMessage={errors.actual_completion_date?.errorMessage}
        hasError={errors.actual_completion_date?.hasError}
        {...getOverrideProps(overrides, "actual_completion_date")}
      ></TextField>
      <TextField
        label="Subdivision"
        isRequired={false}
        isReadOnly={false}
        value={subdivision}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision: value,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.subdivision ?? value;
          }
          if (errors.subdivision?.hasError) {
            runValidationTasks("subdivision", value);
          }
          setSubdivision(value);
        }}
        onBlur={() => runValidationTasks("subdivision", subdivision)}
        errorMessage={errors.subdivision?.errorMessage}
        hasError={errors.subdivision?.hasError}
        {...getOverrideProps(overrides, "subdivision")}
      ></TextField>
      <TextField
        label="Approximate latitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={approximate_latitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude: value,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.approximate_latitude ?? value;
          }
          if (errors.approximate_latitude?.hasError) {
            runValidationTasks("approximate_latitude", value);
          }
          setApproximate_latitude(value);
        }}
        onBlur={() =>
          runValidationTasks("approximate_latitude", approximate_latitude)
        }
        errorMessage={errors.approximate_latitude?.errorMessage}
        hasError={errors.approximate_latitude?.hasError}
        {...getOverrideProps(overrides, "approximate_latitude")}
      ></TextField>
      <TextField
        label="Approximate longitude"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={approximate_longitude}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude: value,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.approximate_longitude ?? value;
          }
          if (errors.approximate_longitude?.hasError) {
            runValidationTasks("approximate_longitude", value);
          }
          setApproximate_longitude(value);
        }}
        onBlur={() =>
          runValidationTasks("approximate_longitude", approximate_longitude)
        }
        errorMessage={errors.approximate_longitude?.errorMessage}
        hasError={errors.approximate_longitude?.hasError}
        {...getOverrideProps(overrides, "approximate_longitude")}
      ></TextField>
      <TextField
        label="Approximate sqft house"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={approximate_sqft_house}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house: value,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.approximate_sqft_house ?? value;
          }
          if (errors.approximate_sqft_house?.hasError) {
            runValidationTasks("approximate_sqft_house", value);
          }
          setApproximate_sqft_house(value);
        }}
        onBlur={() =>
          runValidationTasks("approximate_sqft_house", approximate_sqft_house)
        }
        errorMessage={errors.approximate_sqft_house?.errorMessage}
        hasError={errors.approximate_sqft_house?.hasError}
        {...getOverrideProps(overrides, "approximate_sqft_house")}
      ></TextField>
      <TextField
        label="Assigned super id"
        isRequired={false}
        isReadOnly={false}
        value={assigned_super_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id: value,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.assigned_super_id ?? value;
          }
          if (errors.assigned_super_id?.hasError) {
            runValidationTasks("assigned_super_id", value);
          }
          setAssigned_super_id(value);
        }}
        onBlur={() =>
          runValidationTasks("assigned_super_id", assigned_super_id)
        }
        errorMessage={errors.assigned_super_id?.errorMessage}
        hasError={errors.assigned_super_id?.hasError}
        {...getOverrideProps(overrides, "assigned_super_id")}
      ></TextField>
      <TextField
        label="Project notes"
        isRequired={false}
        isReadOnly={false}
        value={project_notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes: value,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.project_notes ?? value;
          }
          if (errors.project_notes?.hasError) {
            runValidationTasks("project_notes", value);
          }
          setProject_notes(value);
        }}
        onBlur={() => runValidationTasks("project_notes", project_notes)}
        errorMessage={errors.project_notes?.errorMessage}
        hasError={errors.project_notes?.hasError}
        {...getOverrideProps(overrides, "project_notes")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships: values,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            values = result?.ContractorProjectRelationships ?? values;
          }
          setContractorProjectRelationships(values);
          setCurrentContractorProjectRelationshipsValue(undefined);
          setCurrentContractorProjectRelationshipsDisplayValue("");
        }}
        currentFieldValue={currentContractorProjectRelationshipsValue}
        label={"Contractor project relationships"}
        items={ContractorProjectRelationships}
        hasError={errors?.ContractorProjectRelationships?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "ContractorProjectRelationships",
            currentContractorProjectRelationshipsValue
          )
        }
        errorMessage={errors?.ContractorProjectRelationships?.errorMessage}
        getBadgeText={getDisplayValue.ContractorProjectRelationships}
        setFieldValue={(model) => {
          setCurrentContractorProjectRelationshipsDisplayValue(
            model ? getDisplayValue.ContractorProjectRelationships(model) : ""
          );
          setCurrentContractorProjectRelationshipsValue(model);
        }}
        inputFieldRef={ContractorProjectRelationshipsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Contractor project relationships"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ContractorProjectRelationships"
          value={currentContractorProjectRelationshipsDisplayValue}
          options={contractorProjectRelationshipsRecords
            .filter(
              (r) =>
                !ContractorProjectRelationshipsIdSet.has(
                  getIDValue.ContractorProjectRelationships?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.ContractorProjectRelationships?.(r),
              label: getDisplayValue.ContractorProjectRelationships?.(r),
            }))}
          isLoading={ContractorProjectRelationshipsLoading}
          onSelect={({ id, label }) => {
            setCurrentContractorProjectRelationshipsValue(
              contractorProjectRelationshipsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentContractorProjectRelationshipsDisplayValue(label);
            runValidationTasks("ContractorProjectRelationships", label);
          }}
          onClear={() => {
            setCurrentContractorProjectRelationshipsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchContractorProjectRelationshipsRecords(value);
            if (errors.ContractorProjectRelationships?.hasError) {
              runValidationTasks("ContractorProjectRelationships", value);
            }
            setCurrentContractorProjectRelationshipsDisplayValue(value);
            setCurrentContractorProjectRelationshipsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "ContractorProjectRelationships",
              currentContractorProjectRelationshipsDisplayValue
            )
          }
          errorMessage={errors.ContractorProjectRelationships?.errorMessage}
          hasError={errors.ContractorProjectRelationships?.hasError}
          ref={ContractorProjectRelationshipsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ContractorProjectRelationships")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Inspector id"
        isRequired={false}
        isReadOnly={false}
        value={inspector_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id: value,
              project_name,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.inspector_id ?? value;
          }
          if (errors.inspector_id?.hasError) {
            runValidationTasks("inspector_id", value);
          }
          setInspector_id(value);
        }}
        onBlur={() => runValidationTasks("inspector_id", inspector_id)}
        errorMessage={errors.inspector_id?.errorMessage}
        hasError={errors.inspector_id?.hasError}
        {...getOverrideProps(overrides, "inspector_id")}
      ></TextField>
      <TextField
        label="Project name"
        isRequired={false}
        isReadOnly={false}
        value={project_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name: value,
              created_by,
              zip,
              businessesID,
            };
            const result = onChange(modelFields);
            value = result?.project_name ?? value;
          }
          if (errors.project_name?.hasError) {
            runValidationTasks("project_name", value);
          }
          setProject_name(value);
        }}
        onBlur={() => runValidationTasks("project_name", project_name)}
        errorMessage={errors.project_name?.errorMessage}
        hasError={errors.project_name?.hasError}
        {...getOverrideProps(overrides, "project_name")}
      ></TextField>
      <TextField
        label="Created by"
        isRequired={false}
        isReadOnly={false}
        value={created_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by: value,
              zip,
              businessesID,
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
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={zip}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip: value,
              businessesID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              address,
              bath_count,
              bed_count,
              projected_start_date,
              actual_start_date,
              builder_id,
              city,
              state,
              actual_inspection_date,
              lot_block,
              model_name,
              permit_number,
              projected_list_price,
              projected_completion_date,
              actual_completion_date,
              subdivision,
              approximate_latitude,
              approximate_longitude,
              approximate_sqft_house,
              assigned_super_id,
              project_notes,
              ContractorProjectRelationships,
              inspector_id,
              project_name,
              created_by,
              zip,
              businessesID: value,
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
          isRequired={false}
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
