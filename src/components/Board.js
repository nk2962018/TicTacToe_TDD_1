import Tile from "./Tile";
import '../styles/Board.css';

const Board = ({boardTestId}) => {
    return(
        <div className="board-container"  data-testid={boardTestId}>
            <Tile value='X' tileTestId='tile'/>
        </div>
    )
}

export default Board;