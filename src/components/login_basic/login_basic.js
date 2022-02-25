import React from "react";
import "./login_basic.css";
import { useState } from "react";

export default function LoginBasic() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <>
            <div className="l_b">
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label>
                            Email Address
                            <input
                                type="text"
                                name="email"
                                value={inputs.email || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            Password
                            <input
                                type="password"
                                name="password"
                                value={inputs.password || ""}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    <div className="submit">
                        <input type="submit" value={"Login"}></input>
                    </div>
                </form>
            </div>
        </>
    );
}