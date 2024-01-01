import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '@mui/joy';
import { shortTimeFormat } from '../../utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      }
    }
  };

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Admissions',
        borderColor: theme.palette.primary[400],
        backgroundColor: theme.palette.primary[400],
        data: [2, 6, 14, 8, 3, 4, 12]
      },
      {
        label: 'Discharges',
        borderColor: theme.palette.success[400],
        backgroundColor: theme.palette.success[400],
        data: [9, 7, 9, 12, 8, 5, 8]
      }
    ]
  };

  return (
    <Line options={chartOptions} data={chartData} />
  );
}

export default AdmissionDischargeChart;