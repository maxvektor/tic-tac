import testIds from '../App/testIs';

export const Players = ({
    p1Name,
    p2Name,
    isGameStarted,
    setGameStarted,
    setP1Name,
    setP2Name
}) => {
    return <>
        {
            !isGameStarted
            && <input
                data-testid={testIds.player1Input}
                onChange={setP1Name} />
        }
        {
            isGameStarted && <h2 data-testid={testIds.player1Name} >
                {p1Name}
            </h2>
        }

        {
            !isGameStarted
            && <input
                data-testid={testIds.player2Input}
                onChange={setP2Name} />
        }
        {
            isGameStarted && <h2 data-testid={testIds.player2Name} >
                {p2Name}
            </h2>
        }

        <button
            data-testid={testIds.startButton}
            onClick={() => setGameStarted(true)} />
    </>
}