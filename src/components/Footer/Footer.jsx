import {Link} from "react-router-dom"
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="seccionFooter seccionFooter1">
                <p className="tituloFooter">NAVEGACION</p>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/category/tortas">Tortas</Link></li>
                    <li><Link to="/category/macarons">Macarons</Link></li>
                    <li><Link to="/category/cookies">Cokies y Alfajores</Link></li>
                    <li><Link to="/category/petitsFours">Petits Fours</Link></li>
                </ul>
            </div>
            <div className="seccionFooter seccionFooter2">
                <div className="contacto">
                    <p className="tituloFooter">REDES SOCIALES</p>
                    <div className="redesSociales">   
                        <img src="/img/redesSociales/facebook.png" alt="facebook"/>
                        <img src="/img/redesSociales/instagram.png" alt="instagram"/>
                        <img src="/img/redesSociales/whatsapp.png" alt="whatsapp"/>
                    </div>
                </div>
                <div className="suscribite">
                    <label htmlFor="email" className="tituloFooter">SUSCRIBITE</label>
                    <div className="suscripcionMail">
                        <input type="email" id="name" name="email" placeholder="@ Ingrese su mail aquí..."/>
                        <button className="btnFooter" type="submit" name="enviar">Enviar</button>
                    </div>
                </div>
            </div>
            <div className="seccionFooter seccionFooter3">
                <div><p className="tituloFooter">MEDIOS DE PAGO</p></div>
                <div className="medios-pago">
                    <img src="/img/mediosPago/visa.png" alt="visa"/>
                    <img src="/img/mediosPago/mastercard.png" alt="mastercard"/>
                    <img src="/img/mediosPago/american.png" alt="american express"/>
                    <img src="/img/mediosPago/cabal.png" alt="cabal"/>
                    <img src="/img/mediosPago/naranja.png" alt="naranja"/>
                    <img src="/img/mediosPago/paypal.png" alt="paypal"/>
                    <img src="/img/mediosPago/mercadopago.png" alt="mercadopago"/>
                    <img src="/img/mediosPago/modo.png" alt="modo"/>
                </div>
            </div>
            <div className="seccionFooter seccionFooter4">
                <p className="tituloFooter">UBICACION</p>
                <div className="ubicacion">    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8387045038335!2d-58.696864117744845!3d-34.62497336714524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbe54fa3c12d7%3A0xb78eb2c6c81929fc!2sMart%C3%ADn%20Fierro%203217%2C%20B1715BRG%20Villa%20Udaondo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1686706611067!5m2!1ses-419!2sar" width="250" height="250" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    ) 
}

export default Footer