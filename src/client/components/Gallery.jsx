import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';

const images = require.context('../assets/images', true);
const imageList = images.keys().map(image => images(image));

const Gallery = () => {
  const [activeImg,setActiveImg] = useState(false);
  
  const handleClose = () => setActiveImg(false);
  const handleShow = (img) => setActiveImg(img);

  return (
    <>
      <div className="gallery">
        {
          imageList?.map((img,index)=><SingleImg path={img} handleShow={handleShow} key={index} text={"Image description"}/> )
        }
      </div>
      <Modal show={activeImg} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="current-img">
            <img src={activeImg} alt="" className=''/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

const SingleImg = ({path,text,handleShow})=>{
    return <div className="gallery-item">
  <img src={path} alt={text} onClick={()=>handleShow(path)}/>
</div>

}
export default Gallery
