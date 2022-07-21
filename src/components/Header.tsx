import React from "react";
import { colors } from "../constants/colors";
import { Octicons } from "@expo/vector-icons";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { GestureResponderEvent } from "react-native";

const statusBarHeight = Constants.statusBarHeight;

interface HeaderProps {
  title?: string;
  onPressLeft?: (event: GestureResponderEvent) => void;
  leftText?: string;
}

function Header({ title, onPressLeft, leftText }: HeaderProps) {
  return (
    <HeaderContainer>
      <LeftComponent onPress={onPressLeft}>
        <Octicons name={"chevron-left"} size={hp(24)} color={colors.primary} />
        <LeftText>{leftText}</LeftText>
      </LeftComponent>
      <MiddleComponent>
        <MiddleText>{title}</MiddleText>
      </MiddleComponent>
      <RightComponent>
        <Octicons
          name={"kebab-horizontal"}
          size={hp(24)}
          color={colors.primary}
        />
      </RightComponent>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${wp(13)}px;
  padding-right: ${wp(13)}px;
  height: ${hp(86 - statusBarHeight)}px;
  border-bottom-width: ${wp(1)}px;
  border-bottom-color: #c2c2c3;
  width: ${wp(390)}px;
`;

const LeftComponent = styled.TouchableOpacity`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
`;

const LeftText = styled.Text`
  font-size: ${wp(14)}px;
  margin-left: ${wp(6)}px;
  color: ${colors.primary};
`;

const MiddleComponent = styled.View`
  flex: 0.7;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MiddleText = styled.Text`
  font-size: ${wp(16)}px;
  margin-left: ${wp(6)}px;
  font-weight: bold;
  color: ${colors.black};
`;

const RightComponent = styled.TouchableOpacity`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default React.memo(Header);
