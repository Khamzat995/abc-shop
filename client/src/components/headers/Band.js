import React from 'react';
import whatsapp from './icon/whatsapp.png';
import flagOne from './icon/flagOne.jpg'
import mailRu from './icon/mailRu.png'
import telegram from './icon/telegram.png'
import instagramNew from './icon/instagramNew.jpg'

function Band() {
  return (
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
  );
}

export default Band;