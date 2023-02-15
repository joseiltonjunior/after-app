import styled from 'styled-components/native';
import { Platform, ScrollView } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { responsiveSize } from '../../utils/responsive';
import { Button } from '@components/Button';

export const KeyboardAvoid = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : undefined,
  flex: 1,
})``;

export const ScrollViewContainer = styled(ScrollView).attrs({
  keyboardShouldPersistTaps: 'handled',
})`
  background-color: ${({ theme }) => theme.colors.Dark_600};
  padding: ${responsiveSize(20)}px;
`;

export const Container = styled.View``;

export const ViewLoading = styled.View`
  justify-content: center;
  align-self: center;
  flex: 1;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: responsiveSize(50),
  color: theme.colors.Orange,
}))``;

export const TextViewLoading = styled.Text`
  color: ${({ theme }) => theme.colors.Light};
  font-size: ${responsiveSize(16)}px;
  font-family: 'RobotoSlab-Medium';
  margin-top: ${responsiveSize(50)}px;
  text-align: center;

  max-width: 80%;
`;

export const Next = styled(Button)`
  margin-top: ${responsiveSize(20)}px;
`;
