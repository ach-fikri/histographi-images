import Navbar from "../components/layouts/Navbar.jsx";
import HistogramChart from '../components/fragments/HistogramChart.jsx'

const Home = () => {
  const data = {
    labels: ['Bin 1', 'Bin 2', 'Bin 3', 'Bin 4'],
    values: [12, 19, 3, 5],
  };

  return(
      <>
        <Navbar/>
        <div className={'card w-200 h-auto bg-amber-300'}>
            <HistogramChart data={data}/>
        </div>
      </>


  )
}

export default Home;