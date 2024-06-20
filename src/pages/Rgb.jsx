import Card from "../components/Elements/Card";
import InsertImage from "../components/Elements/InsertImage";
import Modal from "../components/Elements/Modal";
import Button from "../components/Elements/Button";
import HistogramChart from "../components/layouts/HistogramChart.jsx";

const Rgb = () => {
    const data = {
        labels: ['Bin 1', 'Bin 2', 'Bin 3', 'Bin 4'],
        datasets:[
            {
                label: 'Histogram',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }
        ]
    };
    return (
        <Card>
            <Card.Header tittle="Citra RGB" description="Konversi Citra RGB Ke Histogram">
                <InsertImage/>
                <div className="card-actions justify-center mt-4 gap-8">
                    <a href="/">
                        <Button
                            classname="btn btn-error text-primary-content px-8 py-4"
                            role="button"
                            href="/"
                        >
                            Back
                        </Button>
                    </a>
                    <Button
                        id="gray"
                        classname="btn btn-primary hover:bg-primary text-primary-content px-8 py-4"
                        role="submit"
                        onClick={() => document.getElementById("gray").showModal()}
                    >
                        Submit
                    </Button>
                </div>
                <Modal id="gray">
                    <Modal.Body tittle="Histogram Citra RGB">
                        <HistogramChart data={data} />
                    </Modal.Body>
                </Modal>
            </Card.Header>
        </Card>
    );
};

export default Rgb