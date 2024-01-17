import { Link } from "react-router-dom";



const CardComp = ({ item }) => {
  console.log(item)
  return (
    <>
    <Link to={`/product/${item._id}`}>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item?.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <h5 className="text-danger">$ {item.price}</h5>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </Link>
    </>
  );
};

export default CardComp;
