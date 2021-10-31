import React from "react";
import "../App.css";
import AddTodo from "./Addtodo";
import VisibilityFilters from "./VisibilityFilters";
import Userdetails from "./Userdetails";

function Header() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <h2 className="text-center fw-bold text-black mb-4">
            TODO-APPLICATION
          </h2>

          <div className="col-md-9  text-white p-4 mx-auto tododetails">
            <h3 className="mb-4 fw-bold  text-center">Todo-list</h3>
            <div className="row">
              <div className="col-md-12">
                <AddTodo />
                <VisibilityFilters />
              </div>
            </div>
          </div>
          <div className="col-md-2 text-center  text-white bg-dark pt-4   userDetails ">
            <Userdetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
