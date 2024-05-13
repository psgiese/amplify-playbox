/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectFormOverridesProps = {
    ProjectForm?: PrimitiveOverrideProps<ViewProps>;
    "Let\u2019s build"?: PrimitiveOverrideProps<TextProps>;
    TextField48734288?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734349?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734314?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734363?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734321?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734328?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734335?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734307?: PrimitiveOverrideProps<TextFieldProps>;
    TextField48734356?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProjectFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ProjectFormOverridesProps | undefined | null;
}>;
export default function ProjectForm(props: ProjectFormProps): React.ReactElement;
