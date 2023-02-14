import React from 'react';
import logoImg from '../../assets/logoAfter.png';

import {
  Container,
  BackButtom,
  IconButtomBack,
  ComponentImg,
  Title,
  Description,
} from './styles';

interface IHeader {
  title?: string;
  description?: string;
  action?: any;
  bigImg?: boolean;
  noLogo?: boolean;
}

function Header({
  title,
  description,
  action,
  bigImg,
  noLogo,
}: IHeader): JSX.Element {
  return (
    <Container isNoLogo={noLogo}>
      {action && (
        <BackButtom
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          onPress={action}>
          <IconButtomBack name="chevron-left" />
        </BackButtom>
      )}

      {!noLogo && <ComponentImg source={logoImg} bigImg={bigImg} />}

      {title && <Title isNoLogo>{title}</Title>}

      {description && <Description>{description}</Description>}
    </Container>
  );
}

export default Header;
