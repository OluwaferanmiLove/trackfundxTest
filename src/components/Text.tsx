import React from "react";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../constants/colors";
import { TextProps } from "react-native";
// import {wp} from '../constant/responsive-dimension';

interface CustomTextProps extends TextProps {
  value?: string;
  fontSize?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  fontWeight?: string;
  color?: string;
}

// interface StyledTextProps {
//   fontSize?: number;
//   fontWeight?: string;
//   color?: string;
//   marginTop?: number;
// }

const Text: React.FC<CustomTextProps> = ({
  value,
  fontSize = wp(16),
  fontWeight = "bold",
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  color = colors.black,
  ...rest
}) => {
  return (
    <CustomText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...rest}
    >
      {value}
    </CustomText>
  );
};

const CustomText = styled.Text<CustomTextProps>`
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
  color: ${(props) => props.color};
`;

export default Text;
