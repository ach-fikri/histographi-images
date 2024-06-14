// import Navbar from "../components/layouts/Navbar.jsx";
import HistogramChart from "../components/layouts/HistogramChart.jsx"
import Card from "../components/Elements/Card";
import Option from "../components/Elements/Option";

const Home = () => {
  const data = {
    labels: ['Bin 1', 'Bin 2', 'Bin 3', 'Bin 4'],
    values: [12, 19, 3, 5],
  };

  return(
      <>
        {/*<Navbar/>*/}
          <Card.Header tittle="Konversi Citra Ke Histogram" description="Pilih Citra Yang Ingin Di Konversi">
              <Option classname="btn-block bg-success hover:bg-success" href="/rgb">Citra RGB</Option>
              <Option classname="btn-block bg-success hover:bg-success" href="/biner">Citra Biner</Option>
              <Option classname="btn-block bg-success hover:bg-success" href="/gray">Citra Grayscale</Option>
          </Card.Header>
        <div className={'card w-200 h-auto bg-amber-300'}>
            <HistogramChart data={data}/>
        </div>
      </>


  )
}

export default Home;
