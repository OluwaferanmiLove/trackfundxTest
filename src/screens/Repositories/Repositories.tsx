import React, { useState } from "react";
import styled from "styled-components/native";
import Base from "../../components/Base";
import Header from "../../components/Header";
import RepoListView from "../../components/RepoListView";
import Text from "../../components/Text";
import { colors } from "../../constants/colors";
import { useGetRepoQuery, useGetStarredQuery } from "../../redux/UserApi";
import { hp, wp } from "../../utils/responsive-dimension";

function Repositories({ navigation, route }: any) {
  const { data,
    isError,
    error,
    isLoading
  } = useGetRepoQuery();

  const {
    data: starredRepo,
    isError: isStarredRepoError,
    error: starredRepoError,
    isLoading: isStarredRepoLoading
  } = useGetStarredQuery();

  const getRepos = () => {
    let repoData: string[] = [];

    if (route?.params?.title === 'Repositories') {
      repoData = data;
    }

    if (route?.params?.title === 'Starred') {
      repoData = starredRepo;
    }

    return repoData;
  }

  return (
    <Base bgColor={colors.mainBg}>
      <Header
        leftText={'Back'}
        onPressLeft={() => navigation.goBack()}
        title={route?.params?.title} />
      {isLoading || isStarredRepoLoading && (
        <Loading size={"large"} color={colors.primary} />
      )}
      {isError || isStarredRepoError && (
        <Error>
          <Text
            value={'Somethin went wrong'}
            marginTop={hp(18)}
            fontSize={wp(14)}
            fontWeight={"400"}
            color={colors.grayText} />
        </Error>
      )}
      {!isLoading && !isError && !isStarredRepoLoading && !isStarredRepoError && (
        <Content>
          <PinnedContainer>
            <PinnedRepo
              data={getRepos()}
              showsHorizontalScrollIndicator={false}
              maxToRenderPerBatch={30}
              renderItem={({ item, index }: any) => (
                <RepoListView
                  title={item.name}
                  value={item.description}
                  stars={item.stargazers_count}
                // marginLeft={index !== 0 ? wp(10) : wp(20)}
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

const Content = styled.View`
  flex: 1;
  padding-right: ${wp(20)}px;
  padding-left: ${wp(20)}px;
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
  flex: 1;
  /* background-color: ${colors.grayBg};
  padding-top: ${hp(40)}px;
  padding-bottom: ${hp(50)}px;
  padding-left: ${wp(20)}px;
  padding-right: ${wp(20)}px; */
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

export default Repositories;
