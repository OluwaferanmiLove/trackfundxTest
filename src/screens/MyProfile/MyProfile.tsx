import React, { useState } from "react";
import Base from "../../components/Base";
import Text from "../../components/Text";
import { colors } from "../../constants/colors";
import { hp, wp } from "../../utils/responsive-dimension";

function MyProfile() {

  return (
    <Base bgColor={colors.mainBg}>
      <Text
        value={'MyProfile'}
        marginTop={hp(13)}
        fontSize={wp(14)}
        fontWeight={"bold"}
        color={colors.black}
      />
    </Base>
  );
}

export default MyProfile;
