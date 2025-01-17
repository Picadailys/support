import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ErrorAlert from '../../components/alerts/Error';
import SuccessAlert from '../../components/alerts/Success';
import { View, ViewOff } from '@carbon/icons-react';
import { Link, useParams } from 'react-router-dom';

const Signup = () => {
    const { register, control, handleSubmit, formState: {errors}, watch } = useForm();
    const password = watch("password");
    const password2 = watch("password2");
    const [ InputPassword, setInputPassword ] = useState(true);
    const [ confirmInputPassword, setConfirmInputPassword ] = useState(true);
    const [ isDisabled, setIsDisabled ] = useState(false);
    const [ validationErrMsg, setValidationErrMsg ] = useState('');
    const [ successErrMsg, setSuccessErrMsg ] = useState('');
    const { user_id } = useParams();

    const signUp = (fields) => {
        console.log(fields);
        // const newData = {...fields};
        // setIsDisabled(true);
        // axios({
        //     method: "POST",
        //     url: `${API_URL}/auth/administrator/signup`,
        //     data: newData
        // })
        // .then((res) => {
        //     Cookies.set('verification_admin_user', JSON.stringify(newData), {
        //         expires: 3
        //     });
        //     setSuccessErrMsg(res.data.message);
        //     window.xuiAnimeStart('successAlert');
        //     setTimeout(() => {
        //         setSuccessErrMsg('Redirecting you...');
        //         setTimeout(() => {
        //             navigate('/verify');
        //         }, 3600);
        //     }, 2800);
        // }, (err) => {
        //     setIsDisabled(false);
        //     setValidationErrMsg(err.response.status === 422 ? err.response.data.data[0].msg : err.response.data.message);
        //     window.xuiAnimeStart('errorAlert');
        //     setTimeout(() => {
        //         window.xuiAnimeEnd('errorAlert');
        //     }, 2800);
        // })
    }
    return (
        <>
            <div>
                <h1 className='xui-font-sz-200'>Hello,</h1>
                <p className='xui-mt-half xui-font-sz-120 xui-font-w-600'>Kindly input your details to Sign up.</p>
            </div>
            <form className="xui-form xui-mt-2" onSubmit={handleSubmit(signUp)} autoComplete="off" noValidate>
                <div className="xui-form-box">
                    <label htmlFor="email">Email Address</label>
                    <input {...register('email', {required: 'This field is required',pattern: {value: /^\S+@\S+$/i, message: 'Invalid email address'}})} type="email" name="email" id="email" placeholder="xyz@picadailys.com" />
                    {errors.email && <span className="xui-form-error-msg">{errors.email.message}</span>}
                </div>
                <div className="xui-form-box">
                    <label htmlFor="password">Create Password</label>
                    <div className="xui-pos-relative">
                        <input type={InputPassword ? 'password' : 'text'} name="password" id="password" {...register('password', {required: 'This field is required', minLength: {value: 8, message: 'Password must be 8 characters and above'} })} placeholder="***************" />
                        <div onClick={() => setInputPassword(!InputPassword)} className="eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center">
                            {InputPassword ? <View size={20} /> : <ViewOff size={20} />}
                        </div>
                    </div>
                    {errors.password && <span className="xui-form-error-msg">{errors.password.message}</span>}
                </div>

                <div className="xui-form-box">
                    <label htmlFor="password2">Confirm Password</label>
                    <div className="xui-pos-relative">
                        <input type={confirmInputPassword ? 'password' : 'text'} name="password2" id="password2" {...register('password2', {required: 'This field is required', minLength: { value: 8, message: 'Password must be 8 characters and above'} })} placeholder="***************" />
                        <div onClick={() => setConfirmInputPassword(!confirmInputPassword)} className="eye-password xui-d-inline-flex xui-flex-ai-center xui-flex-jc-center">
                            {confirmInputPassword ? <View size={20} /> : <ViewOff size={20} />}
                        </div>
                    </div>
                    {errors.password2 && <span className="xui-form-error-msg">{errors.password2.message}</span>}
                    {!errors.password2 && password !== password2 && <span className="xui-form-error-msg">{`Password doesn't match`}</span>}
                </div>
                <div className="xui-form-box">
                    <button className="xui-btn xui-btn-block primary-bg-100 xui-bdr-rad-half xui-text-white " disabled={isDisabled}>Proceed</button>
                </div>
                <p className='xui-text-center xui-mt-1-half'>I already have an account. <Link to='/login' className='primary-color-100 xui-font-w-600 xui-text-dc-none'>LOGIN</Link></p>
            </form>
            <ErrorAlert name={`errorAlert`} message={validationErrMsg} />
            <SuccessAlert name={`successAlert`} message={successErrMsg} noIcon={true} />
        </>
    );
};

export default Signup;