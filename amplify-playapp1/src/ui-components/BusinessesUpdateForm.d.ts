/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BusinessesUpdateFormInputValues = {
    business_name?: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    business_phone?: string;
    business_email?: string;
    website?: string;
    license_registration_id?: string;
    license_issued_by?: string;
    license_expiration_date?: string;
    general_liability_insurance?: string;
    license_registration_name?: string;
    business_type_name?: string;
    businesstypesID?: string;
    BusinessContactRelationships?: any[];
    Projects?: any[];
};
export declare type BusinessesUpdateFormValidationValues = {
    business_name?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    business_phone?: ValidationFunction<string>;
    business_email?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    license_registration_id?: ValidationFunction<string>;
    license_issued_by?: ValidationFunction<string>;
    license_expiration_date?: ValidationFunction<string>;
    general_liability_insurance?: ValidationFunction<string>;
    license_registration_name?: ValidationFunction<string>;
    business_type_name?: ValidationFunction<string>;
    businesstypesID?: ValidationFunction<string>;
    BusinessContactRelationships?: ValidationFunction<any>;
    Projects?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessesUpdateFormOverridesProps = {
    BusinessesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    business_name?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    business_phone?: PrimitiveOverrideProps<TextFieldProps>;
    business_email?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    license_registration_id?: PrimitiveOverrideProps<TextFieldProps>;
    license_issued_by?: PrimitiveOverrideProps<TextFieldProps>;
    license_expiration_date?: PrimitiveOverrideProps<TextFieldProps>;
    general_liability_insurance?: PrimitiveOverrideProps<TextAreaFieldProps>;
    license_registration_name?: PrimitiveOverrideProps<TextFieldProps>;
    business_type_name?: PrimitiveOverrideProps<TextFieldProps>;
    businesstypesID?: PrimitiveOverrideProps<AutocompleteProps>;
    BusinessContactRelationships?: PrimitiveOverrideProps<AutocompleteProps>;
    Projects?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BusinessesUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businesses?: any;
    onSubmit?: (fields: BusinessesUpdateFormInputValues) => BusinessesUpdateFormInputValues;
    onSuccess?: (fields: BusinessesUpdateFormInputValues) => void;
    onError?: (fields: BusinessesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessesUpdateFormInputValues) => BusinessesUpdateFormInputValues;
    onValidate?: BusinessesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessesUpdateForm(props: BusinessesUpdateFormProps): React.ReactElement;
