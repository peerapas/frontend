import '../styles/styles.css';

const Interest = () => {
    return (
        <div className="interest">
        <h3>My Interest</h3> 
        <div className="interest-box">
            <div className="interest-item">
                <img src="https://cdn-icons-png.flaticon.com/512/631/631180.png" alt="" className="icon"/>
                <p>Invesment</p>
            </div>
            <div className="interest-item">
                <img src="https://cdn-icons.flaticon.com/png/512/2387/premium/2387311.png?token=exp=1644418998~hmac=4a87ba06a608daaec78903b463cae41d" alt="" className="icon"/>
                <p>Badminton</p>
            </div>
            <div className="interest-item">
                <img src="https://cdn-icons-png.flaticon.com/512/244/244271.png" alt="" className="icon"/>
                <p>Weightlifting</p>
            </div>
            <div className="interest-item">
                <img src="https://cdn-icons.flaticon.com/png/512/3330/premium/3330300.png?token=exp=1644419119~hmac=53b27670f51a00c448847aeb9f9d9266" alt="" className="icon"/>
                <p>Book Reading</p>
            </div>
        </div>
    </div>
    );
}

export default Interest