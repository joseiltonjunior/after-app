import styled from 'styled-components/native';
import { Platform, ScrollView } from 'react-native';

import { responsiveSize } from '@utils/responsive';

import { Button } from '@components/Button';
import InputPassword from '@components/InputPassword';
import Input from '@components/Input';

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
  flex: 1;
  padding: 0 ${responsiveSize(20)}px;
`;

export const EntryButtom = styled(Button)`
  margin: ${responsiveSize(30)}px 0;
`;

export const SignInput = styled(Input)``;

export const PasswordInput = styled(InputPassword)``;
