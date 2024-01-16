import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // console.log(coffee);
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const navigate = useNavigate();

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`http://localhost:5000/updateCoffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          // alert('coffee successfully added !');
          Swal.fire({
            title: "succcess!",
            text: "coffee information successfully updated !",
            icon: "success",
            confirmButtonText: "okay",
          });
          // form.reset();
        } else {
          alert("Change something to update please .");
        }
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className=" container-xl md:mx-24 mt-10 rounded px-24 py-20 items-center mx-auto max-wd-4xl justify-center flex flex-col gap-6 bg-[#F4F3F0]">
          <h2 className="text-2xl text-[#374151] font-extrabold tracking-wide">
            Update Coffee Information
          </h2>

          <form
            onSubmit={handleUpdateCoffee}
            className="grid grid-cols-2 gap-x-6 w-full justify-between"
          >
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Coffee name</span>
              </div>
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Coffee name"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Available Quantity </span>
              </div>
              <input
                type="number"
                name="quantity"
                defaultValue={quantity}
                placeholder="Available Quantity "
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Supplier</span>
              </div>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Supplier"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Taste</span>
              </div>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Taste"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="category"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">details</span>
              </div>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="details"
                className="input input-bordered w-full max-w-xl"
              />
            </label>
            <label className="form-control w-full max-w-4xl">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo URL"
                className="input input-bordered w-full "
              />
            </label>
            <div className="flex mt-9 items-center justify-center">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary w-full  bg-[#D2B48C] text-[#331A15]"
              ></input>
            </div>
          </form>
          <div className="flex mt-9 items-center justify-center">
            <button
              className="btn btn-primary ml-auto mt-5"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateCoffee;
