import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/lib/store';

interface VariableListState {
  comparison: number[];
  measurement: number[];
}

const initialState: VariableListState = {
  comparison: [0, 1],
  measurement: [2],
};

export const variableListSlice = createSlice({
  name: 'variableList',
  initialState,
  reducers: {
    toggleComparisonVariableIndex: (state, action: PayloadAction<number>) => {
      state.comparison = state.comparison.includes(action.payload)
        ? state.comparison.filter((v) => v !== action.payload)
        : [...state.comparison, action.payload];
    },
    toggleMeasurementVariableIndex: (state, action: PayloadAction<number>) => {
      state.measurement = state.measurement.includes(action.payload)
        ? state.measurement.filter((v) => v !== action.payload)
        : [...state.measurement, action.payload];
    },
  },
});

export const { toggleComparisonVariableIndex, toggleMeasurementVariableIndex } =
  variableListSlice.actions;

export const selectComparisonVariableIndex = (state: RootState) =>
  state.variableList.comparison;
export const selectMeasurementVariableIndex = (state: RootState) =>
  state.variableList.measurement;

export default variableListSlice.reducer;
