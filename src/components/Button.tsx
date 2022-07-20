import React from "react";
import { GestureResponderEvent } from "react-native";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../constants/colors";

interface ButtonProps {
  value?: string;
  title?: string;
  marginTop?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
  value,
  title,
  marginTop = 0,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} marginTop={marginTop}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

const Container = styled.TouchableOpacity<ButtonProps>`
  height: ${hp(40)}px;
  /* margin-left: ${wp(20)}px;
  margin-right: ${wp(20)}px; */
  background-color: ${colors.white};
  border-radius: ${wp(4)}px;
  margin-top: ${(props) => props.marginTop}px;
  border-width: ${wp(0.5)}px;
  border-color: #c2c2c3;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  font-size: 13px;
`;

export default Button;
