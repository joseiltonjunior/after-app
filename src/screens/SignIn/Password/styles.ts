import styled from 'styled-components/native';
import { Image, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
import { responsiveSize } from '@utils/responsive';
import theme from '@theme/index';
import { Button } from '@components/Button';

import InputPassword from '@components/InputPassword';

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
  padding: 0 ${responsiveSize(20)}px;
`;

export const ComponentImg = styled(Image).attrs({})``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${theme.colors.Light};
  margin: ${responsiveSize(30)}px 0 ${responsiveSize(20)}px;
`;

export const TextAfter = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${theme.colors.Light};
  margin: ${responsiveSize(30)}px 0 ${responsiveSize(20)}px;
`;

export const EntryButtom = styled(Button)`
  align-self: center;
  margin-top: ${responsiveSize(20)}px;
`;

export const PasswordInput = styled(InputPassword)``;

export const ForgotPassword = styled.TouchableOpacity`
  margin: ${responsiveSize(20)}px 0;
`;

export const ForgotPasswordText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${theme.colors.Light};
  text-align: center;
`;

export const CreateAccount = styled(RectButton).attrs({})`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${theme.colors.Dark_600};
  padding: ${responsiveSize(16)}px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${theme.colors.Light};
  margin-left: ${responsiveSize(15)}px;
`;

export const CreateAccountIcon = styled(Icon).attrs({
  color: theme.colors.Light,
  size: responsiveSize(20),
})``;

export const TextInput = styled.TextInput``;
