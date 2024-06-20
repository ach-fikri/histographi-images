import BarChart from "../Elements/BarChart.jsx";

const HistogramChart = ({data}) => {
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Pixel Intensity',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Frequency',
                },
            },
        },
    };

    const chartData = {
        labels:data.labels,
        datasets: data.datasets
    }

    return (
        <>
        <BarChart option={options} chartData = {chartData}/>
        </>
    )

}

export default HistogramChart;