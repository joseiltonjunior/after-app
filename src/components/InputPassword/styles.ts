import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { responsiveSize } from '@utils/responsive';
import theme from '@theme/index';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${responsiveSize(55)}px;
  padding: 0 ${responsiveSize(15)}px;
  border-radius: ${responsiveSize(10)}px;
  background-color: ${theme.colors.Dark_900};
  margin-bottom: ${responsiveSize(10)}px;
  border-width: ${responsiveSize(2)}px;
  border-color: ${theme.colors.Dark_900};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${theme.colors.Red};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${theme.colors.Orange};
    `}
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.Dark_300,
})`
  flex: 1;
  color: ${theme.colors.Light};
  font-size: ${responsiveSize(16)}px;
  font-family: 'RobotoSlab-Medium';
`;

export const Icon = styled(FeatherIcon).attrs({
  size: responsiveSize(22),
})`
  margin-right: ${responsiveSize(15)}px;
`;

export const ButtomEye = styled.TouchableOpacity``;

export const IconEye = styled(FeatherIcon).attrs({
  color: theme.colors.Dark_300,
  size: responsiveSize(22),
})``;

export const TextTitleInput = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${theme.colors.Orange};
  margin: 0 0 5px 5px;
`;
