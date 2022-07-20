import React from "react";
import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";
import { wp } from "../utils/responsive-dimension";

interface ImageViewProps {
  source?: ImageSourcePropType | any;
  width?: number;
  height?: number;
  borderRadius?: number;
}

interface StyledImage {
  width?: number;
  height?: number;
  borderRadius?: number;
}

function ImageView({
  source,
  width = wp(55),
  borderRadius = 99999,
  height = wp(55),
}: ImageViewProps) {
  return (
    <ImageContainer width={width} height={height} borderRadius={borderRadius}>
      <Image source={source} width={width} height={height} />
    </ImageContainer>
  );
}

const ImageContainer = styled.View<StyledImage>`
  overflow: hidden;
  background-color: #eee;
  border-radius: ${(props) => props.borderRadius}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Image = styled.Image<StyledImage>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default ImageView;
