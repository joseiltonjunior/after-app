import styled from 'styled-components/native';

import { responsiveSize } from '../../utils/responsive';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface ICompImg {
  bigImg?: boolean;
}

interface INoLogo {
  isNoLogo?: boolean;
}

export const Container = styled.View<INoLogo>`
  height: ${(props) => (props.isNoLogo ? '100px' : 'auto')};
`;

export const BackButtom = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  width: ${responsiveSize(30)}px;
  height: ${responsiveSize(30)}px;
  border-radius: ${responsiveSize(20)}px;
  background-color: ${({ theme }) => theme.colors.Orange};
  margin: ${responsiveSize(30)}px 0 0 ${responsiveSize(20)}px;
  align-items: center;
  justify-content: center;
`;

export const IconButtomBack = styled(FeatherIcon).attrs({
  size: responsiveSize(20),
})`
  color: ${({ theme }) => theme.colors.Dark_300};
`;

export const ComponentImg = styled.Image<ICompImg>`
  width: ${(props) => (props.bigImg ? responsiveSize(180) : responsiveSize(100))}px;
  height: ${(props) => (props.bigImg ? responsiveSize(180) : responsiveSize(100))}px;
  align-self: center;
  margin: ${responsiveSize(30)}px 0 ${responsiveSize(30)}px 0;
`;

export const Title = styled.Text<INoLogo>`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(18)}px;
  color: ${({ theme }) => theme.colors.Orange};
  align-self: center;
  margin-top: ${(props) => (props.isNoLogo ? responsiveSize(30) : 0)}px;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: ${responsiveSize(16)}px;
  color: ${({ theme }) => theme.colors.Light};
  margin: ${responsiveSize(10)}px 0 ${responsiveSize(30)}px 0;
  align-self: center;
`;
