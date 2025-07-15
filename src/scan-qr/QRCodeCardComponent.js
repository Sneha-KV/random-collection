import React from 'react';
// import qrImage from '../media/image-qr-code.png'

const QRCodeCardComponent = () => {
 const qrImage = new URL('../media/image-qr-code.png', import.meta.url);

  return (
    <div className='qr-background'>
    <div className='qr-container'>
      <img src={qrImage} className='qr-image'/>
      <div className='qr-details'>
        <h2>Building a vertical card component</h2>
        <p className='qr-subheading'>
            Card contains an image and some text that is displayed under a header
        </p>
      </div>

    </div>
    </div>
  )
}

export default QRCodeCardComponent
