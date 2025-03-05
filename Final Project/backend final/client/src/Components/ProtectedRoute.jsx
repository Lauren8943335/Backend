import React, {useEffect, useState} from "react";
import { Outlet, useNavigate } from "react-router";
import axios from "axios";
// import LoggedIn from "../LoggedIn"
import ToDo from "../Components/ToDo";

const ProtectedRoute = () => {
    let nav = useNavigate();

    const [auth, setAuth] = useState(null);

    useEffect(() => {
        // axios.defaults.withCredentials = true;
        axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:3000/authCheck`, })
            .then((res) => {
                console.warn("PROT ROUTE auth res", res);
                if (res.data.msg !== "proceed") {
                    nav("/");
                } else {
                    setAuth(res.data.found);
                }
            })
            .catch((err) => {
                console.log("useAuth err", err);
            }); }, []);
            return (
                <>
                {console.log("Protected Route hit ")}
        <ToDo auth = {auth} />
        </>
    
            );  
        };


export default ProtectedRoute