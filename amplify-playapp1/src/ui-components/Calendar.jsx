/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "./utils";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Calendar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Header: {},
        "Day of Week": {},
        "Component 548774626": {},
        "Component 548774627": {},
        "Component 548774628": {},
        "Component 548774629": {},
        "Component 548774630": {},
        "Component 548774631": {},
        "Component 548774632": {},
        "Week 1": {},
        "Component 548774634": {},
        "Component 548774635": {},
        "Component 548774636": {},
        "Component 548774637": {},
        "Component 548774638": {},
        "Component 548774639": {},
        "Component 548774640": {},
        "Week 2": {},
        "Component 548774642": {},
        "Component 548774643": {},
        "Component 548774644": {},
        "Component 548774645": {},
        "Component 548774646": {},
        "Component 548774647": {},
        "Component 548774648": {},
        "Week 3": {},
        "Component 548774650": {},
        "Component 548774651": {},
        "Component 548774652": {},
        "Component 548774653": {},
        "Component 548774654": {},
        "Component 548774655": {},
        "Component 548774656": {},
        "Week 4": {},
        "Component 548774658": {},
        "Component 548774659": {},
        "Component 548774660": {},
        "Component 548774661": {},
        "Component 548774662": {},
        "Component 548774663": {},
        "Component 548774664": {},
        "Week 5": {},
        Weeks: {},
        Components: {},
        Calendar: {},
      },
      variantValues: { property1: "Regular" },
    },
    {
      overrides: {
        Header: {},
        "Day of Week": {},
        "Component 548774626": {},
        "Component 548774627": {},
        "Component 548774628": {},
        "Component 548774629": {},
        "Component 548774630": {},
        "Component 548774631": {},
        "Component 548774632": {},
        "Week 1": {},
        "Component 548774634": {},
        "Component 548774635": {},
        "Component 548774636": {},
        "Component 548774637": {},
        "Component 548774638": {},
        "Component 548774639": {},
        "Component 548774640": {},
        "Week 2": {},
        "Component 548774642": {},
        "Component 548774643": {},
        "Component 548774644": {},
        "Component 548774645": {},
        "Component 548774646": {},
        "Component 548774647": {},
        "Component 548774648": {},
        "Week 3": {},
        "Component 548774650": {},
        "Component 548774651": {},
        "Component 548774652": {},
        "Component 548774653": {},
        "Component 548774654": {},
        "Component 548774655": {},
        "Component 548774656": {},
        "Week 4": {},
        "Component 548774658": {},
        "Component 548774659": {},
        "Component 548774660": {},
        "Component 548774661": {},
        "Component 548774662": {},
        "Component 548774663": {},
        "Component 548774664": {},
        "Week 5": {},
        Weeks: {},
        Components: {},
        Calendar: {},
      },
      variantValues: { property1: "Selected" },
    },
    {
      overrides: {
        Header: {},
        "Day of Week": {},
        "Component 548774626": {},
        "Component 548774627": {},
        "Component 548774628": {},
        "Component 548774629": {},
        "Component 548774630": {},
        "Component 548774631": {},
        "Component 548774632": {},
        "Week 1": {},
        "Component 548774634": {},
        "Component 548774635": {},
        "Component 548774636": {},
        "Component 548774637": {},
        "Component 548774638": {},
        "Component 548774639": {},
        "Component 548774640": {},
        "Week 2": {},
        "Component 548774642": {},
        "Component 548774643": {},
        "Component 548774644": {},
        "Component 548774645": {},
        "Component 548774646": {},
        "Component 548774647": {},
        "Component 548774648": {},
        "Week 3": {},
        "Component 548774650": {},
        "Component 548774651": {},
        "Component 548774652": {},
        "Component 548774653": {},
        "Component 548774654": {},
        "Component 548774655": {},
        "Component 548774656": {},
        "Week 4": {},
        "Component 548774658": {},
        "Component 548774659": {},
        "Component 548774660": {},
        "Component 548774661": {},
        "Component 548774662": {},
        "Component 548774663": {},
        "Component 548774664": {},
        "Week 5": {},
        Weeks: {},
        Components: {},
        Calendar: {},
      },
      variantValues: { property1: "Hover" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 1px 2px rgba(0, 0.055686283856630325, 0.20000000298023224, 0.25)"
      borderRadius="16px"
      padding="23px 23px 23px 23px"
      backgroundColor="rgba(245,245,245,1)"
      display="flex"
      {...getOverrideProps(overrides, "Calendar")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Components")}
      >
        <View
          width="378px"
          height="44px"
          {...getOverrideProps(overrides, "Header")}
        ></View>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "Day of Week")}
        ></Flex>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Weeks")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Week 1")}
          >
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774626")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774627")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774628")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774629")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774630")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774631")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774632")}
            ></View>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Week 2")}
          >
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774634")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774635")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774636")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774637")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774638")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774639")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774640")}
            ></View>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Week 3")}
          >
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774642")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774643")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774644")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774645")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774646")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774647")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774648")}
            ></View>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Week 4")}
          >
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774650")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774651")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774652")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774653")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774654")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774655")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774656")}
            ></View>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Week 5")}
          >
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774658")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774659")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774660")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774661")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774662")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774663")}
            ></View>
            <View
              width="54px"
              height="44px"
              {...getOverrideProps(overrides, "Component 548774664")}
            ></View>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
