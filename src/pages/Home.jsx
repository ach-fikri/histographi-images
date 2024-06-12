import Card from "../components/Elements/Card";
import Option from "../components/Elements/Option";

const Home = () => {
  return (
      <Card>
      <Card.Header tittle="Konversi Citra Ke Histogram" description="Pilih Citra Yang Ingin Di Konversi">
        <Option classname="btn-block bg-success hover:bg-success" href="/rgb">Citra RGB</Option>
        <Option classname="btn-block bg-success hover:bg-success" href="/biner">Citra Biner</Option>
        <Option classname="btn-block bg-success hover:bg-success" href="/gray">Citra Grayscale</Option>
      </Card.Header>
    </Card>
  );
};

export default Home;
