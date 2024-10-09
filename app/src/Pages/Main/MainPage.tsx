import * as React from 'react';
import { Header } from './Components/Header/Header';

export interface IAppProps {
}

export function MainPage (props: IAppProps) {
  return (
    <div className='main-page__container'>
      <Header></Header>
    </div>
  );
}
