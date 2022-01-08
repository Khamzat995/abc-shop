import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import odejda from './Images/odejda.jpg';
import family from './Images/family.jpg';
import whatsapp from '../../headers/icon/whatsapp.png';
import telegram from '../../headers/icon/telegram.png';
import flagOne from '../../headers/icon/flagOne.jpg';
import mailRu from '../../headers/icon/mailRu.png';
import instagramNew from '../../headers/icon/instagramNew.jpg';


function About() {
  return (
    <main>
      <img src={odejda} style={{paddingTop:"30px", marginBottom:"20px", width: "100%"}}  alt='#'/>
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

              <div className='band'>
                <ul >
                  <li >
                    <img className="WhatsApp" src={whatsapp} alt='icons' style={{ marginRight:'5px'}}/>
                    <img src={telegram}  alt='icons' style={{ marginRight:'10px'}}/>
                    <p>+7 938 997-65‐19 </p>
                  </li>
                  <li  >
                    <img src={flagOne}  alt='icons' style={{marginLeft:'10px', marginRight:'10px'}}/>
                    <p>+90 0535-743-18-85 </p>
                  </li>
                  <li >
                    <img src={mailRu}  alt='icons' style={{marginLeft:'10px', marginRight:'10px'}}/>
                    <p>zura.azersaeva@mail.ru</p>
                  </li>
                  <li >
                    <img src={instagramNew} alt='icons' style={{marginLeft:'10px', marginRight:'10px'}}/>
                    <p>modern_shop_istanbul</p>
                  </li>
                </ul>
              </div>

            </div>

          </Col>
          <Col style={{flexBasis: "50%",}}>
            <img src={family} width="100%" alt='картинка'/>
          </Col>
        </Row>
      </Container>
    </main>
  );
}



export default About;