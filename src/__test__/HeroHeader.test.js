import React from 'react';
import HeroHeader from '../components/HeroSection/HeroHeader';
import { render, screen } from '@testing-library/react';

describe('HeroHeader test suit', () => {
  it('Should render with any text', () => {
    render(<HeroHeader text='A' />)
    expect(screen.getByText('A')).toBeInTheDocument()
  })

  it('Should render with "text" as default if not passing text props', () => {
    render(<HeroHeader />)
    expect(screen.getByText('text')).toBeInTheDocument()
  })
});