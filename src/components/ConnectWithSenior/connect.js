import React from "react";
import "./connect.css";
import img1 from "../../images/4.png";
import Details from "./details"
import SearchBar from "../searchbar/searchbar";


export default function Connect() {
    
    // const res = 'Not Found';
    // const filteredItems = getFilteredItems(searchTerm, detail)
    return (
        <>
            <div className="connect">
                <div className="connect-stick">
                    <div className="connect-bg"></div>
                    <div className="connect-img">
                        <img src={img1} alt="Error" />
                    </div>
                    <div className="connect-text" >
                        <h1>Connect With Seniors</h1>
                        <p className="connect-para">Let's be a better version of yourself by seeking guidance from seniors.</p>
                        <p className="connect-para">Here you can connect with college seniors and alumni of BV(Banasthali Vidyapith). </p>
                    </div>
                    <p className="connect-slogan">Let's connect and grow!</p>
                </div>
                <SearchBar />
                {/* <div className="connect-matter">
                    <Details></Details>
                </div> */}

            </div>
        </>
    );
}