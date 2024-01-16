import { useTheme } from '@mui/joy';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';

import { shortTimeFormat } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SECONDS_IN_DAY = 60 * 60 * 1000 * 24;

const chartLabels: string[] = [];
for (let i = 6; i > 0; i--) {
  chartLabels.push(shortTimeFormat(new Date(Date.now() - i * SECONDS_IN_DAY)));
}
chartLabels.push('Today');

function AdmissionDischargeChart() {
  const theme = useTheme();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const
      },
      datalabels: {
        color: theme.palette.common.white,
        labels: {
          value: {
            anchor: 'end' as const,
            align: 'start' as const
          }
        }
      }
    }
  };

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Admissions',
        backgroundColor: theme.palette.primary[400],
        data: [2, 6, 14, 8, 3, 4, 12]
      },
      {
        label: 'Discharges',
        backgroundColor: theme.palette.success[400],
        data: [9, 7, 9, 12, 8, 5, 8]
      }
    ]
  };

  return (
    <Bar plugins={[ChartDataLabels]} options={chartOptions} data={chartData} />
  );
}

export default AdmissionDischargeChart;
