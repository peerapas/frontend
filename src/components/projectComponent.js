import '../styles/styles.css';

const Projects = () => {
    return(
        <div className="project">
        <h3>Projects</h3> 
        <div className="interest-box">
            <div className="interest-item">
                <img src="../../images/prompt.png" alt="" width="50px" height="50px"/>
                <p>
                <a href="https://www-dev.prompthealthcenter.com/">Prompt Health Center</a>
                </p>
            </div>
            <div className="interest-item">
                <img src="../../images/coe.png" alt="" width="50px" height="50px"/>
                <p>
                    <a href="https://eng-ex.system-on.cloud/manage/authen/">COE Exam Review System</a>
                </p>
            </div>
            <div className="interest-item">
                <img src="https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/215887178_2870284496618995_6165720907653303569_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHXRO1iq6o32Dd538nEP2dMrdiyCG_I7tut2LIIb8ju2zHGhIIxcOb94bYA2yZvbx9l_qNMVfr9wtc0T-dio2AF&_nc_ohc=QpL_pMHeZg8AX_wxebn&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT_rmKURgjg6ERJ_RiLxtgGPJjBdwhe2wlAufbuzRowz_g&oe=6208D2F7" alt=""  width="50px" height="50px"/>
                <p>
                    <a href="https://irdcmu-dev.system-on.cloud/ird-dev/">IRD CMU</a>
                </p>
            </div>
            <div className="interest-item">
                <img src="../../images/crcos.png" alt="" width="50px" height="50px"/>
                <p>
                    <a href="https://crcos-project.system-on.cloud/authen">CRCOS</a>
                </p>
            </div>
        </div>
    </div>
    );
}

export default  Projects