import React, { useState, useEffect } from "react";
import axios from "axios";
import { List } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import "../Styles/Home.css";
const Home = () => {
    const [data, setdata] = useState([]);
    const [page, setpage] = useState(20);
    const [hasmore, sethasmore] = useState(true);
    const getUserData = () => {
        fetch(`https://randomuser.me/api/?results=${page}`)
            .then((res) => res.json())
            .then((userdata) => {
                console.log(userdata);
                setdata(userdata.results);
            });
    };

    useEffect(() => {
        getUserData();
    }, [page]);

    const fetchmoredata = () => {

        if (data.length < 500) {
            setTimeout(() => {
                setpage((prevState) => prevState + 10);
            }, 500);
        }
        else {
            sethasmore(false)
        }

    }
    console.log(page);
    return (
        <div className="main">

            <h3>All Users</h3>
            <InfiniteScroll dataLength={data.length} next={fetchmoredata} hasMore={hasmore} loading={<p>loading...</p>} endmessage={"You are All set"} height={400}>
                {data.map((item) => {
                    return (
                        <ul class="user-list">
                            <li>
                                <img src={item.picture.medium} alt="user" />
                                <h3>{item.name.first}</h3>
                            </li>
                        </ul>
                    );
                })}
            </InfiniteScroll>
        </div>
    );
};

export default Home
