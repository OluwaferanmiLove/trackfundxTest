import React, { useState } from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { colors } from "../constants/colors";

interface BaseProps {
  children?: any;
  bgColor?: string;
}

interface BaseViewProps {
  bgColor?: string;
}

function Base({ children, bgColor = colors.white }: BaseProps) {
  return (
    <BaseView bgColor={bgColor}>
      <StatusBar
        translucent={false}
        barStyle={"dark-content"}
        backgroundColor={bgColor}
      />
      {children}
    </BaseView>
  );
}

const BaseView = styled.SafeAreaView<BaseViewProps>`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Base;
