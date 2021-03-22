import { render, screen, fireEvent } from '@testing-library/react';
import testIds from '../App/testIs';
import { PlayingCell } from './PlayingCell';
import {getElement} from "../helpers";

const {
    playingCellId
} = testIds;

describe('<PlayingCell/>', () => {
    let cell;
    beforeEach(() => {
        render(<PlayingCell/>)
        cell = getElement(playingCellId);
    })
    test('PlayingCell must be presented', () => {
        expect(cell).toBeInTheDocument()
    })

    test('PlayingCell must be empty by default', () => {
        expect(cell).toBeEmptyDOMElement()
    })

    describe('after click', () => {
        beforeEach(() => {
            cell = getElement(playingCellId);
            fireEvent.click(cell)
        })

        test('PlayingCell value must be x', () => {
            expect(cell).toHaveTextContent('x')
        })
    })
})