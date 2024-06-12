const Card = (props) => {
  const { children } = props;
  return (
    <div className="card w-full  bg-white text-100 mx-auto text-primary-content shadow-xxl">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { tittle, description, children } = props;
  return (
    <div className="card-header">
      <h2 className="card-title justify-center font-bold">{tittle}</h2>
      <p className="mb-8">{description}</p>
      <div className="card-body">
        <div className="card-actions justify-center mt-4 gap-8">{children}</div>
      </div>
    </div>
  );
};

Card.Header = Header;

export default Card;
