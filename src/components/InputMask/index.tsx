import React, { useEffect, useRef, useState, useCallback, useImperativeHandle } from 'react';

import { TextInputMaskProps } from 'react-native-masked-text';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, TextTitleInput } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputMaskProps {
  name: string;
  icon: string;
  titleInput: string;
}

interface InputValueReference {
  value: string;
}

export function InputMask({
  name,
  icon,
  titleInput,
  value = '',
  type,
  refInput,
  ...rest
}: InputProps): JSX.Element {
  const inputElementRef = useRef<any>(null);
  const { colors } = useTheme();

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(refInput, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',

      setValue(_ref, value) {
        inputValueRef.current.value = value;
      },
      clearValue() {
        inputValueRef.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <TextTitleInput>{titleInput}</TextTitleInput>

      <Container isNumber={value.length} isFocused={isFocused} isErrored={!!error}>
        <Icon
          name={icon}
          color={
            error && value.length < 15 && !isFocused
              ? colors.Red
              : isFocused || isFilled
              ? colors.Orange
              : colors.Dark_300
          }
        />

        <TextInput
          type={type}
          ref={inputElementRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={value}
          {...rest}
        />
      </Container>
    </>
  );
}
