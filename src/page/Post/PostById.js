import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {get} from '../../api/request'

const PostById = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const location = useLocation()

    const isShowTitle = new URLSearchParams(location.search).get('isShowTitle')

    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState({})

    useEffect(() => {
        setIsLoading(true)
        get(`posts/${id}`)
            .then((response) => {
                setPost(response)
            })
            .catch(() => {

            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])

    const replaceTitle = (text) =>{
        return isShowTitle === 'slice' ? `${text.slice(0, 20)}...` : text
    }

    if (isLoading) {
        return (
            <div>
                Данные загружаются...
            </div>
        )
    }

    return (
        <div className="post-by-id-wrap">
            <div
                className="back-button"
                onClick={() => navigate('/posts')}
            >
                Назад
            </div>

            <div className="post-by-id-item">
                <h1>
                    {replaceTitle(post?.title)}
                </h1>
                <div className='line'/>
                <p>
                    {post?.body}
                </p>
            </div>

        </div>
    );
};

export default PostById;