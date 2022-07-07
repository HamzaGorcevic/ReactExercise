import React from "react";


function Section() {
  return (
    <section className="bg-primary color-white">
      <div className="container d-flex align-items-center justify-content-around pt-5 shadow">
        <div className=" w-50 ">
          <h3 className="text-white h2"><span className="text-warning">W</span>elcome to <span className="text-warning">m</span>y <span className="text-warning h1"><span className="text-white">W</span>ebsite</span></h3>
          <p className="h5 text-warning">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, porro.</p>
          <button className="btn btn-outline-warning text-white my-4">Read more</button>
        </div>
          <div className="">
            <img className="" style={{width:'70%'}} src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_960_720.png" alt="" />
            
          
          </div>
      
        
      </div>
    </section>

    
  );
}

export default Section;
