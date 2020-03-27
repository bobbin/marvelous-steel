import React, { Component } from 'react';

export default class Contact extends React.Component {
    render() {
        return (
<section className="contact" name="formulario">
    <div className="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1960.0566978176237!2d-3.7470691869240786!3d40.3689838844398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4189d5065ddd7d%3A0xcc686f0544033be6!2sCalle%20del%20Cidro%2C%203%2C%2028044%20Madrid!5e0!3m2!1ses!2ses!4v1584613218107!5m2!1ses!2ses" width="100%" height="100%"></iframe>
    </div>
    <div className="direction">
            <div className="dates">
                <div className="date">
                    <img src="images/map.svg"></img>
                    <p>C/ Cidro nº 3, 3º 2 28044 Madrid</p>
                </div>
                <div className="date">
                    <img src="images/tlf.svg"></img>
                    <p>91 000 000</p>
                </div>
                <div className="date">
                    <img src="images/mail.svg"></img>
                    <p>info@apptiva.es</p>
                </div>
            </div>
            <form name="contact" netlify-honeypot="bot-field" data-netlify="true" method="post" action="thank-you" className="form">

                            <div className="item1">
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="text" id="name" name="name" placeholder="Nombre (requerido)" required/>
                            </div>
                            <div className="item2">
                                <input type="email" id="mail" name="email" placeholder="Email (requerido)" required />
                            </div>

                            <div className="item3">
                                <input type="text" id="tlf" name="telephosne" placeholder="Teléfono" />
                            </div>
                            <div className="form_2 item4">
                                <textarea id="msg" name="message" placeholder="Mensaje"></textarea>
                            </div>


                            <div className="button item5">
                            <button type="submit" value="Submit">Envíar</button>
                            </div>
                            <div className="item6">
                            <input type="checkbox" name="condiciones" id="acepto" required/><label htmlFor="acepto" >He leído y acepto la <a href="/privacy/">política de privacidad</a></label>
                            </div>

            </form>
        </div>
        
</section>
        );
    }
}

