import React from "react";
import Swal from "sweetalert2";
import Navbar from "../../components/Navbar/Navbar";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          // alert('coffee successfully added !');
          Swal.fire({
            title: "succcess!",
            text: "coffee successfully added !",
            icon: "success",
            confirmButtonText: "okay",
          });
          form.reset();
        } else {
          alert("sorry , try again to add .");
        }
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className=" container-xl md:mx-24 mt-10 rounded px-24 py-20 items-center mx-auto max-wd-4xl justify-center flex flex-col gap-6 bg-[#F4F3F0]">
        <h2 className="text-2xl text-[#374151] font-extrabold tracking-wide">
          Add New Coffee
        </h2>
        <p className="text-center text-[#1B1A1A] ">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form
          action="
        "
          onSubmit={handleAddCoffee}
          className="grid grid-cols-2 gap-x-6 w-full justify-between"
        >
          <label className="form-control w-full max-w-4xl">
            <div className="label">
              <span className="label-text">Coffee name</span>
            </div>
            <input
              type="text"
              name="name"
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
              placeholder="photo URL"
              className="input input-bordered w-full "
            />
          </label>
          <div className="flex mt-9 items-center justify-center">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-primary w-full  bg-[#D2B48C] text-[#331A15]"
            ></input>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCoffee;
