import ChessBoard from "./Challenges/ChessBoard/ChessBoard";
import MoveText from "./Challenges/MoveText/MoveText";
import SnakeLadderBoard from "./Challenges/SnakeLadder/SnakeLadderBoard";
import StarRating from "./Challenges/StarRating/StarRating";
import TicTacToe from "./Challenges/TicTacToe/TicTacToe";

const basePath = "https://github.com/adavijit/frontend-challenges/tree/main/src/Challenges";
const challenges = [
    {
        "name": "Tic-Tac-Toe",
        "contributors": ["adavijit"],
        "source": `${basePath}/TicTacToe`,
        "component": <TicTacToe />
    },
    {
        "name": "Chess Board",
        "contributors": ["adavijit"],
        "source": `${basePath}/ChessBoard`,
        "component": <ChessBoard />
    },
    {
        "name": "Snake Ladder Board",
        "contributors": ["adavijit"],
        "source": `${basePath}/SnakeLadder`,
        "component": <SnakeLadderBoard />
    },
    {
        "name": "Move Text",
        "contributors": ["adavijit"],
        "source": `${basePath}/MoveText`,
        "component": <MoveText />
    },
    {
        "name": "Star Rating",
        "contributors": ["adavijit"],
        "source": `${basePath}/StarRating`,
        "component": <StarRating />
    },
];

export default challenges;