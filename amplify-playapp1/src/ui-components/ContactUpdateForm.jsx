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
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getContact,
  getContactTypes,
  listBusinessContactRelationships,
  listContactTypes,
  listContractorProjectRelationships,
} from "../graphql/queries";
import {
  updateBusinessContactRelationships,
  updateContact,
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
export default function ContactUpdateForm(props) {
  const {
    id: idProp,
    contact: contactModelProp,
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
    primary_phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    allowed_actions: [],
    ok_to_bid: false,
    secondary_phone: "",
    secondary_email: "",
    website: "",
    ContractorProjectRelationships: [],
    primary_email: "",
    BusinessContactRelationships: [],
    contacttypesID: undefined,
    bid_email: "",
    bid_phone: "",
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [primary_phone, setPrimary_phone] = React.useState(
    initialValues.primary_phone
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [allowed_actions, setAllowed_actions] = React.useState(
    initialValues.allowed_actions
  );
  const [ok_to_bid, setOk_to_bid] = React.useState(initialValues.ok_to_bid);
  const [secondary_phone, setSecondary_phone] = React.useState(
    initialValues.secondary_phone
  );
  const [secondary_email, setSecondary_email] = React.useState(
    initialValues.secondary_email
  );
  const [website, setWebsite] = React.useState(initialValues.website);
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
  const [primary_email, setPrimary_email] = React.useState(
    initialValues.primary_email
  );
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
  const [contacttypesID, setContacttypesID] = React.useState(
    initialValues.contacttypesID
  );
  const [contacttypesIDLoading, setContacttypesIDLoading] =
    React.useState(false);
  const [contacttypesIDRecords, setContacttypesIDRecords] = React.useState([]);
  const [selectedContacttypesIDRecords, setSelectedContacttypesIDRecords] =
    React.useState([]);
  const [bid_email, setBid_email] = React.useState(initialValues.bid_email);
  const [bid_phone, setBid_phone] = React.useState(initialValues.bid_phone);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = contactRecord
      ? {
          ...initialValues,
          ...contactRecord,
          ContractorProjectRelationships: linkedContractorProjectRelationships,
          BusinessContactRelationships: linkedBusinessContactRelationships,
          contacttypesID,
        }
      : initialValues;
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setPrimary_phone(cleanValues.primary_phone);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip(cleanValues.zip);
    setAllowed_actions(cleanValues.allowed_actions ?? []);
    setCurrentAllowed_actionsValue("");
    setOk_to_bid(cleanValues.ok_to_bid);
    setSecondary_phone(cleanValues.secondary_phone);
    setSecondary_email(cleanValues.secondary_email);
    setWebsite(cleanValues.website);
    setContractorProjectRelationships(
      cleanValues.ContractorProjectRelationships ?? []
    );
    setCurrentContractorProjectRelationshipsValue(undefined);
    setCurrentContractorProjectRelationshipsDisplayValue("");
    setPrimary_email(cleanValues.primary_email);
    setBusinessContactRelationships(
      cleanValues.BusinessContactRelationships ?? []
    );
    setCurrentBusinessContactRelationshipsValue(undefined);
    setCurrentBusinessContactRelationshipsDisplayValue("");
    setContacttypesID(cleanValues.contacttypesID);
    setCurrentContacttypesIDValue(undefined);
    setCurrentContacttypesIDDisplayValue("");
    setBid_email(cleanValues.bid_email);
    setBid_phone(cleanValues.bid_phone);
    setErrors({});
  };
  const [contactRecord, setContactRecord] = React.useState(contactModelProp);
  const [
    linkedContractorProjectRelationships,
    setLinkedContractorProjectRelationships,
  ] = React.useState([]);
  const canUnlinkContractorProjectRelationships = false;
  const [
    linkedBusinessContactRelationships,
    setLinkedBusinessContactRelationships,
  ] = React.useState([]);
  const canUnlinkBusinessContactRelationships = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getContact.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getContact
        : contactModelProp;
      const linkedContractorProjectRelationships =
        record?.ContractorProjectRelationships?.items ?? [];
      setLinkedContractorProjectRelationships(
        linkedContractorProjectRelationships
      );
      const linkedBusinessContactRelationships =
        record?.BusinessContactRelationships?.items ?? [];
      setLinkedBusinessContactRelationships(linkedBusinessContactRelationships);
      const contacttypesIDRecord = record ? record.contacttypesID : undefined;
      const contactTypesRecord = contacttypesIDRecord
        ? (
            await client.graphql({
              query: getContactTypes.replaceAll("__typename", ""),
              variables: { id: contacttypesIDRecord },
            })
          )?.data?.getContactTypes
        : undefined;
      setContacttypesID(contacttypesIDRecord);
      setSelectedContacttypesIDRecords([contactTypesRecord]);
      setContactRecord(record);
    };
    queryData();
  }, [idProp, contactModelProp]);
  React.useEffect(resetStateValues, [
    contactRecord,
    linkedContractorProjectRelationships,
    linkedBusinessContactRelationships,
    contacttypesID,
  ]);
  const [currentAllowed_actionsValue, setCurrentAllowed_actionsValue] =
    React.useState("");
  const allowed_actionsRef = React.createRef();
  const [
    currentContractorProjectRelationshipsDisplayValue,
    setCurrentContractorProjectRelationshipsDisplayValue,
  ] = React.useState("");
  const [
    currentContractorProjectRelationshipsValue,
    setCurrentContractorProjectRelationshipsValue,
  ] = React.useState(undefined);
  const ContractorProjectRelationshipsRef = React.createRef();
  const [
    currentBusinessContactRelationshipsDisplayValue,
    setCurrentBusinessContactRelationshipsDisplayValue,
  ] = React.useState("");
  const [
    currentBusinessContactRelationshipsValue,
    setCurrentBusinessContactRelationshipsValue,
  ] = React.useState(undefined);
  const BusinessContactRelationshipsRef = React.createRef();
  const [
    currentContacttypesIDDisplayValue,
    setCurrentContacttypesIDDisplayValue,
  ] = React.useState("");
  const [currentContacttypesIDValue, setCurrentContacttypesIDValue] =
    React.useState(undefined);
  const contacttypesIDRef = React.createRef();
  const getIDValue = {
    ContractorProjectRelationships: (r) => JSON.stringify({ id: r?.id }),
    BusinessContactRelationships: (r) => JSON.stringify({ id: r?.id }),
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
  const BusinessContactRelationshipsIdSet = new Set(
    Array.isArray(BusinessContactRelationships)
      ? BusinessContactRelationships.map((r) =>
          getIDValue.BusinessContactRelationships?.(r)
        )
      : getIDValue.BusinessContactRelationships?.(BusinessContactRelationships)
  );
  const getDisplayValue = {
    ContractorProjectRelationships: (r) => r?.id,
    BusinessContactRelationships: (r) =>
      `${r?.contact_role_name ? r?.contact_role_name + " - " : ""}${r?.id}`,
    contacttypesID: (r) =>
      `${r?.contact_type_name ? r?.contact_type_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    primary_phone: [{ type: "Required" }, { type: "Phone" }],
    address: [],
    city: [],
    state: [],
    zip: [],
    allowed_actions: [{ type: "Required" }, { type: "JSON" }],
    ok_to_bid: [{ type: "Required" }],
    secondary_phone: [{ type: "Phone" }],
    secondary_email: [{ type: "Email" }],
    website: [{ type: "URL" }],
    ContractorProjectRelationships: [],
    primary_email: [{ type: "Email" }],
    BusinessContactRelationships: [],
    contacttypesID: [{ type: "Required" }],
    bid_email: [{ type: "Email" }],
    bid_phone: [{ type: "Phone" }],
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
  const fetchContacttypesIDRecords = async (value) => {
    setContacttypesIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { contact_type_name: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listContactTypes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listContactTypes?.items;
      var loaded = result.filter((item) => contacttypesID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setContacttypesIDRecords(newOptions.slice(0, autocompleteLength));
    setContacttypesIDLoading(false);
  };
  React.useEffect(() => {
    fetchContractorProjectRelationshipsRecords("");
    fetchBusinessContactRelationshipsRecords("");
    fetchContacttypesIDRecords("");
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
          first_name,
          last_name,
          primary_phone,
          address: address ?? null,
          city: city ?? null,
          state: state ?? null,
          zip: zip ?? null,
          allowed_actions,
          ok_to_bid,
          secondary_phone: secondary_phone ?? null,
          secondary_email: secondary_email ?? null,
          website: website ?? null,
          ContractorProjectRelationships:
            ContractorProjectRelationships ?? null,
          primary_email: primary_email ?? null,
          BusinessContactRelationships: BusinessContactRelationships ?? null,
          contacttypesID,
          bid_email: bid_email ?? null,
          bid_phone: bid_phone ?? null,
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
          const promises = [];
          const contractorProjectRelationshipsToLink = [];
          const contractorProjectRelationshipsToUnLink = [];
          const contractorProjectRelationshipsSet = new Set();
          const linkedContractorProjectRelationshipsSet = new Set();
          ContractorProjectRelationships.forEach((r) =>
            contractorProjectRelationshipsSet.add(
              getIDValue.ContractorProjectRelationships?.(r)
            )
          );
          linkedContractorProjectRelationships.forEach((r) =>
            linkedContractorProjectRelationshipsSet.add(
              getIDValue.ContractorProjectRelationships?.(r)
            )
          );
          linkedContractorProjectRelationships.forEach((r) => {
            if (
              !contractorProjectRelationshipsSet.has(
                getIDValue.ContractorProjectRelationships?.(r)
              )
            ) {
              contractorProjectRelationshipsToUnLink.push(r);
            }
          });
          ContractorProjectRelationships.forEach((r) => {
            if (
              !linkedContractorProjectRelationshipsSet.has(
                getIDValue.ContractorProjectRelationships?.(r)
              )
            ) {
              contractorProjectRelationshipsToLink.push(r);
            }
          });
          contractorProjectRelationshipsToUnLink.forEach((original) => {
            if (!canUnlinkContractorProjectRelationships) {
              throw Error(
                `ContractorProjectRelationships ${original.id} cannot be unlinked from Contact because contactID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateContractorProjectRelationships.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  input: {
                    id: original.id,
                    contactID: null,
                  },
                },
              })
            );
          });
          contractorProjectRelationshipsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateContractorProjectRelationships.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  input: {
                    id: original.id,
                    contactID: contactRecord.id,
                  },
                },
              })
            );
          });
          const businessContactRelationshipsToLink = [];
          const businessContactRelationshipsToUnLink = [];
          const businessContactRelationshipsSet = new Set();
          const linkedBusinessContactRelationshipsSet = new Set();
          BusinessContactRelationships.forEach((r) =>
            businessContactRelationshipsSet.add(
              getIDValue.BusinessContactRelationships?.(r)
            )
          );
          linkedBusinessContactRelationships.forEach((r) =>
            linkedBusinessContactRelationshipsSet.add(
              getIDValue.BusinessContactRelationships?.(r)
            )
          );
          linkedBusinessContactRelationships.forEach((r) => {
            if (
              !businessContactRelationshipsSet.has(
                getIDValue.BusinessContactRelationships?.(r)
              )
            ) {
              businessContactRelationshipsToUnLink.push(r);
            }
          });
          BusinessContactRelationships.forEach((r) => {
            if (
              !linkedBusinessContactRelationshipsSet.has(
                getIDValue.BusinessContactRelationships?.(r)
              )
            ) {
              businessContactRelationshipsToLink.push(r);
            }
          });
          businessContactRelationshipsToUnLink.forEach((original) => {
            if (!canUnlinkBusinessContactRelationships) {
              throw Error(
                `BusinessContactRelationships ${original.id} cannot be unlinked from Contact because contactID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateBusinessContactRelationships.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  input: {
                    id: original.id,
                    contactID: null,
                  },
                },
              })
            );
          });
          businessContactRelationshipsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateBusinessContactRelationships.replaceAll(
                  "__typename",
                  ""
                ),
                variables: {
                  input: {
                    id: original.id,
                    contactID: contactRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            first_name: modelFields.first_name,
            last_name: modelFields.last_name,
            primary_phone: modelFields.primary_phone,
            address: modelFields.address ?? null,
            city: modelFields.city ?? null,
            state: modelFields.state ?? null,
            zip: modelFields.zip ?? null,
            allowed_actions: modelFields.allowed_actions,
            ok_to_bid: modelFields.ok_to_bid,
            secondary_phone: modelFields.secondary_phone ?? null,
            secondary_email: modelFields.secondary_email ?? null,
            website: modelFields.website ?? null,
            primary_email: modelFields.primary_email ?? null,
            contacttypesID: modelFields.contacttypesID,
            bid_email: modelFields.bid_email ?? null,
            bid_phone: modelFields.bid_phone ?? null,
          };
          promises.push(
            client.graphql({
              query: updateContact.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: contactRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "ContactUpdateForm")}
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
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
        label="Primary phone"
        isRequired={true}
        isReadOnly={false}
        type="tel"
        value={primary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone: value,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.primary_phone ?? value;
          }
          if (errors.primary_phone?.hasError) {
            runValidationTasks("primary_phone", value);
          }
          setPrimary_phone(value);
        }}
        onBlur={() => runValidationTasks("primary_phone", primary_phone)}
        errorMessage={errors.primary_phone?.errorMessage}
        hasError={errors.primary_phone?.hasError}
        {...getOverrideProps(overrides, "primary_phone")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address: value,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
              first_name,
              last_name,
              primary_phone,
              address,
              city: value,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state: value,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip: value,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions: values,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            values = result?.allowed_actions ?? values;
          }
          setAllowed_actions(values);
          setCurrentAllowed_actionsValue("");
        }}
        currentFieldValue={currentAllowed_actionsValue}
        label={"Allowed actions"}
        items={allowed_actions}
        hasError={errors?.allowed_actions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "allowed_actions",
            currentAllowed_actionsValue
          )
        }
        errorMessage={errors?.allowed_actions?.errorMessage}
        setFieldValue={setCurrentAllowed_actionsValue}
        inputFieldRef={allowed_actionsRef}
        defaultFieldValue={""}
      >
        <TextAreaField
          label="Allowed actions"
          isRequired={true}
          isReadOnly={false}
          value={currentAllowed_actionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.allowed_actions?.hasError) {
              runValidationTasks("allowed_actions", value);
            }
            setCurrentAllowed_actionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("allowed_actions", currentAllowed_actionsValue)
          }
          errorMessage={errors.allowed_actions?.errorMessage}
          hasError={errors.allowed_actions?.hasError}
          ref={allowed_actionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "allowed_actions")}
        ></TextAreaField>
      </ArrayField>
      <SwitchField
        label="Ok to bid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ok_to_bid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid: value,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.ok_to_bid ?? value;
          }
          if (errors.ok_to_bid?.hasError) {
            runValidationTasks("ok_to_bid", value);
          }
          setOk_to_bid(value);
        }}
        onBlur={() => runValidationTasks("ok_to_bid", ok_to_bid)}
        errorMessage={errors.ok_to_bid?.errorMessage}
        hasError={errors.ok_to_bid?.hasError}
        {...getOverrideProps(overrides, "ok_to_bid")}
      ></SwitchField>
      <TextField
        label="Secondary phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={secondary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone: value,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.secondary_phone ?? value;
          }
          if (errors.secondary_phone?.hasError) {
            runValidationTasks("secondary_phone", value);
          }
          setSecondary_phone(value);
        }}
        onBlur={() => runValidationTasks("secondary_phone", secondary_phone)}
        errorMessage={errors.secondary_phone?.errorMessage}
        hasError={errors.secondary_phone?.hasError}
        {...getOverrideProps(overrides, "secondary_phone")}
      ></TextField>
      <TextField
        label="Secondary email"
        isRequired={false}
        isReadOnly={false}
        value={secondary_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email: value,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.secondary_email ?? value;
          }
          if (errors.secondary_email?.hasError) {
            runValidationTasks("secondary_email", value);
          }
          setSecondary_email(value);
        }}
        onBlur={() => runValidationTasks("secondary_email", secondary_email)}
        errorMessage={errors.secondary_email?.errorMessage}
        hasError={errors.secondary_email?.hasError}
        {...getOverrideProps(overrides, "secondary_email")}
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
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website: value,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships: values,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
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
        label="Primary email"
        isRequired={false}
        isReadOnly={false}
        value={primary_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email: value,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.primary_email ?? value;
          }
          if (errors.primary_email?.hasError) {
            runValidationTasks("primary_email", value);
          }
          setPrimary_email(value);
        }}
        onBlur={() => runValidationTasks("primary_email", primary_email)}
        errorMessage={errors.primary_email?.errorMessage}
        hasError={errors.primary_email?.hasError}
        {...getOverrideProps(overrides, "primary_email")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships: values,
              contacttypesID,
              bid_email,
              bid_phone,
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
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID: value,
              bid_email,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.contacttypesID ?? value;
          }
          setContacttypesID(value);
          setCurrentContacttypesIDValue(undefined);
        }}
        currentFieldValue={currentContacttypesIDValue}
        label={"Contacttypes id"}
        items={contacttypesID ? [contacttypesID] : []}
        hasError={errors?.contacttypesID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("contacttypesID", currentContacttypesIDValue)
        }
        errorMessage={errors?.contacttypesID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.contacttypesID(
                contacttypesIDRecords.find((r) => r.id === value) ??
                  selectedContacttypesIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentContacttypesIDDisplayValue(
            value
              ? getDisplayValue.contacttypesID(
                  contacttypesIDRecords.find((r) => r.id === value) ??
                    selectedContacttypesIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentContacttypesIDValue(value);
          const selectedRecord = contacttypesIDRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedContacttypesIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={contacttypesIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Contacttypes id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search ContactTypes"
          value={currentContacttypesIDDisplayValue}
          options={contacttypesIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.contacttypesID?.(r),
            }))}
          isLoading={contacttypesIDLoading}
          onSelect={({ id, label }) => {
            setCurrentContacttypesIDValue(id);
            setCurrentContacttypesIDDisplayValue(label);
            runValidationTasks("contacttypesID", label);
          }}
          onClear={() => {
            setCurrentContacttypesIDDisplayValue("");
          }}
          defaultValue={contacttypesID}
          onChange={(e) => {
            let { value } = e.target;
            fetchContacttypesIDRecords(value);
            if (errors.contacttypesID?.hasError) {
              runValidationTasks("contacttypesID", value);
            }
            setCurrentContacttypesIDDisplayValue(value);
            setCurrentContacttypesIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("contacttypesID", currentContacttypesIDValue)
          }
          errorMessage={errors.contacttypesID?.errorMessage}
          hasError={errors.contacttypesID?.hasError}
          ref={contacttypesIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "contacttypesID")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Bid email"
        isRequired={false}
        isReadOnly={false}
        value={bid_email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email: value,
              bid_phone,
            };
            const result = onChange(modelFields);
            value = result?.bid_email ?? value;
          }
          if (errors.bid_email?.hasError) {
            runValidationTasks("bid_email", value);
          }
          setBid_email(value);
        }}
        onBlur={() => runValidationTasks("bid_email", bid_email)}
        errorMessage={errors.bid_email?.errorMessage}
        hasError={errors.bid_email?.hasError}
        {...getOverrideProps(overrides, "bid_email")}
      ></TextField>
      <TextField
        label="Bid phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={bid_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              primary_phone,
              address,
              city,
              state,
              zip,
              allowed_actions,
              ok_to_bid,
              secondary_phone,
              secondary_email,
              website,
              ContractorProjectRelationships,
              primary_email,
              BusinessContactRelationships,
              contacttypesID,
              bid_email,
              bid_phone: value,
            };
            const result = onChange(modelFields);
            value = result?.bid_phone ?? value;
          }
          if (errors.bid_phone?.hasError) {
            runValidationTasks("bid_phone", value);
          }
          setBid_phone(value);
        }}
        onBlur={() => runValidationTasks("bid_phone", bid_phone)}
        errorMessage={errors.bid_phone?.errorMessage}
        hasError={errors.bid_phone?.hasError}
        {...getOverrideProps(overrides, "bid_phone")}
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
          isDisabled={!(idProp || contactModelProp)}
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
              !(idProp || contactModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
