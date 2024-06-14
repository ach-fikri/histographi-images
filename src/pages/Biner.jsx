import Card from "../components/Elements/Card";
import InsertImage from "../components/Elements/InsertImage";
import Modal from "../components/Elements/Modal";
import Button from "../components/Elements/Button";

const Biner = () => {
    return (
        <Card>
        <Card.Header tittle="Citra Biner" description="Konversi Citra BIner Ke Histogram">
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
        <Modal.Body tittle="Histogram Citra Biner">Click the button below to close</Modal.Body>
        </Modal>
        </Card.Header>
      </Card>
    );
};

export default Biner