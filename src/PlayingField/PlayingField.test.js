import { render } from '@testing-library/react';
import testIds from '../App/testIs';
import { PlayingField } from "./PlayingField";
import {getAllElements} from "../helpers";

const {
    playingCellId
} = testIds;

describe('<PlayingField/>', () => {
    beforeEach(() => {
        render(<PlayingField isGameStarted={true}/>)
    })

    test('Playing field must contain 9 playing cells', async () => {
        const items = await getAllElements(playingCellId);
        expect(items).toHaveLength(9)
    })
})
