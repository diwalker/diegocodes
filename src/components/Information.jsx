import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import "../styles/components/information.sass";

const information = () => {
    return <section id="information">
        <div className='info-card'>
            <AiFillPhone id="phone-icon" />
            <div>
                <h3>Telefone / Whatsapp</h3>
                <p><a href="https://wa.me/5587988370228" target="_blank">(87) 988370228</a></p>
            </div>
        </div>
        <div className='info-card'>
            <AiOutlineMail id="email-icon" />
            <div>
                <h3>Email</h3>
                <p>dwalkerserver@gmail.com</p>
            </div>
        </div>
        <div className='info-card'>
            <AiFillEnvironment id="pin-icon" />
            <div>
                <h3>Localização</h3>
                <p>Salgueiro - PE</p>
            </div>
        </div>
    </section>

};

export default information