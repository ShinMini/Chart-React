import {ChartOptions} from "chart.js";

export const chartOptions: ChartOptions = {
  responsive: true,
  hover: {
    axis: 'y',

  },
  elements: {
    bar: {
      borderRadius: 5,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 20,
        },
      }
    },
    title: {
      display: true,
      text: '월별 모두페이 사용빈도',
      font: {
        size: 30,
      }
    },
  },
};
