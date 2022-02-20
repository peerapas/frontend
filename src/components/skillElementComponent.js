import '../styles/styles.css';

const SkillElement = (props) => {
    const {icon, topic, item} = props;
    return (
        <>
            <tr>
                <td>
                    <div className="skill-icon">
                        <img className="icon" src={icon} alt=""/>
                            <p>{topic}</p>
                        </div>                
                </td>
                <td className="td-item-text">{item}</td>
            </tr>
        </>
    ) 
}

export default SkillElement