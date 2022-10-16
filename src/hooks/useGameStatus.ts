import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = (rowsCleared:any) => {
  const [score, setScore] = useState<any>(0);
  const [rows, setRows] = useState<any>(0);
  const [level, setLevel] = useState<any>(0);
 
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // We have score 
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore((prev:any) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev:any) => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
