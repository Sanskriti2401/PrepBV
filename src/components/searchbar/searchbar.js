import React from 'react';
import img2 from "../../images/linkedin.png";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import detail from "../ConnectWithSenior/senior_data";
import Details from "../ConnectWithSenior/details"

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        setSearchTerm(event.target.value);
        const searchWord = event.target.value;
        console.log(isNaN(searchTerm));
        const newFilter = detail.filter((value) => {
            if(isNaN(searchTerm))
                return value.branch.includes(searchWord.toUpperCase());
            else
            return value.year.includes(searchWord);
        });
        setFilteredData(newFilter);
    };

    const tableRows = filteredData.map((info) => {
        return (
            <tr className="connect-rows">
                <td>{info.name}</td>
                <td>{info.branch}</td>
                <td>{info.year}</td>
                <td>{<div className="connect-link">
                    <a href={info.url} target="_blank">
                        <img src={img2} alt="logo" />
                    </a>
                </div>}</td>
            </tr>
        );
    });

    return (
        <div className="connect-search">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleFilter}
            />
            <div className='searchIcon'><SearchIcon /></div>
            <div className='dataResult'>
                {searchTerm !== '' ? (filteredData===null ? () => {return (<h2>Not Found</h2>)} : filteredData.map((info, key) => {
                    return (
                        <table className="table table-stripped">
                            <tbody>{tableRows}</tbody>
                        </table>
                    )
                })) : <Details />}
            </div>
        </div>
    )
}
