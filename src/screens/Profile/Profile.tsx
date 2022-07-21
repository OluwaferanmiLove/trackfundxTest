import React, { useState } from "react";
import styled from "styled-components/native";
import Base from "../../components/Base";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ImageView from "../../components/ImageView";
import RepositoryCard from "../../components/RepositoryCard";
import Text from "../../components/Text";
import { colors } from "../../constants/colors";
import { useGetOrganizationQuery, useGetStarredQuery, useGetUserQuery } from "../../redux/UserApi";
import { hp, wp } from "../../utils/responsive-dimension";
import ProfileInfo from "./components/ProfileInfo";
import RepoContentButton from "./components/RepoContentButton";

function Profile({navigation}: any) {
  const { data, isError, error, isLoading } = useGetUserQuery();
  const { data: starredRepo, isLoading: starredRepoLoading } = useGetStarredQuery();
  const { data: orgs, isLoading: orgsLoading } = useGetOrganizationQuery();

  return (
    <Base bgColor={colors.mainBg}>
      <Header leftText={'Home'} />
      {isLoading && starredRepoLoading && <Loading size={"large"} color={colors.primary} />}
      {isError && !starredRepoLoading && (
        <Error>
          <Text
            value={'error' in error ? error.error : 'Somethin went wrong'}
            marginTop={hp(18)}
            fontSize={wp(14)}
            fontWeight={"400"}
            color={colors.grayText} />
        </Error>
      )}
      {!isLoading && !starredRepoLoading && !isError && (
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
              onPress={() => navigation.navigate('Repositories')}
            />
            <RepoContentButton
              iconContainerBgColor="#F1C746"
              value={starredRepo?.length}
              title={"Starred"}
              iconName={"star"}
            />
            <RepoContentButton
              iconContainerBgColor="#EB8B46"
              value={orgs?.length}
              title={"Organizations"}
              iconName={"organization"}
            />
            <RepoContentButton
              iconContainerBgColor="#D856A7"
              value={'-'}
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
              data={starredRepo}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }: any) => (
                <RepositoryCard
                  title={item.name}
                  value={item.description}
                  stars={item.stargazers_count}
                  marginLeft={index !== 0 ? wp(10) : wp(20)}
                />
              )}
              keyExtractor={(item: any) => item.id.toString()}
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
  margin-top: ${hp(10)};
  margin-left: -${wp(20)}px;
  margin-right: -${wp(20)}px;
`;

const Loading = styled.ActivityIndicator`
  flex: 1;
`;

const Error = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Profile;
