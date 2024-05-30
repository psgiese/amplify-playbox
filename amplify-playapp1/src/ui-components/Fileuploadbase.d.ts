/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
export declare type FileuploadbaseOverridesProps = {
    Fileuploadbase?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Icon frame"?: PrimitiveOverrideProps<FlexProps>;
    "vuesax/outline/document-upload"?: PrimitiveOverrideProps<ViewProps>;
    "Text and supporting text"?: PrimitiveOverrideProps<FlexProps>;
    Action?: PrimitiveOverrideProps<FlexProps>;
    Text48981120?: PrimitiveOverrideProps<TextProps>;
    Text48981121?: PrimitiveOverrideProps<TextProps>;
    "Supporting text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FileuploadbaseProps = React.PropsWithChildren<Partial<FlexProps> & {
    uploadfile?: (event: SyntheticEvent) => void;
} & {
    overrides?: FileuploadbaseOverridesProps | undefined | null;
}>;
export default function Fileuploadbase(props: FileuploadbaseProps): React.ReactElement;
