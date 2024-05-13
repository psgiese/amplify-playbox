/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContractorUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
    phone?: string;
    email?: string;
    business_id?: string;
    business_name?: string;
    license_number?: string;
    insurance_id?: string;
};
export declare type ContractorUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    business_id?: ValidationFunction<string>;
    business_name?: ValidationFunction<string>;
    license_number?: ValidationFunction<string>;
    insurance_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractorUpdateFormOverridesProps = {
    ContractorUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    business_id?: PrimitiveOverrideProps<TextFieldProps>;
    business_name?: PrimitiveOverrideProps<TextFieldProps>;
    license_number?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContractorUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContractorUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contractor?: any;
    onSubmit?: (fields: ContractorUpdateFormInputValues) => ContractorUpdateFormInputValues;
    onSuccess?: (fields: ContractorUpdateFormInputValues) => void;
    onError?: (fields: ContractorUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractorUpdateFormInputValues) => ContractorUpdateFormInputValues;
    onValidate?: ContractorUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContractorUpdateForm(props: ContractorUpdateFormProps): React.ReactElement;
