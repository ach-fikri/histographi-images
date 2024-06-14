import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const HistogramChart = ({ data }) => {
    const option = {
        responsive : true,

    };
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Histogram',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return <Bar options={option} data={chartData} />;
};

export default HistogramChart;
