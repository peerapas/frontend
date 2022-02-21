import '../styles/styles.css';
import InterestElement from './interestElementComponent'

const Interest = () => {
    const data = [
        {
            id: 1,
            icon: "https://cdn-icons-png.flaticon.com/512/631/631180.png",
            topic: "Invesment"
        },
        {
            id: 2,
            icon: "https://cdn-icons.flaticon.com/png/512/2387/premium/2387311.png?token=exp=1644418998~hmac=4a87ba06a608daaec78903b463cae41d",
            topic: "Badminton"
        },
        {
            id: 3,
            icon: "https://cdn-icons-png.flaticon.com/512/244/244271.png",
            topic: "Weightlifting"
        },
        {
            id: 4,
            icon: "https://cdn-icons.flaticon.com/png/512/3330/premium/3330300.png?token=exp=1644419119~hmac=53b27670f51a00c448847aeb9f9d9266",
            topic: "Book Reading"
        }
    ]
    return (
        <div className="interest">
        <h3>My Interest</h3> 
        <div className="interest-box">
            {data.map((element) => {
                return <InterestElement key = {element.id} icon={element.icon} topic = {element.topic} />
            })}
        </div>
    </div>
    );
}

export default Interest