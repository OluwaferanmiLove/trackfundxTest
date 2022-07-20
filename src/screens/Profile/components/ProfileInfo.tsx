import React from "react";
import { GestureResponderEvent } from "react-native";
import { hp, wp } from "../../../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../../../constants/colors";
import { Octicons } from "@expo/vector-icons";
import Text from "../../../components/Text";

interface ProfileInfoProps {
  iconName?: keyof typeof Octicons.glyphMap;
  title?: string;
  marginTop?: number;
  marginLeft?: number;
  textMarginLeft?: number;
  fontWeight?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  iconName,
  title,
  marginTop = 0,
  marginLeft = 0,
  textMarginLeft = wp(8),
  fontWeight = "bold",
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} marginTop={marginTop} marginLeft={marginLeft}>
      <Octicons name={iconName} size={wp(15)} color={"#9194A0"} />
      <Text
        value={title}
        fontWeight={fontWeight}
        fontSize={wp(13)}
        marginLeft={textMarginLeft}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity<ProfileInfoProps>`
  flex-direction: row;
  align-items: center;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export default ProfileInfo;
