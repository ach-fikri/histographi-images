import Button from "./Button";

const Modal = (props) => {
  const { children, id } = props;
  return (
    <>
      <dialog id={id} className="modal">
        {children}
      </dialog>
    </>
  );
};

const Body = (props) => {
  const { children, tittle } = props;
  return (
    // <div className="modal-box bg-white text-100 w-11/12 max-w-5xl">
    //   <h3 className="font-bold text-lg">{tittle}</h3>
    //   <p className="py-4">{children}</p>
    //   <div className="modal-action">
    //     <form method="dialog">
    //       <Button classname="btn btn-error">Close</Button>
    //     </form>
    //   </div>
    // </div>
    //
    // <!-- You can open the modal using ID.showModal() method -->
    // <button class="btn" onclick="my_modal_3.showModal()">open modal</button>
    // <dialog id="my_modal_3" class="modal">
      <div className="modal-box bg-white text-100 w-11/12 max-w-5xl">
        <form method="dialog">
          <Button classname="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Button>
        </form>
        <h3 className="font-bold text-lg">{tittle}</h3>
        <p className="py-4">{children}</p>
      </div>
    // </dialog>
    //
  );
};

Modal.Body = Body;

export default Modal;
