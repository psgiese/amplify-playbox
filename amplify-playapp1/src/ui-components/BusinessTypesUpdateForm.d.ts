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
export declare type BusinessTypesUpdateFormInputValues = {
    business_type_name?: string;
    is_active?: boolean;
    created_by?: string;
    Businesses?: any[];
};
export declare type BusinessTypesUpdateFormValidationValues = {
    business_type_name?: ValidationFunction<string>;
    is_active?: ValidationFunction<boolean>;
    created_by?: ValidationFunction<string>;
    Businesses?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BusinessTypesUpdateFormOverridesProps = {
    BusinessTypesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    business_type_name?: PrimitiveOverrideProps<TextFieldProps>;
    is_active?: PrimitiveOverrideProps<SwitchFieldProps>;
    created_by?: PrimitiveOverrideProps<TextFieldProps>;
    Businesses?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BusinessTypesUpdateFormProps = React.PropsWithChildren<{
    overrides?: BusinessTypesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    businessTypes?: any;
    onSubmit?: (fields: BusinessTypesUpdateFormInputValues) => BusinessTypesUpdateFormInputValues;
    onSuccess?: (fields: BusinessTypesUpdateFormInputValues) => void;
    onError?: (fields: BusinessTypesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BusinessTypesUpdateFormInputValues) => BusinessTypesUpdateFormInputValues;
    onValidate?: BusinessTypesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BusinessTypesUpdateForm(props: BusinessTypesUpdateFormProps): React.ReactElement;
