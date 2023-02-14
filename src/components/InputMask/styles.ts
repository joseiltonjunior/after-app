import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TextInputMask } from 'react-native-masked-text';
import { responsiveSize } from '../../utils/responsive';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  isNumber: number;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${responsiveSize(55)}px;
  padding: 0 ${responsiveSize(15)}px;
  border-radius: ${responsiveSize(8)}px;
  background-color: ${({ theme }) => theme.colors.Dark_900};
  margin-bottom: ${responsiveSize(10)}px;
  border-width: ${responsiveSize(2)}px;
  border-color: ${({ theme }) => theme.colors.Dark_900};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    props.isNumber < 15 &&
    css`
      border-color: ${({ theme }) => theme.colors.Red};
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${({ theme }) => theme.colors.Orange};
    `}
`;

export const TextInput = styled(TextInputMask).attrs({})`
  flex: 1;
  color: ${({ theme }) => theme.colors.Light};
  font-size: ${responsiveSize(16)}px;
  font-family: 'RobotoSlab-Medium';
  text-align: left;
`;

export const Icon = styled(FeatherIcon).attrs({
  size: responsiveSize(25),
})`
  margin-right: ${responsiveSize(15)}px;
`;

export const TextTitleInput = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: ${responsiveSize(15)}px;
  color: ${({ theme }) => theme.colors.Orange};
  margin: 0 0 5px 5px;
`;
