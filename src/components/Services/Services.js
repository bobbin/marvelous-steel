import React, { Component } from 'react';
import Service from '../Service/Service';


export default class Services extends React.Component {
    render() {
        return (
            <div className="posts" name="service">
                <div name="transformacion" className="child">
                    <Service
                image="images/1.jpg"
                h3="Transformación digital"
                p="Ofrecemos estrategias de transformación digital armonizando procesos y personas. Asesoramos en los procesos de reinvención de las organizaciones implantando las tecnologías adecuadas en cada caso. Apoyamos a nuestros clientes en el uso de tecnologías de gestión para la captura, almacenamiento y proceso de datos."
                />
                </div>
                
                <div name="desarrollo" className="child">
                    <Service
                image="images/2.jpg"
                h3="Desarrollo de 
                soluciones de Software"
                p="Desarrollamos soluciones personalizadas de software mediante el uso de últimas tecnologías de la información que posibilitan integrar, mantener y escalar recursos de TI. 
                Utilizamos metodologías ágiles basadas en Devops.  
                De esta forma, podemos ofrecer un servicio más dinámico y más adecuado a los nuevos tiempos y los mercados más competitivos."
                />
                </div>


                <div className="background-service">
                    
                <div name="cloud" className="child">
                        <Service
                    h3="Servicios Cloud"
                    p="Somos expertos en nubes públicas, privadas e híbridas.
                    Asesoramos en la evolución a la nube optimizando la inversión en esta tecnología. Analizamos las posibles soluciones para determinar las mejores opciones que ofrece la plataforma y así, diseñar a medida el modelo más adecuado según sean las necesidades de 
                    conectividad, seguridad y gestión."
                    />
                    </div>

                    <div name="iot" className="child">
                        <Service
                    h3="Servicios IoT
                    (Internet of things)"
                    p="Nuestro servicio de IoT (Internet of Things) permite la interconexión de diferentes elementos con cualquier otro a su alrededor logrando que los diferentes dispositivos se comuniquen entre si. Desarrollamos  tecnologías y protocolos de comunicación para que los sistemas interactúen con elementos de la vida real aumentando la
                    independencia, la automatización y la generación de datos."
                    />
                    </div>
                </div>
                
                    <div name="learning" className="child">
                        <Service
                    image="images/5.jpg"
                    h3="Desarrollo de soluciones 
                    IA - Machine Learning"
                    p="El aprendizaje automático permite que los ordenadores aprendan automáticamente a partir de datos e información. Esto puede utilizarse para mejorar diversas actividades de servicios y negocios. Con nuestra colaboración, las empresas pueden generar rápidamente modelos de aprendizaje automático, combinarlos con reglas de negocio y ponerlos en funcionamiento para la automatización impulsada por la IA."
                    />
                    </div>

                    <div name="formacion" className="child">
                        <Service
                    image="images/6.jpg"
                    h3="Formación Tecnológica 
                    a empresas"
                    p="Ofrecemos a las empresas soluciones de enseñanza o capacitación a distancia hechas a su medida además de una plataforma digital propia. 
                    Creamos una solución integral llave en mano creando un repositorio accesible a empleados o socios comerciales. Facilitamos procesos automatizados sin límite de usuarios o distancias y asi, minimizamos los costes a la organización."
                    />
                    </div>
                

            </div>
        );
    }
}

