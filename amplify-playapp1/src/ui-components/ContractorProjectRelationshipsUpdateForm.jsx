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
  getContact,
  getContractorProjectRelationships,
  getProject,
  listContacts,
  listProjects,
} from "../graphql/queries";
import { updateContractorProjectRelationships } from "../graphql/mutations";
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
export default function ContractorProjectRelationshipsUpdateForm(props) {
  const {
    id: idProp,
    contractorProjectRelationships: contractorProjectRelationshipsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    project_id: "",
    contact_id: "",
    work_start_date: "",
    work_end_date: "",
    review_id: "",
    marked_complete_by: "",
    marked_complete_on: "",
    work_item_id: "",
    projectID: undefined,
    contactID: undefined,
  };
  const [project_id, setProject_id] = React.useState(initialValues.project_id);
  const [contact_id, setContact_id] = React.useState(initialValues.contact_id);
  const [work_start_date, setWork_start_date] = React.useState(
    initialValues.work_start_date
  );
  const [work_end_date, setWork_end_date] = React.useState(
    initialValues.work_end_date
  );
  const [review_id, setReview_id] = React.useState(initialValues.review_id);
  const [marked_complete_by, setMarked_complete_by] = React.useState(
    initialValues.marked_complete_by
  );
  const [marked_complete_on, setMarked_complete_on] = React.useState(
    initialValues.marked_complete_on
  );
  const [work_item_id, setWork_item_id] = React.useState(
    initialValues.work_item_id
  );
  const [projectID, setProjectID] = React.useState(initialValues.projectID);
  const [projectIDLoading, setProjectIDLoading] = React.useState(false);
  const [projectIDRecords, setProjectIDRecords] = React.useState([]);
  const [selectedProjectIDRecords, setSelectedProjectIDRecords] =
    React.useState([]);
  const [contactID, setContactID] = React.useState(initialValues.contactID);
  const [contactIDLoading, setContactIDLoading] = React.useState(false);
  const [contactIDRecords, setContactIDRecords] = React.useState([]);
  const [selectedContactIDRecords, setSelectedContactIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contractorProjectRelationshipsRecord
      ? {
          ...initialValues,
          ...contractorProjectRelationshipsRecord,
          projectID,
          contactID,
        }
      : initialValues;
    setProject_id(cleanValues.project_id);
    setContact_id(cleanValues.contact_id);
    setWork_start_date(cleanValues.work_start_date);
    setWork_end_date(cleanValues.work_end_date);
    setReview_id(cleanValues.review_id);
    setMarked_complete_by(cleanValues.marked_complete_by);
    setMarked_complete_on(cleanValues.marked_complete_on);
    setWork_item_id(cleanValues.work_item_id);
    setProjectID(cleanValues.projectID);
    setCurrentProjectIDValue(undefined);
    setCurrentProjectIDDisplayValue("");
    setContactID(cleanValues.contactID);
    setCurrentContactIDValue(undefined);
    setCurrentContactIDDisplayValue("");
    setErrors({});
  };
  const [
    contractorProjectRelationshipsRecord,
    setContractorProjectRelationshipsRecord,
  ] = React.useState(contractorProjectRelationshipsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContractorProjectRelationships.replaceAll(
                "__typename",
                ""
              ),
              variables: { id: idProp },
            })
          )?.data?.getContractorProjectRelationships
        : contractorProjectRelationshipsModelProp;
      const projectIDRecord = record ? record.projectID : undefined;
      const projectRecord = projectIDRecord
        ? (
            await client.graphql({
              query: getProject.replaceAll("__typename", ""),
              variables: { id: projectIDRecord },
            })
          )?.data?.getProject
        : undefined;
      setProjectID(projectIDRecord);
      setSelectedProjectIDRecords([projectRecord]);
      const contactIDRecord = record ? record.contactID : undefined;
      const contactRecord = contactIDRecord
        ? (
            await client.graphql({
              query: getContact.replaceAll("__typename", ""),
              variables: { id: contactIDRecord },
            })
          )?.data?.getContact
        : undefined;
      setContactID(contactIDRecord);
      setSelectedContactIDRecords([contactRecord]);
      setContractorProjectRelationshipsRecord(record);
    };
    queryData();
  }, [idProp, contractorProjectRelationshipsModelProp]);
  React.useEffect(resetStateValues, [
    contractorProjectRelationshipsRecord,
    projectID,
    contactID,
  ]);
  const [currentProjectIDDisplayValue, setCurrentProjectIDDisplayValue] =
    React.useState("");
  const [currentProjectIDValue, setCurrentProjectIDValue] =
    React.useState(undefined);
  const projectIDRef = React.createRef();
  const [currentContactIDDisplayValue, setCurrentContactIDDisplayValue] =
    React.useState("");
  const [currentContactIDValue, setCurrentContactIDValue] =
    React.useState(undefined);
  const contactIDRef = React.createRef();
  const getDisplayValue = {
    projectID: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
    contactID: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    project_id: [{ type: "Required" }],
    contact_id: [],
    work_start_date: [],
    work_end_date: [],
    review_id: [],
    marked_complete_by: [],
    marked_complete_on: [],
    work_item_id: [],
    projectID: [{ type: "Required" }],
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
  const fetchProjectIDRecords = async (value) => {
    setProjectIDLoading(true);
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
      var loaded = result.filter((item) => projectID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setProjectIDRecords(newOptions.slice(0, autocompleteLength));
    setProjectIDLoading(false);
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
    fetchProjectIDRecords("");
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
          project_id,
          contact_id: contact_id ?? null,
          work_start_date: work_start_date ?? null,
          work_end_date: work_end_date ?? null,
          review_id: review_id ?? null,
          marked_complete_by: marked_complete_by ?? null,
          marked_complete_on: marked_complete_on ?? null,
          work_item_id: work_item_id ?? null,
          projectID,
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
            query: updateContractorProjectRelationships.replaceAll(
              "__typename",
              ""
            ),
            variables: {
              input: {
                id: contractorProjectRelationshipsRecord.id,
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
      {...getOverrideProps(
        overrides,
        "ContractorProjectRelationshipsUpdateForm"
      )}
      {...rest}
    >
      <TextField
        label="Project id"
        isRequired={true}
        isReadOnly={false}
        value={project_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id: value,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.project_id ?? value;
          }
          if (errors.project_id?.hasError) {
            runValidationTasks("project_id", value);
          }
          setProject_id(value);
        }}
        onBlur={() => runValidationTasks("project_id", project_id)}
        errorMessage={errors.project_id?.errorMessage}
        hasError={errors.project_id?.hasError}
        {...getOverrideProps(overrides, "project_id")}
      ></TextField>
      <TextField
        label="Contact id"
        isRequired={false}
        isReadOnly={false}
        value={contact_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id: value,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.contact_id ?? value;
          }
          if (errors.contact_id?.hasError) {
            runValidationTasks("contact_id", value);
          }
          setContact_id(value);
        }}
        onBlur={() => runValidationTasks("contact_id", contact_id)}
        errorMessage={errors.contact_id?.errorMessage}
        hasError={errors.contact_id?.hasError}
        {...getOverrideProps(overrides, "contact_id")}
      ></TextField>
      <TextField
        label="Work start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={work_start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date: value,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.work_start_date ?? value;
          }
          if (errors.work_start_date?.hasError) {
            runValidationTasks("work_start_date", value);
          }
          setWork_start_date(value);
        }}
        onBlur={() => runValidationTasks("work_start_date", work_start_date)}
        errorMessage={errors.work_start_date?.errorMessage}
        hasError={errors.work_start_date?.hasError}
        {...getOverrideProps(overrides, "work_start_date")}
      ></TextField>
      <TextField
        label="Work end date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={work_end_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date: value,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.work_end_date ?? value;
          }
          if (errors.work_end_date?.hasError) {
            runValidationTasks("work_end_date", value);
          }
          setWork_end_date(value);
        }}
        onBlur={() => runValidationTasks("work_end_date", work_end_date)}
        errorMessage={errors.work_end_date?.errorMessage}
        hasError={errors.work_end_date?.hasError}
        {...getOverrideProps(overrides, "work_end_date")}
      ></TextField>
      <TextField
        label="Review id"
        isRequired={false}
        isReadOnly={false}
        value={review_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id: value,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.review_id ?? value;
          }
          if (errors.review_id?.hasError) {
            runValidationTasks("review_id", value);
          }
          setReview_id(value);
        }}
        onBlur={() => runValidationTasks("review_id", review_id)}
        errorMessage={errors.review_id?.errorMessage}
        hasError={errors.review_id?.hasError}
        {...getOverrideProps(overrides, "review_id")}
      ></TextField>
      <TextField
        label="Marked complete by"
        isRequired={false}
        isReadOnly={false}
        value={marked_complete_by}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by: value,
              marked_complete_on,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.marked_complete_by ?? value;
          }
          if (errors.marked_complete_by?.hasError) {
            runValidationTasks("marked_complete_by", value);
          }
          setMarked_complete_by(value);
        }}
        onBlur={() =>
          runValidationTasks("marked_complete_by", marked_complete_by)
        }
        errorMessage={errors.marked_complete_by?.errorMessage}
        hasError={errors.marked_complete_by?.hasError}
        {...getOverrideProps(overrides, "marked_complete_by")}
      ></TextField>
      <TextField
        label="Marked complete on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={marked_complete_on}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on: value,
              work_item_id,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.marked_complete_on ?? value;
          }
          if (errors.marked_complete_on?.hasError) {
            runValidationTasks("marked_complete_on", value);
          }
          setMarked_complete_on(value);
        }}
        onBlur={() =>
          runValidationTasks("marked_complete_on", marked_complete_on)
        }
        errorMessage={errors.marked_complete_on?.errorMessage}
        hasError={errors.marked_complete_on?.hasError}
        {...getOverrideProps(overrides, "marked_complete_on")}
      ></TextField>
      <TextField
        label="Work item id"
        isRequired={false}
        isReadOnly={false}
        value={work_item_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id: value,
              projectID,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.work_item_id ?? value;
          }
          if (errors.work_item_id?.hasError) {
            runValidationTasks("work_item_id", value);
          }
          setWork_item_id(value);
        }}
        onBlur={() => runValidationTasks("work_item_id", work_item_id)}
        errorMessage={errors.work_item_id?.errorMessage}
        hasError={errors.work_item_id?.hasError}
        {...getOverrideProps(overrides, "work_item_id")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID: value,
              contactID,
            };
            const result = onChange(modelFields);
            value = result?.projectID ?? value;
          }
          setProjectID(value);
          setCurrentProjectIDValue(undefined);
        }}
        currentFieldValue={currentProjectIDValue}
        label={"Project id"}
        items={projectID ? [projectID] : []}
        hasError={errors?.projectID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("projectID", currentProjectIDValue)
        }
        errorMessage={errors?.projectID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.projectID(
                projectIDRecords.find((r) => r.id === value) ??
                  selectedProjectIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentProjectIDDisplayValue(
            value
              ? getDisplayValue.projectID(
                  projectIDRecords.find((r) => r.id === value) ??
                    selectedProjectIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentProjectIDValue(value);
          const selectedRecord = projectIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedProjectIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={projectIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Project id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Project"
          value={currentProjectIDDisplayValue}
          options={projectIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.projectID?.(r),
            }))}
          isLoading={projectIDLoading}
          onSelect={({ id, label }) => {
            setCurrentProjectIDValue(id);
            setCurrentProjectIDDisplayValue(label);
            runValidationTasks("projectID", label);
          }}
          onClear={() => {
            setCurrentProjectIDDisplayValue("");
          }}
          defaultValue={projectID}
          onChange={(e) => {
            let { value } = e.target;
            fetchProjectIDRecords(value);
            if (errors.projectID?.hasError) {
              runValidationTasks("projectID", value);
            }
            setCurrentProjectIDDisplayValue(value);
            setCurrentProjectIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("projectID", currentProjectIDValue)}
          errorMessage={errors.projectID?.errorMessage}
          hasError={errors.projectID?.hasError}
          ref={projectIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "projectID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              project_id,
              contact_id,
              work_start_date,
              work_end_date,
              review_id,
              marked_complete_by,
              marked_complete_on,
              work_item_id,
              projectID,
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
          defaultValue={contactID}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || contractorProjectRelationshipsModelProp)}
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
              !(idProp || contractorProjectRelationshipsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
