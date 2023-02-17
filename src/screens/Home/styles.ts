import styled from 'styled-components/native';

import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { responsiveSize } from '@utils/responsive';
import theme from '@theme/index';
import { Platform, ScrollView } from 'react-native';

interface IColorIndicator {
  isDark?: boolean;
}

interface ITitleColor {
  isOrange?: boolean;
}

interface IImagePic {
  isBottom?: boolean;
}

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  flex: 1,
})``;

export const ScrollViewContainer = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})`
  background-color: ${({ theme }) => theme.colors.Dark_600};
`;

export const Container = styled.View.attrs({})`
  padding: ${responsiveSize(15)}px;
`;

export const HeaderView = styled.View`
  width: 100%;
`;

export const TitleHeader = styled.Text<ITitleColor>`
  color: ${(props) => (props.isOrange ? theme.colors.Orange : theme.colors.Light)};
  font-size: ${responsiveSize(15)}px;
  font-family: 'RobotoSlab-Bold';
`;

export const ViewInput = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${theme.colors.Dark_900};
  border-radius: ${responsiveSize(10)}px;
  height: ${responsiveSize(45)}px;

  margin-top: ${responsiveSize(15)}px;
  padding: 0 ${responsiveSize(15)}px;
`;

export const InputHeader = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.Dark_300,
})`
  flex: 1;

  color: ${theme.colors.Light};
  font-size: ${responsiveSize(15)}px;
  font-family: 'RobotoSlab-Medium';
`;

export const ButtonHeader = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(AwesomeIcon).attrs<ITitleColor>({
  size: responsiveSize(25),
})`
  opacity: 0.5;
`;

export const IconUser = styled(AwesomeIcon).attrs<ITitleColor>({
  size: responsiveSize(30),
})``;

export const ViewName = styled.View`
  flex: 1;
`;

export const ViewPic = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 12,
  },
  shadowOpacity: 0.58,
  shadowRadius: 16.0,

  elevation: 24,
})<IImagePic>`
  background: ${theme.colors.Light};
  border-radius: ${responsiveSize(20)}px;
  width: ${responsiveSize(40)}px;
  height: ${responsiveSize(40)}px;

  align-items: center;
  justify-content: center;
`;

export const ButtonProfile = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const ButtomModalButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: ${responsiveSize(60)}px;

  justify-content: center;
`;

export const Pic = styled.Image<IImagePic>`
  border-radius: ${responsiveSize(20)}px;
  width: ${responsiveSize(40)}px;
  height: ${responsiveSize(40)}px;
`;

export const Content = styled.View`
  margin-top: ${responsiveSize(5)}px;
`;

export const ViewRow = styled.View`
  flex-direction: row;
`;

export const ButtonAfter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50%;
  height: ${responsiveSize(45)}px;

  justify-content: center;
`;

export const BarIndicator = styled.View<IColorIndicator>`
  width: 50%;
  height: 2px;
  background: ${(props) => (props.isDark ? theme.colors.Dark_600 : theme.colors.Orange)};
  margin-bottom: ${responsiveSize(10)}px;
  opacity: 0.5;
`;

export const LineView = styled.View`
  width: 90%;
  height: ${responsiveSize(1)}px;
  background-color: ${theme.colors.Orange};

  opacity: 0.5;
  align-self: center;
`;

export const TitleContent = styled.Text`
  color: ${theme.colors.Light};
  font-size: ${responsiveSize(14)}px;
  font-family: 'RobotoSlab-Bold';
  margin-bottom: ${responsiveSize(5)}px;
  text-align: center;
`;

export const TitleResults = styled.Text`
  color: ${theme.colors.Light};
  font-size: ${responsiveSize(12)}px;
  font-family: 'RobotoSlab-Bold';
  text-align: left;
  opacity: 0.5;
`;
