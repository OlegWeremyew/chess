import React, { FC } from 'react';

import { ReturnComponentType } from '../../types';

import { FigureIMG, LostContainer, LostFigureRow } from './constants';
import { LostFiguresProps } from './types';

export const LostFigures: FC<LostFiguresProps> = ({
  title,
  figures,
}): ReturnComponentType => (
  <LostContainer>
    <h3>Lose {title}:</h3>
    {figures.map(figure => (
      <LostFigureRow key={figure.id}>
        {figure.name} {figure.logo && <FigureIMG src={figure.logo} alt={figure.logo} />}
      </LostFigureRow>
    ))}
  </LostContainer>
);
