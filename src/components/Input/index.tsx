import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon, TextError, TextTitleInput } from './styles';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  titleInput: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, titleInput, ...rest },
  ref
): JSX.Element => {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

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

        <TextInput
          {...rest}
          ref={inputElementRef}
          keyboardAppearance="dark"
          defaultValue={defaultValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
        />
      </Container>
    </>
  );
};

export default forwardRef(Input);
