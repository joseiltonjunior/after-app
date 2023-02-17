import React, { useRef, useCallback } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  ScrollViewContainer,
  KeyboardAvoid,
  SignInput,
  PasswordInput,
  EntryButtom,
} from './styles';
import { IState } from '@storage/index';
import IUserState from '@storage/modules/user/types';
import { setUser } from '@storage/modules/user/actions';
import getValidationErros from '@utils/getValidationErros';

import Header from '@components/Header';

interface SignInFormData {
  name: string;

  email: string;
  password: string;
  confirmPassword: string;
}

export function SignUp(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const user = useSelector<IState, IUserState>((state) => state.user);

  const handleSignUp = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('* Nome obrigatório'),
        email: Yup.string().required('* E-mail obrigatorio').email('* Digite um e-mail válido'),
        password: Yup.string().min(6, '* Min 6').max(16, '* Máx 16'),
        confirmPassword: Yup.string()
          .required()
          .oneOf([Yup.ref('password')], 'Passwords must match'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const userData = {
        ...user,
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const jsonValue = JSON.stringify(userData);

      await AsyncStorage.setItem('user', jsonValue);

      dispatch(setUser(userData));

      navigation.navigate('Home' as never);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErros(error);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <>
      <KeyboardAvoid>
        <ScrollViewContainer>
          <Header
            title="Dados cadastrais"
            description="Informe os dados abaixo"
            action={() => {
              navigation.goBack();
            }}
          />
          <Container>
            <Form ref={formRef} onSubmit={handleSignUp}>
              <SignInput
                titleInput="Nome"
                name="name"
                icon="user"
                placeholder="Digite seu nome"
                autoCapitalize="words"
                autoCorrect={true}
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />

              <SignInput
                ref={emailInputRef}
                titleInput="E-mail"
                name="email"
                icon="mail"
                placeholder="Digite seu e-mail"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />

              <PasswordInput
                ref={passwordInputRef}
                titleInput="Senha"
                name="password"
                icon="lock"
                placeholder="Digite sua senha"
                maxLength={16}
                textContentType="newPassword"
                returnKeyType="next"
                onSubmitEditing={() => {
                  confirmPasswordInputRef.current?.focus();
                }}
              />

              <PasswordInput
                ref={confirmPasswordInputRef}
                titleInput="Confirmar senha"
                name="confirmPassword"
                icon="lock"
                placeholder="Confirme sua senha"
                maxLength={16}
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <EntryButtom
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </EntryButtom>
            </Form>
          </Container>
        </ScrollViewContainer>
      </KeyboardAvoid>
    </>
  );
}
