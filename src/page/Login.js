import React from 'react';
import {Button, Form, Input, message, Select, Switch} from "antd";
import CustomCheckbox from "../components/CustomCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {onLogin, setLoginData} from "../redux/slice/auth";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()

    const {user, allUsers} = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const onFinish = (value) => {

        console.log(value)
        let find = allUsers.find((item) => item.login === value.login && item.password === value.password);

        if (find){
            dispatch(setLoginData(find))
            navigate('/app/posts')
        } else {
            message.error('Пользователь не найден')
        }

    }

    return (
        <div className="login-wrap">
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                style={{
                    width: '100%'
                }}
            >

                <Form.Item
                    style={{
                        width: '100%'
                    }}
                    name="login"
                    rules={[{required: true}]}
                >
                    <Input
                        className="custom-input"
                        placeholder="Login"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{required: true}]}
                >
                    <Input
                        placeholder="Password"
                        type="Password"
                        className="custom-input"
                    />
                </Form.Item>


                <Button
                    style={{
                        width: '100%'
                    }}
                    type="primary"
                    htmlType="submit"
                >
                    Войти
                </Button>


            </Form>
        </div>
    );
};

export default Login;