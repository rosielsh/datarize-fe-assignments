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

export type BarChartData = {
  range: string;
  count: number;
};

export type Props = {
  data: BarChartData[];
  title?: string;
  dateRange?: {
    startDate: string;
    endDate: string;
  };
};

const formatRange = (range: string): string => {
  const parts = range.split(' - ');
  if (parts.length !== 2) return range;

  const start = parseInt(parts[0], 10);
  const end = parseInt(parts[1], 10);

  const formatAmount = (amount: number): string => {
    if (amount === 0) return '~';
    const 만원 = Math.floor(amount / 10000);
    if (만원 === 0) {
      return `${amount}원`;
    }
    return `${만원}만원`;
  };

  if (start === 0) {
    return `~${formatAmount(end)}`;
  }

  return `${formatAmount(start)}~${formatAmount(end)}`;
};

const BarChart = ({ data, title, dateRange }: Props) => {
  return (
    <S.Container>
      {title && <S.Title>{title}</S.Title>}
      {dateRange && (
        <S.DateRange>
          {dateRange.startDate} ~ {dateRange.endDate}
        </S.DateRange>
      )}
      <S.ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="range"
              tick={{ fill: '#6b7280', fontSize: 12 }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={{ stroke: '#e5e7eb' }}
              tickFormatter={formatRange}
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
              labelFormatter={(value) => formatRange(value)}
            />
            <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.Container>
  );
};

export default BarChart;
