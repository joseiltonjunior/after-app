import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import {
  Container,
  ScrollViewContainer,
  KeyboardAvoid,
  PasswordInput,
  EntryButtom,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';
import { IState } from '@storage/index';
import IUserState from '@storage/modules/user/types';
import getValidationErros from '@utils/getValidationErros';
import { ModalCustom } from '@components/ModalCustom';
import Header from '@components/Header';

interface SignInFormData {
  email: string;
  password: string;
}

export function Password(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const [loading, setLoading] = useState(false);
  const [modalErrorPassword, setModalErrorPassword] = useState(false);
  const [modalError, setModalError] = useState(false);

  const navigation = useNavigation();
  const user = useSelector<IState, IUserState>((state) => state.user);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    setLoading(true);
    console.log(data);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().min(6, '* Min 6'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (data.password === user.password) {
        // navigation.navigate('Home');
        console.log('home');
      } else {
        setModalErrorPassword(true);
      }
      setLoading(false);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        setLoading(false);
        const errors = getValidationErros(error);
        setModalError(true);
        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <>
      <ModalCustom
        show={modalErrorPassword}
        title="Atenção"
        description="Senha incorreta, verifique a senha e tente novamente."
        textSigleButton="Entendi"
        actionSigleButton={() => setModalErrorPassword(false)}
      />

      <ModalCustom
        show={modalError}
        title="Atenção"
        description="Informe sua senha com no mínimo 6 digitos."
        textSigleButton="Entendi"
        actionSigleButton={() => setModalError(false)}
      />

      <KeyboardAvoid>
        <ScrollViewContainer>
          <Header
            title="Bem-vindo de volta"
            description="Informe a sua senha de acesso"
            action={() => {
              navigation.goBack();
            }}
          />
          <Container>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <PasswordInput
                titleInput="Senha"
                name="password"
                icon="lock"
                placeholder="Informe sua senha "
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={16}
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <EntryButtom
                loading={loading}
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </EntryButtom>
            </Form>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueçeu a senha?</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollViewContainer>
      </KeyboardAvoid>
    </>
  );
}
