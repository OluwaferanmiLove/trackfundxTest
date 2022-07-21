import React from "react";
import { GestureResponderEvent, View } from "react-native";
import { hp, wp } from "../../../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
import { Octicons } from "@expo/vector-icons";
import Text from "../../../components/Text";

interface RepoButtonProps {
  iconName?: keyof typeof Octicons.glyphMap;
  value?: number | any;
  iconContainerBgColor?: string;
  title?: string;
  marginTop?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const RepoContentButton: React.FC<RepoButtonProps> = ({
  iconName,
  value,
  title,
  iconContainerBgColor,
  onPress,
  ...rest
}) => {
  return (
    <>
      <TopContainer onPress={onPress}>
        <IconContainer iconContainerBgColor={iconContainerBgColor}>
          <Octicons name={iconName} color={colors.white} size={wp(16)} />
        </IconContainer>
        <TextContainer>
          <Text
            value={title}
            fontSize={wp(14)}
            fontWeight={"500"}
            color={colors.black}
          />
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text
              value={value?.toString()}
              fontSize={wp(14)}
              fontWeight={"500"}
              marginRight={wp(15)}
              color={colors.black}
            />
            <Octicons name={"chevron-right"} color={"#6A6D7A"} size={wp(15)} />
          </View>
        </TextContainer>
      </TopContainer>
      <BorderLine />
    </>
  );
};

const Container = styled.TouchableOpacity<RepoButtonProps>`
  margin: 0;
`;

const TopContainer = styled.TouchableOpacity<RepoButtonProps>`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${wp(12)}px;
  padding-bottom: ${wp(12)}px;
  margin-left: ${wp(20)}px;
`;

const IconContainer = styled.View<RepoButtonProps>`
  align-items: center;
  justify-content: center;
  height: ${wp(30)}px;
  width: ${wp(30)}px;
  border-radius: ${wp(4)}px;
  background-color: ${(props) => props.iconContainerBgColor};
`;

const TextContainer = styled.View`
  flex: 1;
  margin-left: ${wp(12)}px;
  margin-right: ${wp(20)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const BorderLine = styled.View`
  /* 20 -> general margin + 
  30 -> icon container width + 
  12 -> text margin left size */
  margin-left: ${wp(20 + 30 + 12)}px;
  border-bottom-width: ${wp(0.5)}px;
  border-color: #c2c2c3;
`;

export default RepoContentButton;
