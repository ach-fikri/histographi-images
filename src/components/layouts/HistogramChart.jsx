import BarChart from "../Elements/BarChart.jsx";

const HistogramChart = ({data}) => {
    console.log(data)
    const option = {};
    const chartData = {
        labels : data.labels,
        datasets: [
            {
                label : 'Histogram',
                data: data.values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
        ]
    }
    return (
        <>
        <BarChart option={option} chartData = {chartData}/>
        </>
    )

}

export default HistogramChart;