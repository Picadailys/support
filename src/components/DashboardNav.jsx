import { Link } from 'react-router-dom';

const DashboardNav = () => {
    return (
        <div className='xui-py-2 xui-lg-py-4 xui-lg-d-block xui-d-none xui-text-center'>
            <Link to="/" className="xui-d-inline-block"><img src="/logo.png" className="xui-img-50 " /></Link>
        </div>
    );
};

export default DashboardNav;