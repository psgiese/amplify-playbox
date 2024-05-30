/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Fileuploadbase(props) {
  const { uploadfile, overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="column"
      width="328px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(202,202,202,1)"
      borderRadius="6px"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Fileuploadbase")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="44px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="50px"
          padding="9px 9px 9px 9px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Icon frame")}
        >
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "vuesax/outline/document-upload")}
          ></View>
        </Flex>
        <Flex
          gap="4px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text and supporting text")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Action")}
          >
            <Text
              fontFamily="Hind"
              fontSize="14px"
              fontWeight="500"
              color="rgba(160,32,240,1)"
              lineHeight="22.413999557495117px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Click to Upload"
              onClick={uploadfile}
              {...getOverrideProps(overrides, "Text48981120")}
            ></Text>
            <Text
              fontFamily="Hind"
              fontSize="14px"
              fontWeight="400"
              color="rgba(53,53,53,1)"
              lineHeight="22.413999557495117px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="or drag and drop"
              {...getOverrideProps(overrides, "Text48981121")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Hind"
            fontSize="12px"
            fontWeight="400"
            color="rgba(53,53,53,1)"
            lineHeight="19.211999893188477px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children=" (Max. File size: 25 MB)"
            {...getOverrideProps(overrides, "Supporting text")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
