import React, { useState } from "react";
import { uploadImageToCloud } from "../../utils/imageUpload";
import Spinner from "../../components/alert/Spinner";

const AddProductForm = () => {
  const initialValues = { name: "", price: "", description: "", category: "" };

  const [productData, setProductData] = useState(initialValues);
  const [file, setFile] = useState([]);
  const [loading, setLaoding] = useState(false);

  const { name, price, description, category } = productData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLaoding(true);

    const { url } = await uploadImageToCloud(file[0]);

    await fetch("https://techtrove-tsly.onrender.com/api/product", {
      method: "POST",
      body: JSON.stringify({ ...productData, image: url }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setLaoding(false);
        console.log({ result });
      });
  };

  return (
    <div className="container">
      <div classNameName="form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6 col-sm-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="product name"
                  value={name}
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="col-6 col-sm-4">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Product Price
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">₦</span>
                <input
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={price}
                  onChange={(e) =>
                    setProductData({ ...productData, price: e.target.value })
                  }
                />
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6 col-sm-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="product description"
                  value={description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="col-6 col-sm-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="product category"
                  value={category}
                  onChange={(e) =>
                    setProductData({ ...productData, category: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="exampleFormControlInput1"
                  //   value={file}
                  onChange={(e) => setFile(e.target.files)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>

      {loading && <Spinner />}
    </div>
  );
};

export default AddProductForm;
