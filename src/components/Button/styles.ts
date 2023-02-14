import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { responsiveSize } from '../../utils/responsive';

export const Container = styled(RectButton)`
  width: 100%;
  height: ${responsiveSize(55)}px;
  background-color: ${({ theme }) => theme.colors.Orange};
  border-radius: ${responsiveSize(8)}px;
  justify-content: center;
  align-self: center;
`;

export const TextButtom = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: ${({ theme }) => theme.colors.Dark_600};
  font-size: ${responsiveSize(16)}px;
  text-align: center;
`;
