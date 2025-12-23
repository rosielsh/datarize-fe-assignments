import {
  Bar,
  CartesianGrid,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import * as S from './BarChart.styled';

export type Props<T = Record<string, unknown>> = {
  data: T[];
  xAxisKey: keyof T;
  barKey: keyof T;
  formatXAxisLabel?: (value: string | number) => string;
};

const BarChart = <T extends Record<string, unknown>>({
  data,
  xAxisKey,
  barKey,
  formatXAxisLabel,
}: Props<T>) => {
  const handleFormatLabel = (value: string | number): string => {
    if (formatXAxisLabel) {
      return formatXAxisLabel(value);
    }
    return String(value);
  };

  return (
    <S.Container>
      <S.ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey={xAxisKey as string}
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
              tickFormatter={handleFormatLabel}
            />
            <YAxis
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                padding: '8px 12px',
              }}
              labelStyle={{ color: '#374151', fontWeight: 600 }}
              labelFormatter={handleFormatLabel}
            />
            <Bar dataKey={barKey as string} fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.Container>
  );
};

export default BarChart;
