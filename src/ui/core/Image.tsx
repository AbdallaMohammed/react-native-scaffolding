import { styled } from 'nativewind';
import * as React from 'react';
import type { ImageProps } from 'react-native';
import { Image as NImage } from 'react-native';

const SImage = styled(NImage);

export type ImgProps = ImageProps & {
  className?: string;
};

export const Image = ({ style, className, alt = '', ...props }: ImgProps) => {
  return <SImage className={className} alt={alt} style={style} {...props} />;
};

export const preloadImages = (sources: string) => {
  NImage.prefetch(sources);
};
