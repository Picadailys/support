/* eslint-disable react/prop-types */
import Logo3 from "../assets/images/logo3.png"
const Auth = ({ children }) => {
    return (
        <>
            <section className="onboarding-main-section xui-pos-relative">
                <div className="auth-section">
                    {children}
                </div>
                <img src={Logo3} className="xui-img-800" />
            </section>
        </>
    )
};

export default Auth;