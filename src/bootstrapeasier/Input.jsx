import React from "react";


export default function Input() {
    return (
        <div className="container-fluid bg-primary">
             <div className="input-group w-50 ml-auto pb-4">
                <input type="text" className="form-control" placeholder="Search something"/>
                <div className="input-group-append">
                    <button className="btn btn-warning text-light" type="button">Search</button>
                </div>
            </div>
        </div>
    )
}