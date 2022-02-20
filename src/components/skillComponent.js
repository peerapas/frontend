import '../styles/styles.css';
import SkillElement from './skillElementComponent';

const Skills = () => {
    const data = [
        {
            id: 1,
            icon: "https://cdn-icons-png.flaticon.com/512/159/159252.png",
            topic: "Database",
            item: "MySQL"
        },
        {
            id: 2,
            icon: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
            topic: "Programming",
            item: "PHP, JavaScript"
        },
        {
            id: 3,
            icon: "https://cdn-icons-png.flaticon.com/512/1336/1336494.png",
            topic: "Framework & Library",
            item: "Slim PHP, ExpressJS"
        },
        {
            id: 4,
            icon: "https://cdn-icons.flaticon.com/png/512/5949/premium/5949994.png?token=exp=1644418662~hmac=dfeb1de1e837c98c4d90811d323fc259",
            topic: "Others",
            item: "Git, API & Microservices, English, Ability to learn"
        }
        
    ]
    return (
        <div className="skills">
            <h3>My Skills</h3>
            
            <table className="skills-table">
                <tbody>
                    {data.map((element) => {
                        return <SkillElement key={element.id} icon={element.icon} topic={element.topic} item={element.item} />
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Skills       