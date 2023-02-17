import styled from 'styled-components/native';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native';
import { responsiveSize } from '@utils/responsive';
import theme from '@theme/index';

export const TouchCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.95,
})`
  align-items: center;
  justify-content: center;
`;

export const CardView = styled.View.attrs({})`
  width: 100%;
  /* height: ${responsiveSize(100)}px; */
  background-color: ${theme.colors.Light};
  border-radius: 10px;
  margin: 10px 0;
`;

export const CardHeader = styled.View``;

export const ImageCard = styled.Image`
  width: 100%;
  height: ${responsiveSize(150)}px;
  background-color: ${theme.colors.Dark_900};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CardContent = styled.View`
  width: 100%;
  height: auto;
  background-color: ${theme.colors.Dark_900};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 10px;
`;

export const TextCardContent = styled.Text`
  color: ${theme.colors.Light};
  font-size: ${responsiveSize(15)}px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(AwesomeIcon).attrs({
  size: responsiveSize(15),
})`
  color: ${theme.colors.Orange};
  padding: ${responsiveSize(5)}px ${responsiveSize(2)}px 0 0;
`;

export const ViewStars = styled.View``;

export const StarsList = styled(FlatList)``;
