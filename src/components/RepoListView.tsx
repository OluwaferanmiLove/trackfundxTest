import React from "react";
import { GestureResponderEvent } from "react-native";
import { hp, wp } from "../utils/responsive-dimension";
import styled from "styled-components/native";
import { colors } from "../constants/colors";
import ImageView from "./ImageView";
import Text from "./Text";
import ProfileInfo from "../screens/Profile/components/ProfileInfo";

interface RepoListViewProps {
  value?: string;
  title?: string;
  showImage?: boolean;
  stars?: string;
  marginTop?: number;
  marginLeft?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const RepoListView: React.FC<RepoListViewProps> = ({
  value,
  title,
  showImage,
  stars = '0',
  marginTop = 0,
  marginLeft = 0,
  onPress,
  ...rest
}) => {
  return (
    <Container onPress={onPress} marginTop={marginTop} marginLeft={marginLeft}>
      <RepoInfo>
        <Text
          value={title}
          fontSize={wp(14)}
          fontWeight={"700"}
          marginTop={showImage ? wp(12) : 0}
          color={colors.black}
        />
        {value && (
        <OtherInfo>
          <Text
            value={value}
            fontSize={wp(14)}
            fontWeight={"400"}
            // marginTop={wp(12)}
            color={'#050505'}
            numberOfLines={3}
          />
        </OtherInfo>)}
        <ProfileInfo
          iconName={"star"}
          title={stars}
          fontWeight={"400"}
          marginTop={hp(14)}
        />
      </RepoInfo>
      <BorderLine />
    </Container>
  );
};

const Container = styled.TouchableOpacity<RepoListViewProps>`
  /* width: ${hp(313)}px; */
  /* padding-top: ${hp(15)}px;
  padding-bottom: ${hp(18)}px; */
  padding-left: ${hp(20)}px;
  /* padding-right: ${hp(20)}px; */
  /* background-color: ${colors.white}; */
  border-radius: ${wp(4)}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

const RepoInfo = styled.View`
  margin-right: ${wp(20)}px;
  margin-bottom: ${hp(18)}px;
`;

const OtherInfo = styled.View`
  margin-top: ${hp(6)}px;
`;

const BorderLine = styled.View`
height: 0px;
  padding-right: ${wp(20)}px;
  border-bottom-width: ${wp(0.5)}px;
  border-color: #c2c2c3;
  margin-bottom: ${hp(20)}px;
`;

export default RepoListView;
