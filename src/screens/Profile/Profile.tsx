import React, { useState } from "react";
import styled from "styled-components/native";
import Base from "../../components/Base";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ImageView from "../../components/ImageView";
import RepositoryCard from "../../components/RepositoryCard";
import Text from "../../components/Text";
import { colors } from "../../constants/colors";
import { useGetUserQuery } from "../../redux/UserApi";
import { hp, wp } from "../../utils/responsive-dimension";
import ProfileInfo from "./components/ProfileInfo";
import RepoContentButton from "./components/RepoContentButton";

function Profile() {
  const { data, isError, error, isLoading } = useGetUserQuery();

  console.log(data);

  return (
    <Base bgColor={colors.mainBg}>
      <Header />
      {isLoading && <Loading size={"large"} color={colors.primary} />}
      {!isLoading && (
        <Content>
          <TopContent>
            <UserInfoContainer>
              <ImageView
                source={{ uri: data?.avatar_url }}
                width={wp(60)}
                height={wp(60)}
              />
              <NameContainer>
                <Text value={data?.name} fontSize={wp(18)} />
                <Text
                  value={data?.login}
                  fontSize={wp(14)}
                  fontWeight={"400"}
                />
              </NameContainer>
            </UserInfoContainer>
            <Text
              value={data?.bio}
              marginTop={hp(18)}
              fontSize={wp(14)}
              fontWeight={"400"}
              color={colors.grayText}
            />
            <ProfileInfoContainerRowed>
              <ProfileInfo
                iconName={"organization"}
                title={data?.company}
                fontWeight={"400"}
                marginTop={hp(20)}
              />
              <ProfileInfo
                iconName={"location"}
                title={data?.location}
                fontWeight={"400"}
                marginTop={hp(20)}
                marginLeft={wp(25)}
              />
            </ProfileInfoContainerRowed>
            <ProfileInfo
              iconName={"link"}
              title={data?.blog}
              marginTop={hp(13)}
            />
            {/* <ProfileInfo
              iconName={"mail"}
              title={data?.email}
              marginTop={hp(13)}
            /> */}
            <ProfileInfo
              iconName={"mark-github"}
              title={data?.twitter_username}
              marginTop={hp(13)}
            />
            <ProfileInfoContainerRowed>
              <ProfileInfo
                iconName={"person"}
                title={data?.followers + " "}
                marginTop={hp(13)}
              />
              <Text
                value={"followers . "}
                marginTop={hp(11)}
                fontSize={wp(14)}
                fontWeight={"400"}
                color={colors.grayText}
              />
              <Text
                value={data?.following + " "}
                marginTop={hp(13)}
                fontSize={wp(14)}
                fontWeight={"bold"}
                color={colors.black}
              />
              <Text
                value={"following"}
                marginTop={hp(11)}
                fontSize={wp(14)}
                fontWeight={"400"}
                color={colors.grayText}
              />
            </ProfileInfoContainerRowed>
            <Button title={"+  Follow"} marginTop={hp(18)} />
          </TopContent>
          <RepoContents>
            <RepoContentButton
              iconContainerBgColor="#41434D"
              value={data?.public_repos}
              title={"Repositories"}
              iconName={"repo"}
            />
            <RepoContentButton
              iconContainerBgColor="#F1C746"
              value={344}
              title={"Starred"}
              iconName={"star"}
            />
            <RepoContentButton
              iconContainerBgColor="#EB8B46"
              value={3}
              title={"Organizations"}
              iconName={"organization"}
            />
            <RepoContentButton
              iconContainerBgColor="#D856A7"
              value={11}
              title={"Sponsoring"}
              iconName={"heart"}
            />
          </RepoContents>
          <PinnedContainer>
            <ProfileInfo
              iconName={"pin"}
              title={"Pinned"}
              fontWeight={"400"}
              textMarginLeft={wp(18)}
            />
            <PinnedRepo
              horizontal
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <RepositoryCard marginTop={hp(12)} />
            <ProfileInfo
              iconName={"info"}
              title={"sdras/README.md"}
              fontWeight={"400"}
              textMarginLeft={wp(18)}
              marginTop={hp(50)}
            />
          </PinnedContainer>
        </Content>
      )}
    </Base>
  );
}

const Content = styled.ScrollView`
  flex: 1;
`;

const TopContent = styled.View`
  padding-bottom: ${wp(20)}px;
  border-bottom-width: ${wp(0.5)}px;
  border-bottom-color: #c2c2c3;
  padding-left: ${wp(20)}px;
  padding-right: ${wp(20)}px;
`;

const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${hp(16)}px;
`;

const NameContainer = styled.View`
  margin-left: ${wp(16)}px;
`;

const ProfileInfoContainerRowed = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

const RepoContents = styled.View`
  border-bottom-width: ${wp(0.5)}px;
  border-top-width: ${wp(0.5)}px;
  border-color: #c2c2c3;
  background-color: ${colors.white};
`;

const PinnedContainer = styled.View`
  background-color: ${colors.grayBg};
  padding-top: ${hp(40)}px;
  padding-bottom: ${hp(50)}px;
  padding-left: ${wp(20)}px;
  padding-right: ${wp(20)}px;
`;

const PinnedRepo = styled.FlatList`
  flex: 1;
`;

const Loading = styled.ActivityIndicator`
  flex: 1;
`;

export default Profile;
