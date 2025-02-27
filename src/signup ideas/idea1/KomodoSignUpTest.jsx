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
        role: ""
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
        <Card
            header={
                <div style={{
                    width: "100%",
                    margin: "0 auto",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    marginTop: "30px"
                }}>
                    <div style={{fontSize: "70px"}}>
                        Create new Account
                    </div>
                    <div style={{
                        fontSize: "24px",
                        fontWeight: 400,
                        marginTop: "10px"
                    }}>
                        Already Registered? Login
                    </div>
                </div>
            }

            style={{
                width: "900px",
                border: "5px solid #ececec",
                borderRadius: "30px",
                boxShadow: "none"
            }}
        >


            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                    marginLeft: "60px"
                }}>
                    <img
                        src="CoventryKomodo.png"
                        alt="Komodo Dragon"
                        style={{width: "225px"}}
                    />
                </div>
                <div style={{flex: 2, marginLeft: "40px", marginRight: "100px"}}>
                    <form onSubmit={preventHdlReload} className="p-fluid">

                        <div className="p-field">
                            <label>FULL NAME</label>
                            <InputText
                                name="fullname"
                                type="text"
                                value={formData.fullname}
                                onChange={inputHdlChange}
                                required
                                className="p-inputtext-lg"
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "none"
                                }}
                            />
                        </div>
                        <div className="p-field">
                            <label>EMAIL</label>
                            <InputText
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={inputHdlChange}
                                required
                                className="p-inputtext-lg"
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "none"
                                }}
                            />
                        </div>


                        <Divider/>

                        <div className="p-field">
                            <label>PASSWORD</label>
                            <Password
                                value={formData.password}
                                onChange={(event) => pwdHdlChange(event.target.value)}
                                toggleMask
                                feedback
                                header="Pick a strong password"
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "none"
                                }}
                                footer={
                                    <small className="text-sm">
                                        Use at least 8 characters with numbers &amp; special symbols.
                                    </small>
                                }
                            />
                        </div>
                        <div className="p-field">
                            <label>CONFIRM PASSWORD</label>
                            <Password
                                value={formData.password}
                                onChange={(event) => pwdHdlChange(event.target.value)}
                                toggleMask
                                feedback
                                header="Pick a strong password"
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "none"
                                }}
                                footer={
                                    <small className="text-sm">
                                        Use at least 8 characters with numbers &amp; special symbols.
                                    </small>
                                }
                            />
                        </div>

                        <Divider/>

                        <div className="p-field">
                            <label>ROLE SELECTION</label>
                            <InputText
                                name="role"
                                type="text"
                                value={formData.role}
                                onChange={inputHdlChange}
                                required
                                className="p-inputtext-lg"
                                style={{
                                    marginBottom: "10px",
                                    backgroundColor: "#f0f0f0",
                                    border: "none"
                                }}
                            />
                        </div>


                        <Button
                            type="submit"
                            label="Sign up"
                            className="p-button-lg"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "30%",
                                margin: "0 auto",
                                marginTop: "20px",
                                backgroundColor: "#535353",

                                border: "none"
                            }}
                        />

                    </form>
                </div>
            </div>
        </Card>
    )
        ;
}

export default KomodoSignUpTest;
