import React, { useRef, useState } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import { InputMask } from '@components/InputMask';

import {
  Container,
  ViewLoading,
  LoadingIndicator,
  TextViewLoading,
  ScrollViewContainer,
  KeyboardAvoid,
  Next,
} from './styles';

export function SignIn(): JSX.Element {
  const [loading] = useState(false);
  const [withUser] = useState(false);
  const [phone, setPhone] = useState('');

  const formRef = useRef<FormHandles>(null);

  return (
    <>
      {withUser ? (
        <ViewLoading>
          <LoadingIndicator />
          <TextViewLoading>Buscando os melhores Afters da cidade...</TextViewLoading>
        </ViewLoading>
      ) : (
        <>
          <KeyboardAvoid>
            <ScrollViewContainer>
              <Header bigImg />
              <Container>
                <Form ref={formRef} onSubmit={(data) => console.log(data)}>
                  <InputMask
                    type={'cel-phone'}
                    options={{
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }}
                    value={phone}
                    titleInput="Informe o seu número de telefone"
                    name="phone"
                    icon="phone"
                    placeholder="(99) 9999-9999"
                    keyboardType="phone-pad"
                    returnKeyType="send"
                    onChangeText={(value: React.SetStateAction<string>) => {
                      setPhone(value);
                      formRef.current?.setFieldValue('phone', value);
                    }}
                    onSubmitEditing={() => {
                      formRef.current?.submitForm();
                    }}
                  />

                  <Next
                    loading={loading}
                    onPress={() => {
                      formRef.current?.submitForm();
                    }}
                  >
                    Avançar
                  </Next>
                </Form>
              </Container>
            </ScrollViewContainer>
          </KeyboardAvoid>
        </>
      )}
    </>
  );
}
