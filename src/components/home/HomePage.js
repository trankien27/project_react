import { useSelector } from 'react-redux';
import videoHomepage from '../../assets/homepage.mp4'

const HomePage = (props) => {
<<<<<<< HEAD
    const account = useSelector(state => state.user.account);
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    console.log(isAuthenticated)
=======
    const account = useSelector(state => state.user.account)
    // console.log(account)
>>>>>>> 1332b79b61fc95b43e4b0af937ac07c4cc8ad6e5
    return (
        <div className="homepage-container">
            <video loop muted autoPlay>
                <source
                    src={videoHomepage}
                    type="video/mp4"
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Make forms
                    worth filling out</div>
                <div className='content-1'>Get more data—like signups, feedback, and anything else—with forms designed to be <span>refreshingly different</span></div>
                <div className='btn-1'><button>Get started—it's free</button></div>
            </div>

        </div>
    )
}
export default HomePage;