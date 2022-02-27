import React from 'react';
import img2 from "../../images/linkedin.png";
import { useState } from "react";
import detail from "../ConnectWithSenior/senior_data";
import Details from "../ConnectWithSenior/details"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        setSearchTerm(event.target.value);
        const searchWord = event.target.value;
        const newFilter = detail.filter((value) => {
            if(isNaN(searchTerm))
                return value.branch.includes(searchWord.toUpperCase());
            else
                return value.year.includes(searchWord);
        });
        setFilteredData(newFilter);
    };

    const tableRows = filteredData.map(createRow);

    function SeniorComponent(props) {
        return (
            <tr className="connect-rows">
                <td className="connect-td">{props.name}</td>
                <td className="connect-td">{props.branch}</td>
                <td className="connect-td">{props.year}</td>
                <td className="connect-td">{<div className="connect-link">
                    <a href={props.url} target="_blank">
                        <img src={img2} alt="logo" />
                    </a>
                </div>}</td>
            </tr>
        );
    }

    function createRow(info) {
        return (
            <SeniorComponent
                key={info.id}
                name={info.name}
                branch={info.branch}
                year={info.year}
                url={info.url}
            />
        );
    }

    return (
        <div className="connect-search">
            <input
                type="text"
                placeholder="Search Using Branch Or Year..."
                onChange={handleFilter}
            />
            {console.log(filteredData)}
            <div className='dataResult'>
                {searchTerm !== '' ? 
                        <table className="connect-stripped">
                            <tbody>{tableRows}</tbody>
                        </table>
                     : <Details />}
            </div>
        </div>
    )
}
