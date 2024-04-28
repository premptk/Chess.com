import { Square, PieceSymbol, Color } from "chess.js";
import { WebSocket } from "ws";
import { useState } from "react";

export const MOVE = 'move';

export default function ChessBoard({ chess, board, socket, setBoard }: {
  chess: any;
  setBoard: any;
  board: ({
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null)[][];
  socket: WebSocket;
}) {
  const [from, setFrom] = useState<Square | null>(null);

  return (
    <div className="text-black"> 
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => {
            const squareRepresentation = String.fromCharCode(97 + (j % 8)) + "" + (8 - i) as Square;

            return (
              <div onClick={() => {
                if (!from) {
                  setFrom(squareRepresentation);
                } else {
                  socket.send(JSON.stringify({
                    type: MOVE,
                    payload: {
                      move: {
                        from,
                        to: squareRepresentation
                      }
                    }
                  }));
                  setFrom(null);
                  chess.move({
                    from,
                    to: squareRepresentation
                  });
                  setBoard(chess.board());
                }
              }} key={j} className={`w-16 h-16 ${(i + j) % 2 === 0 ? 'bg-green-500' : 'bg-white'}`}>
                <div className="w-full justify-center flex h-full">
                  <div className="h-full justify-center flex flex-col">
                    {square ? <img className = 'w-4' src = {`/${square?.color === 'b' ? square?.type : `${square?.type?.toUpperCase()} copy`}.png`}/> : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}