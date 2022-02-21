import '../styles/styles.css';

const ProjectElement = (props) => {
    const {icon, topic, url} = props;
    return (
        <>
            <div className="interest-item">
                <img src={icon} alt="" width="50px" height="50px"/>
                <p>
                <a href={url}>{topic}</a>
                </p>
            </div>
        </>
    ) 
}

export default ProjectElement