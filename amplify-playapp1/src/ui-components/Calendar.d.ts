/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CalendarOverridesProps = {
    Calendar?: PrimitiveOverrideProps<FlexProps>;
    Components?: PrimitiveOverrideProps<FlexProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Day of Week"?: PrimitiveOverrideProps<FlexProps>;
    Weeks?: PrimitiveOverrideProps<FlexProps>;
    "Week 1"?: PrimitiveOverrideProps<FlexProps>;
    "Component 548774626"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774627"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774628"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774629"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774630"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774631"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774632"?: PrimitiveOverrideProps<ViewProps>;
    "Week 2"?: PrimitiveOverrideProps<FlexProps>;
    "Component 548774634"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774635"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774636"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774637"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774638"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774639"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774640"?: PrimitiveOverrideProps<ViewProps>;
    "Week 3"?: PrimitiveOverrideProps<FlexProps>;
    "Component 548774642"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774643"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774644"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774645"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774646"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774647"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774648"?: PrimitiveOverrideProps<ViewProps>;
    "Week 4"?: PrimitiveOverrideProps<FlexProps>;
    "Component 548774650"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774651"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774652"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774653"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774654"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774655"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774656"?: PrimitiveOverrideProps<ViewProps>;
    "Week 5"?: PrimitiveOverrideProps<FlexProps>;
    "Component 548774658"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774659"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774660"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774661"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774662"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774663"?: PrimitiveOverrideProps<ViewProps>;
    "Component 548774664"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CalendarProps = React.PropsWithChildren<Partial<FlexProps> & {
    property1?: "Hover" | "Regular" | "Selected";
} & {
    overrides?: CalendarOverridesProps | undefined | null;
}>;
export default function Calendar(props: CalendarProps): React.ReactElement;
