import ChatEarea from "./ChatEarea";
import FriendsArea from "./FriendsArea";
import { useNavigate } from "react-router";
import useFetch from "../useFetch";
import { useLayoutEffect, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import queryString from "query-string"

const Home = (props) => {
    const navigation = useNavigate();
    const {data, loading, error} = useFetch('/api/isAuth');
    const [userData, setuserData] = useState({});
    // const [searchParams, setSearchParams] = useSearchParams();
    const queryParams = queryString.parse(window.location.search)
    const id = window.location.href.split('/')[3];


    console.log(id);

    // console.log(props.match.params.id)
    if (data.isAuth !== undefined && !data.isAuth) window.location.href = "http://localhost:3000/login";
    const getUserData = () => {
        axios.get('/api/user').then((res) => { setuserData(res.data); })
    }
    useLayoutEffect(() => { getUserData(); }, [])
    return (
        <div className="d-flex">
            {data.isAuth && <FriendsArea user={userData}/>}
            {data.isAuth && <ChatEarea />}
            {!data.isAuth && <div className="w-100 h-100 d-flex align-items-center justify-content-center position-absolute">Is Loading...</div>}
        </div>
    )
}

export default Home;