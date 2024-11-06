'use client';

import styles from './index.module.scss';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { selectData } from '@/lib/features/spreadsheet/spreadsheetSlice';

export default function VariableList() {
  const [selectedVarables, setSelectedVarables] = useState<number[]>([]);
  const data = useAppSelector(selectData);
  const variables = data[0].filter(
    (v) => !['(예시)', null].includes(v),
  ) as string[];

  const onVariableButtonClick = (variableIndex: number) => () => {
    setSelectedVarables((prev) => {
      if (prev.includes(variableIndex))
        return prev.filter((v) => v !== variableIndex);
      return [...prev, variableIndex];
    });
  };

  return (
    <>
      <ul>
        {variables.map((v, i) => (
          <li key={i}>
            <button
              onClick={onVariableButtonClick(i)}
              className={`${styles['variable-button']} ${selectedVarables.includes(i) ? styles['variable-selected'] : ''}`}
            >
              {v}
            </button>
          </li>
        ))}
      </ul>
      <button>▼</button>
    </>
  );
}
