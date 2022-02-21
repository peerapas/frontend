import '../styles/styles.css';
import ProjectElement from './projectElementComponent';

const Projects = () => {
    const data = [
        {
            id: 1,
            icon: "../../images/prompt.png",
            topic: "Prompt Health Center",
            url: "https://www-dev.prompthealthcenter.com/"
            
        },
        {
            id: 2,
            icon: "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/215887178_2870284496618995_6165720907653303569_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHXRO1iq6o32Dd538nEP2dMrdiyCG_I7tut2LIIb8ju2zHGhIIxcOb94bYA2yZvbx9l_qNMVfr9wtc0T-dio2AF&_nc_ohc=QpL_pMHeZg8AX_wxebn&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT_rmKURgjg6ERJ_RiLxtgGPJjBdwhe2wlAufbuzRowz_g&oe=6208D2F7",
            topic: "IRD CMU",
            url: "https://irdcmu-dev.system-on.cloud/ird-dev/"
            
        },
        {
            id: 3,
            icon: "../../images/coe.png",
            topic: "COE Exam Review System",
            url: "https://eng-ex.system-on.cloud/manage/authen/"
            
        },
        {
            id: 4,
            icon: "../../images/crcos.png",
            topic: "CRCOS",
            url: "https://crcos-project.system-on.cloud/authen"
            
        }
    ]
    return(
        <div className="project">
        <h3>Projects</h3> 
        <div className="interest-box">
            {data.map((element) => {
                return <ProjectElement key={element.id} icon={element.icon} topic={element.topic} url={element.url}/>
            })}
        </div>
    </div>
    );
}

export default  Projects