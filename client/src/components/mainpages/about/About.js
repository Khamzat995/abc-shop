import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import odejda from './Images/odejda.jpg';
import family from './Images/family.jpg';


function About() {
  return (
    <main>
      <img src={odejda} style={{paddingTop:"20px", marginBottom:"20px", width: "100%"}}  alt='#'/>
      <Container >
        <Row style={{display: "flex", flexDirection: "column", paddingBottom: "30px"}}>
          <Col style={{flexBasis: "50%", marginBottom:"20px"}}>
            <div>
              <h2>О нас</h2>
            </div>
            <div style={{paddingRight: "20px", paddingTop: "5px"}}>
            <p style={{textIndent: "1.5em", textAlign: "justify"}}>
              Дорогие покупатели и посетители нашего интернет-магазина!<br/>
              Мы рады представить Вам товары популярных турецких и других зарубежных брендов
              бытовой техники, текстиля, одежды и аксессуаров. Наши цены Вас приятно удивят.
              Мы работаем напрямую от производителей, либо их представителей в Стамбуле.
              Здесь Вы можете приобрести качественную одежду, обувь, домашний текстиль, кожанные изделия и другие товары
              по низкой цене и мы доставим покупку к Вам домой. </p>
              <p style={{textIndent: "1.5em", textAlign: "justify"}}>Дорогие друзья!
              Мы всегда делаем выгодные персональные предложения нашим постоянным покупателям.
              Еженедельно проводим акции и распродажи определенных категорий товаров, постоянно действуют скидки, бесплатные подарки и многое другое.
                Мы открыты новым креативным идеям удивлять и радовать потребителей выгодными и интересными предложениями.<br/></p>
              <p style={{textIndent: "1.5em", textAlign: "justify"}}>Все интересующие Вас вопросы можете задавать по телефону, WhatsApp, Telegram или электронной почте.</p>
              <h3 style={{textIndent: "1.5em", textAlign: "justify", marginTop: "5px"}}>Tел: +90 0535-743-18-85</h3>
              <h3 style={{textIndent: "1.5em", textAlign: "justify"}}>WhatsApp: +7 938 997-65‐19 </h3>
            </div>
          </Col>
          <Col style={{flexBasis: "50%",}}>
            <img src={family} width="100%" alt='картинка'/>
          </Col>
        </Row>
      </Container>
      <div style={{marginTop: "10px", paddingBottom: "40px", height: "40px"}}>
        <p style={{textAlign: "center"}}>
          © 2021, все права защищены.
        </p>
      </div>
    </main>
  );
}



export default About;