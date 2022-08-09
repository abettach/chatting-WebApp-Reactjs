import ChatEarea from "./ChatEarea";
import FriendsArea from "./FriendsArea";
import { useNavigate } from "react-router";
import useFetch from "../useFetch";
import { useLayoutEffect, useEffect } from "react";
import axios from "axios";
const Home = () => {
    const navigation = useNavigate();
    const {data, loading, error} = useFetch('/api/isAuth');
    console.log(data.isAuth);
    useEffect(() => {
        axios.get("/api/isAuth").then((res) => { if (!res.data.isAuth) window.location.href = "http://localhost:3000/login"})
        }, []);
    if (loading)
        return (<div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute">Is Loading...</div>)
    if (error)
        return (<div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute">{error}</div>)
    return (
        <div className="d-flex">
            <FriendsArea />
            <ChatEarea />
        </div>
    )
}

export default Home;