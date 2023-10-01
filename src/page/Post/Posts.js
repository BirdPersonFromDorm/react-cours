import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/slice/posts";
import {get} from '../../api/request'
import {Link} from "react-router-dom";
import {Button, Rate, Spin} from 'antd'

const Posts = () => {

    const [value, setValue] = useState(3);

    const dispatch = useDispatch();

    const {posts, isLoading, error} = useSelector((state) => state.posts);

    const onFetchData = () => {
        dispatch(fetchData())
    }

    console.log(value)

    if (isLoading) {
        return <>
            <Spin style={{width: "100%", height: 100, margin: '0 auto'}}/>
        </>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="post-wrap">
            <Rate
                onChange={setValue}
                value={value}
            />
            <Button
                type="primary"
                onClick={onFetchData}
                style={{
                    marginBottom: 20,
                    backgroundColor: '#79e576'
                }}
            >
                Получить данные
            </Button>
            <div className="post-wrap-list">
                {
                    posts?.map(item =>
                        <Link to={`/app/posts/${item?.id}?isShowTitle=${item.title.length < 20 ? 'noSlice' : 'slice'}`}>
                            <div className="post-item">
                                <h1>
                                    {item.title}
                                </h1>
                                <div className="post-line"/>
                                <p>
                                    {item.body}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Posts;