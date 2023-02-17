import React from 'react';
import { Keyboard, ViewProps } from 'react-native';

import {
  Container,
  Touch,
  Card,
  CardBottom,
  ContainerBottom,
  Content,
  TextInfo,
  TextTitle,
  ButtonSingle,
  TextButtons,
  ButtonNo,
  ButtonYes,
  ViewButtons,
  ModalView,
  TextMoreInfo,
} from './styles';

interface IModal extends ViewProps {
  show: boolean;
  twoButtons?: boolean;
  title?: string;
  description?: string;
  textSigleButton?: string;
  actionSigleButton?: any;
  textYesButton?: string;
  actionYesButton?: any;
  textNoButton?: string;
  actionNoButton?: any;
  moreInfo?: any;
  isBottomModal?: boolean;
}

export function ModalCustom({
  show,
  twoButtons,
  title,
  description,
  textSigleButton,
  actionSigleButton,
  textYesButton,
  actionYesButton,
  textNoButton,
  actionNoButton,
  moreInfo,
  isBottomModal,
  children,
}: IModal) {
  return (
    <>
      {isBottomModal ? (
        <ModalView animationType="slide" transparent visible={show}>
          <ContainerBottom>
            <Content>
              <CardBottom>{children}</CardBottom>
            </Content>
          </ContainerBottom>
        </ModalView>
      ) : (
        <ModalView animationType="slide" transparent visible={show}>
          <Container>
            <Touch
              onPress={() => {
                Keyboard.dismiss();
              }}
            >
              <Card>
                <TextTitle>{title}</TextTitle>
                <TextInfo>{description}</TextInfo>

                {moreInfo && <TextMoreInfo>{moreInfo}</TextMoreInfo>}
                {twoButtons ? (
                  <ViewButtons>
                    <ButtonNo onPress={actionNoButton}>
                      <TextButtons textLight>{textNoButton}</TextButtons>
                    </ButtonNo>

                    <ButtonYes onPress={actionYesButton}>
                      <TextButtons>{textYesButton}</TextButtons>
                    </ButtonYes>
                  </ViewButtons>
                ) : (
                  <ButtonSingle onPress={actionSigleButton}>
                    <TextButtons>{textSigleButton}</TextButtons>
                  </ButtonSingle>
                )}
              </Card>
            </Touch>
          </Container>
        </ModalView>
      )}
    </>
  );
}
