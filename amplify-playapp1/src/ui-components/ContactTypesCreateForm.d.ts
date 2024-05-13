/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContactTypesCreateFormInputValues = {
    contact_type_name?: string;
    is_active?: boolean;
    created_by?: string;
};
export declare type ContactTypesCreateFormValidationValues = {
    contact_type_name?: ValidationFunction<string>;
    is_active?: ValidationFunction<boolean>;
    created_by?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactTypesCreateFormOverridesProps = {
    ContactTypesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    contact_type_name?: PrimitiveOverrideProps<TextFieldProps>;
    is_active?: PrimitiveOverrideProps<SwitchFieldProps>;
    created_by?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactTypesCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactTypesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactTypesCreateFormInputValues) => ContactTypesCreateFormInputValues;
    onSuccess?: (fields: ContactTypesCreateFormInputValues) => void;
    onError?: (fields: ContactTypesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactTypesCreateFormInputValues) => ContactTypesCreateFormInputValues;
    onValidate?: ContactTypesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactTypesCreateForm(props: ContactTypesCreateFormProps): React.ReactElement;
