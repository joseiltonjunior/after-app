import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { Card } from './Card';

import {
  Container,
  HeaderView,
  TitleHeader,
  ViewInput,
  ButtonHeader,
  InputHeader,
  Icon,
  IconUser,
  ViewName,
  ViewPic,
  ButtonProfile,
  ButtomModalButtom,
  Pic,
  Content,
  LineView,
  TitleContent,
  TitleResults,
  ViewRow,
  ButtonAfter,
  BarIndicator,
  ScrollViewContainer,
  KeyboardAvoid,
} from './styles';
import { IState } from '@storage/index';
import IUserState from '@storage/modules/user/types';
import Afters from './afters.json';
import { ModalCustom } from '@components/ModalCustom';
import { useTheme } from 'styled-components';

interface IListAfter {
  name: string;
  pic: string;
  stars: number;
}

export function Home(): JSX.Element {
  const [day, setDay] = useState('');
  const [afterIndicator, setAfterIndicator] = useState(false);
  const [listResultAfter, setListResultAfter] = useState<IListAfter[]>(Afters);
  const [modal, setModal] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const { colors } = useTheme();

  const navigation = useNavigation();

  const user = useSelector<IState, IUserState>((state) => state.user);

  const handleTurn = () => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 12) {
      setDay('Bom dia, ');
    } else if (hours >= 12 && hours < 18) {
      setDay('Boa tarde, ');
    } else {
      setDay('Boa noite, ');
    }
  };

  function findAfter(text: string) {
    if (text.length >= 1) {
      const result = Afters.filter((after) =>
        after.name.toUpperCase().includes(text.toUpperCase())
      );
      if (result.length >= 1) {
        setListResultAfter(result);
        setAfterIndicator(false);
      }
    } else {
      setListResultAfter(Afters);
    }
  }

  function findAfterIndicator() {
    const result = Afters.filter((after) => after.indicator >= 10);
    if (result.length >= 1) {
      setListResultAfter(result);
    } else {
      setListResultAfter(Afters);
    }
  }

  useEffect(() => {
    handleTurn();
  }, []);

  return (
    <>
      <ModalCustom isBottomModal show={modal}>
        <ButtomModalButtom
          onPress={() => {
            setModal(false);
            Keyboard.dismiss();
            navigation.navigate('Profile' as never);
          }}
        >
          <TitleContent>Visualizar perfil</TitleContent>
        </ButtomModalButtom>
        <LineView />

        <ButtomModalButtom
          onPress={() => {
            setModal(false);
            Keyboard.dismiss();
            navigation.navigate('FavoriteScreen' as never);
          }}
        >
          <TitleContent>Lista de favoritos</TitleContent>
        </ButtomModalButtom>
        <LineView />

        <ButtomModalButtom
          onPress={() => {
            setModal(false);
            Keyboard.dismiss();
          }}
        >
          <TitleContent>Voltar</TitleContent>
        </ButtomModalButtom>
      </ModalCustom>

      <KeyboardAvoid>
        <ScrollViewContainer>
          <Container>
            <HeaderView>
              <ViewRow>
                <ViewName>
                  <TitleHeader isOrange>
                    {day}
                    <TitleHeader>{user.name}</TitleHeader>
                  </TitleHeader>
                  <TitleResults>{user.email}</TitleResults>
                </ViewName>

                <ButtonProfile
                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                  onPress={() => {
                    setModal(true);
                  }}
                >
                  <ViewPic>
                    {user.pic ? (
                      <Pic
                        source={{
                          uri: user.pic,
                        }}
                      />
                    ) : (
                      <IconUser name="user" color={colors.Dark_300} />
                    )}
                  </ViewPic>
                </ButtonProfile>
              </ViewRow>

              <ViewInput>
                <InputHeader
                  value={valueSearch}
                  placeholder="Onde vai ser o After?"
                  onChangeText={(t) => {
                    findAfter(t);
                    setValueSearch(t);
                  }}
                />

                {valueSearch.length > 0 && (
                  <>
                    <ButtonHeader
                      hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                      onPress={() => {
                        setListResultAfter(Afters);
                        setValueSearch('');
                        Keyboard.dismiss();
                      }}
                    >
                      <Icon name="times-circle" color={colors.Dark_300} />
                    </ButtonHeader>
                  </>
                )}
              </ViewInput>
            </HeaderView>

            <Content>
              {valueSearch.length < 1 ? (
                <>
                  <ViewRow>
                    <ButtonAfter
                      onPress={() => {
                        setAfterIndicator(false);
                        setListResultAfter(Afters);
                        Keyboard.dismiss();
                      }}
                    >
                      <TitleContent>Lista de after's</TitleContent>
                    </ButtonAfter>

                    <ButtonAfter
                      onPress={() => {
                        setAfterIndicator(true);
                        findAfterIndicator();
                        Keyboard.dismiss();
                      }}
                    >
                      <TitleContent>Mais indicados</TitleContent>
                    </ButtonAfter>
                  </ViewRow>

                  <ViewRow>
                    {afterIndicator ? (
                      <>
                        <BarIndicator isDark />
                        <BarIndicator />
                      </>
                    ) : (
                      <>
                        <BarIndicator />
                        <BarIndicator isDark />
                      </>
                    )}
                  </ViewRow>
                </>
              ) : (
                <TitleResults>Resultado da busca...</TitleResults>
              )}

              <FlatList
                scrollEnabled={false}
                data={listResultAfter?.sort((a, b) => (a.name > b.name ? 1 : -1))}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => (
                  <Card
                    key={index.toString()}
                    name={item.name}
                    pic={item.pic}
                    stars={item.stars}
                    action={() => {
                      navigation.navigate('ItemSelect' as never, item as never);
                    }}
                  />
                )}
              />
            </Content>
          </Container>
        </ScrollViewContainer>
      </KeyboardAvoid>
    </>
  );
}
