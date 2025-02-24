import React, {useState} from "react";
import {Password} from "primereact/password";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Card} from "primereact/card";
import {Divider} from "primereact/divider";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function KomodoSignUpTest() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        fullname: "",
    });

    const inputHdlChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const pwdHdlChange = (value) => {
        setFormData({
            ...formData,
            password: value,
        });
    };

    const preventHdlReload = async (event) => {
        event.preventDefault();

        if (!formData.username.trim()) {
            alert("Username is required");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (formData.password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        try {
            const response = await fetch("https://komodoapi.com/secure", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("User registered successfully:", result);
                alert("Registration successful!");
            } else {
                alert("Registration failed. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="align-items-center">
            <Card title="Sign Up" className="p-4 shadow-3" style={{width: "600px", margin:"50px", border: "2px solid grey"}}>
                    <img
                        src="src/assets/CoventryKomodo.png"
                        alt="Komodo Dragon"
                        style={{width: "100px", marginBottom: "20px"}}
                    />
                <form onSubmit={preventHdlReload} className="p-fluid">
                    <div className="p-field">
                        <label>Email</label>
                        <InputText
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={inputHdlChange}
                            required
                            className="p-inputtext-lg"
                        />
                    </div>

                    <div className="p-field">
                        <label>Username</label>
                        <InputText
                            name="username"
                            type="username"
                            value={formData.username}
                            onChange={inputHdlChange}
                            required
                            className="p-inputtext-lg"

                        />
                    </div>

                    <div className="p-field">
                        <label>Full Name</label>
                        <InputText
                            name="fullname"
                            type="text"
                            value={formData.fullname}
                            onChange={inputHdlChange}
                            required
                            className="p-inputtext-lg"
                        />
                    </div>

                    <div className="p-inputtext-lg">
                        <label>Password</label>
                        <Password
                            value={formData.password}
                            onChange={(event) => pwdHdlChange(event.target.value)}
                            toggleMask
                            feedback
                            header="Pick a strong password"
                            footer={
                                <small className="text-sm">
                                    Use at least 8 characters with numbers & special symbols.
                                </small>
                            }
                        />
                    </div>

                    <Divider/>

                    <Button
                        type="submit"
                        label="Register"
                        icon="pi pi-user-plus"
                        className="p-button-lg w-full"
                    />
                </form>
            </Card>
        </div>
    );
}

export default KomodoSignUpTest;
