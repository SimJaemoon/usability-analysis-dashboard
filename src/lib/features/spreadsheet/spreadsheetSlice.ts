import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';

const sampleData = [
  [
    '(예시)',
    '개선 상태',
    '평가 시간',
    '과업 시간',
    '오류율',
    '사용성',
    'TEST',
    'TEST',
    'TEST',
  ],
  [null, 'Before', '주간', '12.3', '10', '72.5'],
  [null, 'Before', '야간', '9.6', '11', '69.2'],
  [null, 'Before', '심야', '6.5', '6', '77.8'],
  [null, 'After', '주간', '7.0', '4', '82.7'],
  [null, 'After', '야간', '8.1', '6', '81.0'],
  [null, 'After', '심야', '5.5', '3', '86.2'],
];

const sampleCells: (string | null)[][] = Array.from({ length: 3000 }, () =>
  Array.from({ length: 25 }, () => null),
);

sampleData.forEach((row, rowIndex) => {
  row.forEach((cell, colIndex) => {
    sampleCells[rowIndex][colIndex] = cell;
  });
});

const initialState = {
  data: sampleCells,
};

export const spreadsheetSlice = createSlice({
  name: 'spreadsheet',
  initialState,
  reducers: {
    updateData: (
      state,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      action: PayloadAction<([any, any, any, any] | null)[]>,
    ) => {
      action.payload.forEach((v) => {
        if (v === null) return;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [row, column, oldValue, newValue] = v;
        state.data[row][column] = newValue;
      });
    },
  },
});

export const { updateData } = spreadsheetSlice.actions;

export const selectData = (state: RootState) => state.spreadsheet.data;

export default spreadsheetSlice.reducer;
