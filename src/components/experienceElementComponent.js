import '../styles/styles.css';

const ExperienceElement = (props) => {
    const {start, end, topic, location} = props;
    return (
        <>
            <tr className="experience-item">
                <td>{start}-{end}</td>
                <td>{topic}, {location}</td>
            </tr>
        </>
    ) 
}

export default ExperienceElement