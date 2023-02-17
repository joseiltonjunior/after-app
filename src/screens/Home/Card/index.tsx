import React, { useState, useEffect } from 'react';

import {
  TouchCard,
  CardView,
  CardHeader,
  ImageCard,
  CardContent,
  TextCardContent,
  Icon,
  ViewStars,
  StarsList,
} from './styles';

interface ICard {
  name: string;
  pic: string;
  stars: number;
  action: any;
}

export function Card({ name, pic, stars, action }: ICard): JSX.Element {
  return (
    <TouchCard onPress={action} disabled>
      <CardView>
        <CardHeader>
          <ImageCard
            source={{
              uri: `${pic}`,
            }}
          />
        </CardHeader>
        <CardContent>
          <ViewStars>
            <StarsList
              numColumns={5}
              data={Array.from({ length: stars }, (v, k) => k)}
              renderItem={() => <Icon name="star" />}
            />
          </ViewStars>

          <TextCardContent>{name}</TextCardContent>
        </CardContent>
      </CardView>
    </TouchCard>
  );
}
