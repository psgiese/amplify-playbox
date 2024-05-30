/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BusinessContactRelationshipsUpdateFormInputValues = {
    contact_role_name?: string;
    relationship_created_on?: string;
    is_active_relationship?: boolean;
    relationship_ended_on?: string;
    relationship_ended_by?: string;
    businessesID?: string;
    contactID?: string;
};
export declare type BusinessContactRelationshipsUpdateFormValidationValues = {
    contact_role_name?: ValidationFunction<string>;
    relationship_created_on?: ValidationFunction<string>;
    is_active_relationship?: ValidationFunction<boolean>;
    relationship_ended_on?: ValidationFunction<string>;
    relationship_ended_by?: ValidationFunction<string>;
    businessesID?: ValidationFunction<string>;
    contactID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessContactRelationshipsUpdateFormOverridesProps = {
    BusinessContactRelationshipsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    contact_role_name?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_created_on?: PrimitiveOverrideProps<TextFieldProps>;
    is_active_relationship?: PrimitiveOverrideProps<SwitchFieldProps>;
    relationship_ended_on?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_ended_by?: PrimitiveOverrideProps<TextFieldProps>;
    businessesID?: PrimitiveOverrideProps<AutocompleteProps>;
    contactID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BusinessContactRelationshipsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessContactRelationshipsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessContactRelationships?: any;
    onSubmit?: (fields: BusinessContactRelationshipsUpdateFormInputValues) => BusinessContactRelationshipsUpdateFormInputValues;
    onSuccess?: (fields: BusinessContactRelationshipsUpdateFormInputValues) => void;
    onError?: (fields: BusinessContactRelationshipsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessContactRelationshipsUpdateFormInputValues) => BusinessContactRelationshipsUpdateFormInputValues;
    onValidate?: BusinessContactRelationshipsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessContactRelationshipsUpdateForm(props: BusinessContactRelationshipsUpdateFormProps): React.ReactElement;
