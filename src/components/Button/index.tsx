import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import { Container, TextButtom } from './styles';
import { useTheme } from 'styled-components';

interface ButtomProps extends RectButtonProperties {
  loading?: boolean;
}

export function Button({ children, loading, ...rest }: ButtomProps): JSX.Element {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.Dark_900} />
      ) : (
        <TextButtom>{children}</TextButtom>
      )}
    </Container>
  );
}
