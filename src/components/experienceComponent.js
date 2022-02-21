import '../styles/styles.css';
import ExperienceElement from './experienceElementComponent';

const Experience =() => {
    const data = [
        {
            start:"2021",
            end:"Present",
            topic: "Banana Software",
            location: "Chiang Mai"
        },
        {
            start:"2018",
            end:"2021",
            topic: "Computer Engineering",
            location: "Chiang Mai University"
        }
    ]
    return(
        <div className="exprience">
            <h3>My Experience</h3>
            <table  className="experience-table">
                <tbody>
                    {data.map((element) => {
                        return <ExperienceElement start={element.start} end={element.end} topic={element.topic} location={element.location} />
                    })}
                </tbody>
            </table>
        </div>
    ); 
};

export default Experience;


