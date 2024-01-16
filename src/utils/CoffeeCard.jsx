import { data } from "autoprefixer";
import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const handleDeleteButton = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const newCoffees = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(newCoffees);
            }
          });
      }
    });
  };
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl md:m-10 md:p-4">
        <figure>
          <img className="w-40 h-70" src={photo} alt="Movie" />
        </figure>
        <div className="card-body flex flex-col gap-2">
          <h2 className="card-title">{name}</h2>
          <p>{quantity} $</p>
        </div>
        <div className="join join-vertical space-y-4 my-4 md:mr-8">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-sm join-item bg-lime-300"
          >
            view
          </button>

          <Link to={`updateCoffee/${_id}`}>
            <button className="btn btn-sm join-item bg-lime-300 w-full">
              edit
            </button>
          </Link>
          <button
            onClick={() => handleDeleteButton(_id)}
            className="btn btn-sm join-item bg-orange-600 font-semibold"
          >
            delete
          </button>
        </div>
        <section>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-white space-y-3">
              <figure>
                <img className="w-40 h-70" src={photo} alt="Movie" />
              </figure>
              <div className="flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{quantity} $</p>
              </div>

              <p className="py-4 text-center">
              Explore our new Different Coffee Beans !
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </section>
      </div>
    </>
  );
};

export default CoffeeCard;
