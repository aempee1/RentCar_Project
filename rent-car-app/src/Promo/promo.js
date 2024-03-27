import {useEffect,useState} from 'react';
import './promo.css';


function Promo() {
    const btns = {"1":"","2":"","3":"","4":"","5":"","6":""} 
  const [select,setSelect] = useState(btns)
  var handleClick = (i) =>{
  
  let id = i.target.id ;
  
  setSelect({...btns,[id]:"active"})
  };

  useEffect(() => {
    setSelect({...btns,[1]:"active"})
    console.log(select)

  }, [] );

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        className="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <link
        href="http://fonts.cdnfonts.com/css/bukhari-script"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      <section className="Home">
        <video
          className={`Video-slider ${select[1]}`}
          src="1.mp4"
          autoPlay
          muted
          loop
        ></video>
        <video className={`Video-slider ${select[2]}`} src="2.mp4" autoPlay muted loop></video>
        <video className={`Video-slider ${select[3]}`} src="3.mp4" autoPlay muted loop></video>
        <video className={`Video-slider ${select[4]}`} src="4.mp4" autoPlay muted loop></video>
        <video className={`Video-slider ${select[5]}`} src="5.mp4" autoPlay muted loop></video>
        <video className={`Video-slider ${select[6]}`} src="6.mp4" autoPlay muted loop></video>
        <div className={`Content ${select[1]}`}>
          <h1>
            Sunset
            <br />
            beach
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className={`Content ${select[2]}`}>
          <h1>
            Hid
            <br />
            River
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className={`Content ${select[3]}`}>
          <h1>
            Mild
            <br />
            Forest
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className={`Content ${select[4]}`}>
          <h1>
            Mazed
            <br />
            Fall
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className={`Content ${select[5]}`}>
          <h1>
            Sand
            <br />
            Bay
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className={`Content ${select[6]}`}>
          <h1>
            End
            <br />
            Less
          </h1>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <a href="/form">Rent Now</a>
        </div>
        <div className="media-icons">
          <a href="https://web.facebook.com/LIPE-RETRO-105513872095385">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/lipe_retro_eie/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/punboong">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className="slider-navigation">
          <div onClick={handleClick} id={1} className={`nav-btn ${select[1]}`}></div>
          <div onClick={handleClick} id={2} className={`nav-btn ${select[2]}`}></div>
          <div onClick={handleClick} id={3} className={`nav-btn ${select[3]}`}></div>
          <div onClick={handleClick} id={4} className={`nav-btn ${select[4]}`}></div>
          <div onClick={handleClick} id={5} className={`nav-btn ${select[5]}`}></div>
          <div onClick={handleClick} id={6} className={`nav-btn ${select[6]}`}></div>
        </div>
      </section>
    </>
  );
}

export default Promo;