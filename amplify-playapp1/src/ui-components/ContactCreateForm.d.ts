/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    primary_phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    allowed_actions?: string[];
    ok_to_bid?: boolean;
    secondary_phone?: string;
    secondary_email?: string;
    website?: string;
    ContractorProjectRelationships?: any[];
    primary_email?: string;
    BusinessContactRelationships?: any[];
    contacttypesID?: string;
    bid_email?: string;
    bid_phone?: string;
};
export declare type ContactCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    primary_phone?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    allowed_actions?: ValidationFunction<string>;
    ok_to_bid?: ValidationFunction<boolean>;
    secondary_phone?: ValidationFunction<string>;
    secondary_email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    ContractorProjectRelationships?: ValidationFunction<any>;
    primary_email?: ValidationFunction<string>;
    BusinessContactRelationships?: ValidationFunction<any>;
    contacttypesID?: ValidationFunction<string>;
    bid_email?: ValidationFunction<string>;
    bid_phone?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactCreateFormOverridesProps = {
    ContactCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    primary_phone?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    allowed_actions?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ok_to_bid?: PrimitiveOverrideProps<SwitchFieldProps>;
    secondary_phone?: PrimitiveOverrideProps<TextFieldProps>;
    secondary_email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    ContractorProjectRelationships?: PrimitiveOverrideProps<AutocompleteProps>;
    primary_email?: PrimitiveOverrideProps<TextFieldProps>;
    BusinessContactRelationships?: PrimitiveOverrideProps<AutocompleteProps>;
    contacttypesID?: PrimitiveOverrideProps<AutocompleteProps>;
    bid_email?: PrimitiveOverrideProps<TextFieldProps>;
    bid_phone?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactCreateFormInputValues) => ContactCreateFormInputValues;
    onSuccess?: (fields: ContactCreateFormInputValues) => void;
    onError?: (fields: ContactCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactCreateFormInputValues) => ContactCreateFormInputValues;
    onValidate?: ContactCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactCreateForm(props: ContactCreateFormProps): React.ReactElement;
