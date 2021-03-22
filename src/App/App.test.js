import { render, getNodeText, fireEvent } from '@testing-library/react';
import App from './App';
import testIds from './testIs';
import { getElement } from '../helpers';

const {
  titleId,
  player1Input,
  player1Name,
  player2Input,
  player2Name,
  startButton,
  playingFieldId,
} = testIds;

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  })

  test('Title', () => {
    const title = getElement(titleId);
    expect(getNodeText(title)).toBe('Tik-tak')
  })

  describe('Game', () => {
    let p1input, p2input, button, p1name, p2name, playingField;

    beforeEach(() => {
      p1input = getElement(player1Input);
      p2input = getElement(player2Input);
      button = getElement(startButton);
      p1name = getElement(player1Name);
      p2name = getElement(player2Name);
      playingField = getElement(playingFieldId);
    })

    describe('before start', () => {
      test('inputs should be presented', () => {
        expect(p1input).toBeInTheDocument()
        expect(p2input).toBeInTheDocument()
      })

      test('names should NOT be presented', () => {
        expect(p1name).not.toBeInTheDocument()
        expect(p2name).not.toBeInTheDocument()
      })

      test('Playing field should NOT be presented', () => {
        expect(playingField).not.toBeInTheDocument()
      })

    })

    describe('after start', () => {
      beforeEach(() => {
        fireEvent.change(p1input, { target: { value: 'player 1' } })
        fireEvent.change(p2input, { target: { value: 'player 2' } })
        fireEvent.click(button);
        // requery names after button click
        p1name = getElement(player1Name);
        p2name = getElement(player2Name);
        playingField = getElement(playingFieldId);
      })

      test('inputs should NOT be presented', () => {
        expect(p1input).not.toBeInTheDocument()
        expect(p2input).not.toBeInTheDocument()
      })

      test('names should be presented', () => {
        expect(p1name).toBeInTheDocument()
        expect(p2name).toBeInTheDocument()
      })

      test('Playing field should be presented', () => {
        expect(playingField).toBeInTheDocument()
      })

    })
  })
})

