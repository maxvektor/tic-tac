import { render, screen, getNodeText, fireEvent } from '@testing-library/react';
import App from './App';
import testIds from './testIs';


describe('<App />', () => {
  beforeEach(() => {
    render(<App />);

  })

  test('Title', () => {
    const title = screen.getByTestId(testIds.title);
    expect(getNodeText(title)).toBe('Tik-tak')
  })

  describe('Game', () => {
    let p1input, p2input, button, p1name, p2name;

    beforeEach(() => {
      p1input = screen.queryByTestId(testIds.player1Input);
      p2input = screen.queryByTestId(testIds.player2Input);
      button = screen.queryByTestId(testIds.startButton);
      p1name = screen.queryByTestId(testIds.player1Name);
      p2name = screen.queryByTestId(testIds.player2Name);
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
    })

    describe('after start', () => {
      beforeEach(() => {
        fireEvent.change(p1input, { target: { value: 'player 1' } })
        fireEvent.change(p2input, { target: { value: 'player 2' } })
        fireEvent.click(button);
        // requery names after button click
        p1name = screen.queryByTestId(testIds.player1Name);
        p2name = screen.queryByTestId(testIds.player2Name);
      })

      test('inputs should NOT be presented', () => {
        expect(p1input).not.toBeInTheDocument()
        expect(p2input).not.toBeInTheDocument()
      })

      test('names should be presented', () => {
        expect(p1name).toBeInTheDocument()
        expect(p2name).toBeInTheDocument()
      })
    })
  })
})
