import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
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
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '@storage/index';
import IUserState from '@storage/modules/user/types';
import { useNavigation } from '@react-navigation/native';
import { setUser } from '@storage/modules/user/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ModalCustom } from '@components/ModalCustom';
import getValidationErros from '@utils/getValidationErros';

interface SignInFormData {
  phone: string;
}

export function SignIn(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [withUser, setWithUser] = useState(false);
  const [phone, setPhone] = useState('');

  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const user = useSelector<IState, IUserState>((state) => state.user);

  const handleUserData = useCallback(async () => {
    setWithUser(true);
    try {
      const user = await AsyncStorage.getItem('user');

      // if (user) {
      //   const convertUser: IUserState = JSON.parse(user);

      //   dispatch(setUser(convertUser));
      //   navigation.navigate('Home' as never);
      // }

      setWithUser(false);
    } catch (e) {
      setWithUser(false);
    }
  }, []);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      setLoading(true);

      try {
        formRef.current?.setErrors({});

        const phoneRegExp = /^\(\d{2}\) \d{5}-\d{4}$/;

        const schema = Yup.object().shape({
          phone: Yup.string().matches(phoneRegExp, 'Número de telefone inválido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const clearedPhone = data.phone
          .replace(/\s/g, '')
          .replace('(', '')
          .replace(')', '')
          .replace('-', '');

        if (user.phone_number == clearedPhone) {
          navigation.navigate('Password' as never);
        } else {
          const newUser = {
            id: 2,
            phone_number: clearedPhone,
          };
          console.tron.log(newUser);
          dispatch(setUser(newUser));
          navigation.navigate('SignUp' as never);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);

        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErros(error);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [dispatch, user]
  );

  useEffect(() => {
    handleUserData();
  }, []);

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

              <Form ref={formRef} onSubmit={handleSignIn}>
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
            </ScrollViewContainer>
          </KeyboardAvoid>
        </>
      )}
    </>
  );
}
