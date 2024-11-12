type SpreadsheetData = string[][];

interface DescriptiveStatistics {
  sampleSize: {
    whole: number;
    missingValue: number; // NOTE: 결측치 + 타입 불일치(e.g., NaN)
  };
  mode?: string | number;
  mean?: number;
  standardDeviation?: number;
  quartile?: {
    first: number;
    second: number;
    third: number;
  };
}

export interface VariableLevelData {
  name: string;
  data: { name: number; frequency: number }[];
  descriptiveStatistics: DescriptiveStatistics;
}

type DescriptiveStatisticsGroup = {
  comparisonVariableName: string;
  variableLevel: VariableLevelData[];
}[];

interface ChartData {
  descriptiveStatisticsGroup: DescriptiveStatisticsGroup;
}
