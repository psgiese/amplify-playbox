/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ContractorProjectRelationshipsCreateFormInputValues = {
    project_id?: string;
    contact_id?: string;
    work_start_date?: string;
    work_end_date?: string;
    review_id?: string;
    marked_complete_by?: string;
    marked_complete_on?: string;
    work_item_id?: string;
    projectID?: string;
    contactID?: string;
};
export declare type ContractorProjectRelationshipsCreateFormValidationValues = {
    project_id?: ValidationFunction<string>;
    contact_id?: ValidationFunction<string>;
    work_start_date?: ValidationFunction<string>;
    work_end_date?: ValidationFunction<string>;
    review_id?: ValidationFunction<string>;
    marked_complete_by?: ValidationFunction<string>;
    marked_complete_on?: ValidationFunction<string>;
    work_item_id?: ValidationFunction<string>;
    projectID?: ValidationFunction<string>;
    contactID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractorProjectRelationshipsCreateFormOverridesProps = {
    ContractorProjectRelationshipsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    project_id?: PrimitiveOverrideProps<TextFieldProps>;
    contact_id?: PrimitiveOverrideProps<TextFieldProps>;
    work_start_date?: PrimitiveOverrideProps<TextFieldProps>;
    work_end_date?: PrimitiveOverrideProps<TextFieldProps>;
    review_id?: PrimitiveOverrideProps<TextFieldProps>;
    marked_complete_by?: PrimitiveOverrideProps<TextFieldProps>;
    marked_complete_on?: PrimitiveOverrideProps<TextFieldProps>;
    work_item_id?: PrimitiveOverrideProps<TextFieldProps>;
    projectID?: PrimitiveOverrideProps<AutocompleteProps>;
    contactID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ContractorProjectRelationshipsCreateFormProps = React.PropsWithChildren<{
    overrides?: ContractorProjectRelationshipsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContractorProjectRelationshipsCreateFormInputValues) => ContractorProjectRelationshipsCreateFormInputValues;
    onSuccess?: (fields: ContractorProjectRelationshipsCreateFormInputValues) => void;
    onError?: (fields: ContractorProjectRelationshipsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractorProjectRelationshipsCreateFormInputValues) => ContractorProjectRelationshipsCreateFormInputValues;
    onValidate?: ContractorProjectRelationshipsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContractorProjectRelationshipsCreateForm(props: ContractorProjectRelationshipsCreateFormProps): React.ReactElement;
