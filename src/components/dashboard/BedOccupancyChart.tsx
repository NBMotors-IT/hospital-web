import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from '@mui/joy';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function BedOccupancyChart() {
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
            font: {
              weight: 'bold' as const
            }
          }
        }
      }
    }
  };

  const chartData = {
    labels: ['Occupied', 'Free'],
    datasets: [
      {
        label: '# of beds',
        backgroundColor: [
          theme.palette.primary[400],
          theme.palette.success[400]
        ],
        data: [43, 12]
      }
    ]
  };

  return (
    // @ts-expect-error https://github.com/chartjs/Chart.js/issues/10896
    <Doughnut plugins={[ChartDataLabels]} options={chartOptions} data={chartData} />
  );
}

export default BedOccupancyChart;