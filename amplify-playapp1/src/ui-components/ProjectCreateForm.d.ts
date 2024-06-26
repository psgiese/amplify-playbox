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
export declare type ProjectCreateFormInputValues = {
    address?: string;
    bath_count?: number;
    bed_count?: number;
    projected_start_date?: string;
    actual_start_date?: string;
    builder_id?: string;
    city?: string;
    state?: string;
    actual_inspection_date?: string;
    lot_block?: string;
    model_name?: string;
    permit_number?: string;
    projected_list_price?: number;
    projected_completion_date?: string;
    actual_completion_date?: string;
    subdivision?: string;
    approximate_latitude?: number;
    approximate_longitude?: number;
    approximate_sqft_house?: number;
    assigned_super_id?: string;
    project_notes?: string;
    ContractorProjectRelationships?: any[];
    inspector_id?: string;
    project_name?: string;
    created_by?: string;
    zip?: number;
    businessesID?: string;
};
export declare type ProjectCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    bath_count?: ValidationFunction<number>;
    bed_count?: ValidationFunction<number>;
    projected_start_date?: ValidationFunction<string>;
    actual_start_date?: ValidationFunction<string>;
    builder_id?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    actual_inspection_date?: ValidationFunction<string>;
    lot_block?: ValidationFunction<string>;
    model_name?: ValidationFunction<string>;
    permit_number?: ValidationFunction<string>;
    projected_list_price?: ValidationFunction<number>;
    projected_completion_date?: ValidationFunction<string>;
    actual_completion_date?: ValidationFunction<string>;
    subdivision?: ValidationFunction<string>;
    approximate_latitude?: ValidationFunction<number>;
    approximate_longitude?: ValidationFunction<number>;
    approximate_sqft_house?: ValidationFunction<number>;
    assigned_super_id?: ValidationFunction<string>;
    project_notes?: ValidationFunction<string>;
    ContractorProjectRelationships?: ValidationFunction<any>;
    inspector_id?: ValidationFunction<string>;
    project_name?: ValidationFunction<string>;
    created_by?: ValidationFunction<string>;
    zip?: ValidationFunction<number>;
    businessesID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectCreateFormOverridesProps = {
    ProjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    bath_count?: PrimitiveOverrideProps<TextFieldProps>;
    bed_count?: PrimitiveOverrideProps<TextFieldProps>;
    projected_start_date?: PrimitiveOverrideProps<TextFieldProps>;
    actual_start_date?: PrimitiveOverrideProps<TextFieldProps>;
    builder_id?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    actual_inspection_date?: PrimitiveOverrideProps<TextFieldProps>;
    lot_block?: PrimitiveOverrideProps<TextFieldProps>;
    model_name?: PrimitiveOverrideProps<TextFieldProps>;
    permit_number?: PrimitiveOverrideProps<TextFieldProps>;
    projected_list_price?: PrimitiveOverrideProps<TextFieldProps>;
    projected_completion_date?: PrimitiveOverrideProps<TextFieldProps>;
    actual_completion_date?: PrimitiveOverrideProps<TextFieldProps>;
    subdivision?: PrimitiveOverrideProps<TextFieldProps>;
    approximate_latitude?: PrimitiveOverrideProps<TextFieldProps>;
    approximate_longitude?: PrimitiveOverrideProps<TextFieldProps>;
    approximate_sqft_house?: PrimitiveOverrideProps<TextFieldProps>;
    assigned_super_id?: PrimitiveOverrideProps<TextFieldProps>;
    project_notes?: PrimitiveOverrideProps<TextFieldProps>;
    ContractorProjectRelationships?: PrimitiveOverrideProps<AutocompleteProps>;
    inspector_id?: PrimitiveOverrideProps<TextFieldProps>;
    project_name?: PrimitiveOverrideProps<TextFieldProps>;
    created_by?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    businessesID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ProjectCreateFormProps = React.PropsWithChildren<{
    overrides?: ProjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onSuccess?: (fields: ProjectCreateFormInputValues) => void;
    onError?: (fields: ProjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectCreateFormInputValues) => ProjectCreateFormInputValues;
    onValidate?: ProjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectCreateForm(props: ProjectCreateFormProps): React.ReactElement;
