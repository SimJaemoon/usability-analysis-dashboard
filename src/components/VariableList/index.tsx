'use client';

import styles from './index.module.scss';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { selectData } from '@/lib/features/spreadsheet/spreadsheetSlice';
import {
  selectComparison,
  selectMeasurement,
  toggleComparison,
  toggleMeasurement,
} from '@/lib/features/spreadsheet/variableListSlice';

export default function VariableList({
  variableType,
}: {
  variableType: 'comparison' | 'measurement';
}) {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectData);
  const selectedVarables = useAppSelector(
    variableType === 'comparison' ? selectComparison : selectMeasurement,
  );
  const variables = data[0].filter(
    (v) => !['(예시)', null].includes(v),
  ) as string[];

  const onVariableButtonClick = (variableIndex: number) => () => {
    dispatch(
      variableType === 'comparison'
        ? toggleComparison(variableIndex)
        : toggleMeasurement(variableIndex),
    );
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
