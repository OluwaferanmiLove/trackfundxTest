import React from "react";
import { GestureResponderEvent } from "react-native";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../constants/colors";
import ImageView from "./ImageView";
import Text from "./Text";
import ProfileInfo from "../screens/Profile/components/ProfileInfo";

interface RepositoryCardProps {
  value?: string;
  title?: string;
  marginTop?: number;
  marginLeft?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({
  value,
  title,
  marginTop = 0,
  marginLeft = 0,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} marginTop={marginTop} marginLeft={marginLeft}>
      <UserInfo>
        <ImageView
          source={{ uri: "https://picsum.photos/500" }}
          width={wp(24)}
          height={wp(24)}
        />
        <Text
          value={"sdras"}
          fontSize={wp(12)}
          fontWeight={"400"}
          marginLeft={wp(6)}
          color={colors.grayText}
        />
      </UserInfo>
      <Text
        value={"awesome-actions"}
        fontSize={wp(14)}
        fontWeight={"700"}
        marginTop={wp(12)}
        color={colors.grayText}
      />
      <OtherInfo>
        <Text
          value={
            "Accurate dlist of awesomeactions to use on github platform, Accurate dlist of awesomeactions to use, Accurate dlist of awesomeactions to use"
          }
          fontSize={wp(14)}
          fontWeight={"400"}
          // marginTop={wp(12)}
          color={colors.grayText}
          numberOfLines={3}
        />
      </OtherInfo>
      <ProfileInfo
        iconName={"star"}
        title={"19,154"}
        fontWeight={"400"}
        marginTop={hp(20)}
      />
    </Container>
  );
};

const Container = styled.TouchableOpacity<RepositoryCardProps>`
  width: ${hp(313)}px;
  padding-top: ${hp(15)}px;
  padding-left: ${hp(15)}px;
  padding-right: ${hp(15)}px;
  padding-bottom: ${hp(18)}px;
  background-color: ${colors.white};
  border-radius: ${wp(4)}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

const OtherInfo = styled.View`
  height: ${hp(50)}px;
  margin-top: ${hp(6)}px;
`;

export default RepositoryCard;
