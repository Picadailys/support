import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

/* eslint-disable react/prop-types */
const Auth = ({ children }) => {
    return (
        <>
            <section className="onboarding-main-section xui-pos-relative">
                <div className="xui-text-center xui-lg-d-block xui-d-none xui-mb-3">
                    <Link to='/' className="xui-d-inline-block xui-mb-half">
                        <img src={Logo} className="xui-img-70" />
                    </Link>
                </div>
                {children}
            </section>
        </>
    )
};

export default Auth;