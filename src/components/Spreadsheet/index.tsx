'use client';

import 'handsontable/dist/handsontable.full.min.css';
import Handsontable from 'handsontable/base';
import { registerAllModules } from 'handsontable/registry';

registerAllModules();

import { HotTable } from '@handsontable/react';
import styles from './index.module.scss';

import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import {
  updateData,
  selectData,
} from '@/lib/features/spreadsheet/spreadsheetSlice';

export default function Spreadsheet() {
  const data = useAppSelector(selectData);
  const dispatch = useAppDispatch();

  const onBeforeHotChange = (changes: (Handsontable.CellChange | null)[]) => {
    dispatch(updateData(changes));
    return false;
  };

  return (
    <HotTable
      width="100%"
      height="100%"
      data={data}
      startCols={30}
      startRows={1001}
      rowHeaders={true}
      colHeaders={true}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation" // for non-commercial use only
      className={styles.spreadsheet}
      fixedRowsTop={1}
      beforeChange={onBeforeHotChange}
      manualColumnResize={true}
      manualRowResize={true}
    />
  );
}
