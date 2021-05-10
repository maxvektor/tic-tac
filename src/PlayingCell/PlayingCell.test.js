import { render, screen, fireEvent } from '@testing-library/react';
import testIds from '../App/testIs';
import { PlayingCell } from './PlayingCell';
import {getElement} from "../helpers";

import {checkWin, fillArr} from "./helpers";

const {
    playingCellId,
    playingFieldId
} = testIds;
let resultArr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];
describe('<PlayingCell/>', () => {
    let cell;
    let field;
    beforeEach(() => {
        render(<PlayingCell/>)
        cell = getElement(playingCellId);
        field = getElement(playingFieldId)
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
            field = getElement(playingFieldId)
            fireEvent.click(cell);
        })

        test('PlayingCell value should be x after first click', () => {
            expect(cell).toHaveTextContent('x');
        })
        test('PlayingCell value should be x after second click', () => {
            fireEvent.click(cell);
            expect(cell).toHaveTextContent('x');
        })
    })
})


describe('checkWin', () => {
    it('should return false if 1st row is different', () => {
        let data = [
            ['x', '0', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 1st row is empty', () => {
        let data = [
            ['', '', ''],
            ['x', '', ''],
            ['x', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 1st row have the same values', () => {
        let data = [
            ['x', 'x', 'x'],
            ['x', '', '0'],
            ['x', '', '0'],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 2st row is different', () => {
        let data = [
            ['x', '0', ''],
            ['0', 'x', ''],
            ['x', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 2st row is empty', () => {
        let data = [
            ['x', '0', ''],
            ['', '', ''],
            ['x', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 2st row have the same values', () => {
        let data = [
            ['0', 'x', ''],
            ['x', 'x', 'x'],
            ['0', 'x', ''],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 3st row is different', () => {
        let data = [
            ['', '', ''],
            ['', '', ''],
            ['x', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 3st row is empty', () => {
        let data = [
            ['x', '0', ''],
            ['', '', 'x'],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 3st row have the same values', () => {
        let data = [
            ['0', 'x', ''],
            ['x', '', 'x'],
            ['x', 'x', 'x'],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 1st column is different', () => {
        let data = [
            ['x', '', ''],
            ['0', '', ''],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 1st column is empty', () => {
        let data = [
            ['', 'x', ''],
            ['', '', '0'],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 1st column have the same values', () => {
        let data = [
            ['x', '0', 'x'],
            ['x', '', '0'],
            ['x', '', '0'],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 2st column is different', () => {
        let data = [
            ['', 'x', ''],
            ['', '0', ''],
            ['', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 2st column is empty', () => {
        let data = [
            ['x', '', ''],
            ['', '', '0'],
            ['x', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 2st column have the same values', () => {
        let data = [
            ['0', 'x', ''],
            ['', 'x', 'x'],
            ['0', 'x', ''],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 3st column is different', () => {
        let data = [
            ['', '', 'x'],
            ['', '', '0'],
            ['x', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 3st column is empty', () => {
        let data = [
            ['x', '0', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 3st column have the same values', () => {
        let data = [
            ['0', 'x', 'x'],
            ['x', '', 'x'],
            ['x', '0', 'x'],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 1st (\) diagonal is different', () => {
        let data = [
            ['', '', 'x'],
            ['', '0', '0'],
            ['x', '', 'x'],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 1st (\) diagonal is empty', () => {
        let data = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 1st (\) diagonal have the same values', () => {
        let data = [
            ['0', 'x', 'x'],
            ['x', '0', 'x'],
            ['x', '0', '0'],
        ];
        expect(checkWin(data)).toBe(true)
    })
    it('should return false if 2st (/) diagonal is different', () => {
        let data = [
            ['', '', ''],
            ['', '0', '0'],
            ['x', '0', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return false if 2st (/) diagonal is empty', () => {
        let data = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        expect(checkWin(data)).toBe(false)
    })
    it('should return true if 2st (/) diagonal have the same values', () => {
        let data = [
            ['0', 'x', 'x'],
            ['x', 'x', '0'],
            ['x', '0', 'x'],
        ];
        expect(checkWin(data)).toBe(true)
    })
})


describe('fillArr', () => {
    beforeEach(() => {
        resultArr = [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
    })
    it('should return arr, arr[0][0] = value', function () {
        let pos = 1;
        let value = 'x';
        let testArr = [
            [value, '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[0][1] = value', function () {
        let pos = 2;
        let value = 'x';
        let testArr = [
            ['', value, ''],
            ['', '', ''],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[0][2] = value', function () {
        let pos = 3;
        let value = 'x';
        let testArr = [
            ['', '', value],
            ['', '', ''],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[1][0] = value', function () {
        let pos = 4;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            [value, '', ''],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[1][1] = value', function () {
        let pos = 5;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            ['', value, ''],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[1][2] = value', function () {
        let pos = 6;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            ['', '', value],
            ['', '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[2][0] = value', function () {
        let pos = 7;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            ['', '', ''],
            [value, '', ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[2][1] = value', function () {
        let pos = 8;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            ['', '', ''],
            ['', value, ''],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
    it('should return arr, arr[2][2] = value', function () {
        let pos = 9;
        let value = 'x';
        let testArr = [
            ['', '', ''],
            ['', '', ''],
            ['', '', value],
        ];
        fillArr(resultArr, pos, value)
        expect(resultArr).toStrictEqual(testArr)
    });
})