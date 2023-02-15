import React, { useState, useEffect, useRef, useCallback } from 'react';

import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, Input, Icon, ButtomEye, IconEye, TextTitleInput } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  titleInput: string;
}

interface InputValueReference {
  value: string;
}

export function InputPassword({ name, icon, titleInput }: InputProps) {
  const [isOpenPassword, setOpenPassword] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const { colors } = useTheme();

  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(_ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextTitleInput>{titleInput}</TextTitleInput>
      <Container isFocused={isFocused} isErrored={!!error}>
        <Icon name={icon} color={isFocused || isFilled ? colors.Orange : colors.Dark_300} />

        <Input
          ref={inputElementRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          secureTextEntry={isOpenPassword ? true : false}
        />

        <ButtomEye
          onPress={() => (isOpenPassword ? setOpenPassword(false) : setOpenPassword(true))}
        >
          {isOpenPassword ? <IconEye name="eye" /> : <IconEye name="eye-off" />}
        </ButtomEye>
      </Container>
    </>
  );
}
