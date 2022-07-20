import React from "react";
import { colors } from "../constants/colors";
import { Octicons } from "@expo/vector-icons";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  return (
    <HeaderContainer>
      <LeftComponent>
        <Octicons name={"chevron-left"} size={hp(24)} color={colors.primary} />
        <LeftText>Home</LeftText>
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
  flex: 0.2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const MiddleText = styled.Text`
  font-size: ${wp(14)}px;
  margin-left: ${wp(6)}px;
  color: ${colors.primary};
`;

const RightComponent = styled.TouchableOpacity`
  flex: 0.15;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default React.memo(Header);
