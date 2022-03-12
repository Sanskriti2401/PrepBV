import img2 from "../../images/linkedin.png";
import detail from "./senior_data";

const tableRows = detail.map(createRow);

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

function Details() {
    return <div className="connect-details">
        <table className="connect-stripped">
            <thead>
                <tr className="connect-head">
                    <th className="connect-th">Name</th>
                    <th className="connect-th">Branch</th>
                    <th className="connect-th">Year</th>
                    <th className="connect-th">LinkedIn Handle</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
        </table>

        {/* <div className="connect-link">
            <a href={props.url} target="_blank">
                <img src={img2} alt="logo" />
            </a>
        </div> */}
    </div>
}

export default Details
