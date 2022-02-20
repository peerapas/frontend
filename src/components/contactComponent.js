import '../styles/styles.css';

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact Me</h3>
            <table className="skills-table">
                <tbody>
                    <tr>
                        <td>
                            <div className="skill-icon">
                                <img className="icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111819.png" alt=""/>
                            </div>                
                        </td>
                        <td><a href="https://twitter.com/wofjwklrgjhwefk">Twitter</a></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="skill-icon">
                                <img className="icon" src="https://cdn-icons.flaticon.com/png/512/739/premium/739237.png?token=exp=1644419652~hmac=c8a87d88c178d5a62ed7ed402e2a5f6c" alt=""/>
                            </div>
                        </td>
                        <td><a href="https://www.facebook.com/xekrar/">Facebook</a></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="skill-icon">
                                <img className="icon" src="https://cdn-icons.flaticon.com/png/512/542/premium/542638.png?token=exp=1644419692~hmac=649ba8b4def8d3cd3e4d6917a328e7e4" alt=""/>
                            </div>
                        </td>
                        <td>peerapas.sakolwasan@gmail.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
        
}

export default Contact