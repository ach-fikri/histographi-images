import Card from "../components/Elements/Card";
import InsertImage from "../components/Elements/InsertImage";
import Modal from "../components/Elements/Modal";
import Button from "../components/Elements/Button";
import HistogramChart from "../components/layouts/HistogramChart.jsx";
import {useEffect, useState} from "react";
import {rgb} from "../services/foto.sevices.js";

const Rgb = () => {
    const [data, setData] = useState({
        labels:[],
        datasets: [],
    });
    const [image, setImage] = useState('');
    const [his, setHis] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleUpload = (event)=> {
        setImage(event.target.files[0])
    }
    const submit = async ()=>{
        const data = new FormData()
        data.append('file', image)
        try {
            const res = await rgb(data)
            setHis(res.data.data.histogram.values)
            console.log(res.data.data.histogram.values)
            openModal()
        }catch (e){
            console.log(e)
        }
    }

    const openModal = ()=>{
        setIsModalOpen(true)
        document.getElementById('gray').showModal()
    }

    const closeModal = ()=>{
        setIsModalOpen(false)
    }

    useEffect(()=>{
        if (his){
            setData(
                {
                    labels: Array.from({length:256}, (_, i)=>i),
                    datasets:[
                        {
                            label: 'Red',
                            data: his.red,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        },
                        {
                            label: 'Green',
                            data: his.green,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                        {
                            label: 'Blue',
                            data: his.blue,
                            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        },
                    ]
                }
            )
        }
    }, [his])


    useEffect(()=>{
        if (isModalOpen){
            setImage('')
        }
    }, [isModalOpen])
    return (
        <Card>
            <Card.Header tittle="Citra RGB" description="Konversi Citra RGB Ke Histogram">
                <InsertImage image={image} onChange={handleUpload}/>
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
                        onClick={submit}
                    >
                        Submit
                    </Button>
                </div>
                <Modal id="gray">
                    <Modal.Body tittle="Histogram Citra RGB" closeModal={closeModal}>
                        <HistogramChart data={data} />
                    </Modal.Body>
                </Modal>
            </Card.Header>
        </Card>
    );
};

export default Rgb