import img2 from "../../images/linkedin.png";
import detail from "./senior_data";

const tableRows = detail.map((info) => {
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

function Details() {
    return <div className="connect-details">
        <table className="table table-stripped">
            <thead>
                <tr className="connect-head">
                    <th>Name</th>
                    <th>Branch</th>
                    <th>Year</th>
                    <th>LinkedIn Handle</th>
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
