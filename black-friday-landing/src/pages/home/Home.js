import * as S from './style.js';
import React, { useState, useEffect } from 'react';

const imgsFolder = [
  {nameFile: 'img4.jpg',
  desc: 'Promoções com até 90% de descontos!'},

  {nameFile: 'img5.jpg',
  desc: 'Não perca as oportunidades!'},

  {nameFile: 'img7.jpg',
  desc: 'Inscreva-se agora'}
];


// HOME render functiomn

function Home() {
  const [ slide, setSlide ] = useState(0)
  const [ userEmail, setUserEmail ] = useState('')
  let liCounter = 0 

  function handleSubmit(){
    let userData = [{'useremail': userEmail}]
    localStorage.setItem('user', JSON.stringify(userData))
  };

  function handleSlideClick(e){
    setSlide(parseInt(e.target.id))
    return 
  };

  function handleEmailChange(e){
    setUserEmail(e.target.value)
  };

  useEffect(() => {
    let interval = setInterval(() => {
      const nextSlide = () => setSlide((prev) => (slide === imgsFolder.length - 1 ? 0 : prev + 1));
      nextSlide();
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <S.contente className="App">
      <S.topNavagation className="Top-navagation">
        <S.companyNameTop>Hiring Coder Store</S.companyNameTop>
        <S.linksTopNav>
          <S.Links to='#'>Home</S.Links>
          <S.Links to='#'>Loja</S.Links>
          <S.Links to='#'>Contato</S.Links>
        </S.linksTopNav>
      </S.topNavagation>
      <S.description className="Description">
        <S.img1 src='/img/img8.jpg' alt="Imagem de uma placa de desconto"/>

      </S.description>
      <S.reinforcement className="Reinforcement">
        <S.image>
          <S.blackImage src= '/img/img_black_friday.jpg' alt='' ></S.blackImage>
        </S.image>
        <S.imageContent>
          <S.image>
            <S.blackImage src= '/img/img_blackbox.jpg' alt='' ></S.blackImage>
          </S.image>
          <S.image>
            <S.blackImage src= '/img/img6.jpg' alt='' ></S.blackImage>
          </S.image>
          
        </S.imageContent>
      </S.reinforcement>
      <S.benefits className="Benefits">
        <S.image3>
          <S.productImage id="img-product" src= {'/img/products/' + imgsFolder[slide].nameFile} alt=''></S.productImage>
          <S.figCaption>{imgsFolder[slide].desc}</S.figCaption>
          <S.ulProduct>
          <S.liDiv>
            {
              imgsFolder.map(img => {
                let oneDot = <S.liProduct data-index={liCounter} id={liCounter} onClick= {handleSlideClick} style= {{background: liCounter === slide ? '#000' : '#bdbdd5'}}></S.liProduct>
                liCounter ++
                return(
                  oneDot
                ) 
                
              })
            }
          </S.liDiv>
          </S.ulProduct>
        </S.image3>        
      </S.benefits>
      <S.callAction className="Call-action">
          <S.Textsign2 className='text1'><strong>RECEBA OS MELHORES DESCONTOS NA BLACK FRIDAY!!</strong></S.Textsign2>
          <S.Textsign className='text2'>Cadastre-se agora e receba as promoções antes de TODO mundo!</S.Textsign>
          <S.container>
            <S.inputEmail className="emailInput" placeholder="e-mail" value={userEmail} onClick={ handleEmailChange }/>
            <S.submitButton type='button' onClick={handleSubmit}>Inscrever-se</S.submitButton>
          </S.container>
      </S.callAction>
      <S.footer>
        <S.textFooter>Desenvolvido por Yuri M. R. Quintanilha</S.textFooter> 
        <S.linksBotNav>
          <S.LinksBotton to={{ pathname: 'https://github.com/Yuri-MRQ' }} target='_blank'><span class="iconify" data-icon="logos-github-icon" data-inline="false"></span></S.LinksBotton>
          <S.LinksBotton to={{ pathname: 'https://www.linkedin.com/in/yuri-quintanilha-b4b41918a/'}}  target='_blank'><span class="iconify" data-icon="brandico:linkedin-rect" data-inline="false"></span></S.LinksBotton>
        </S.linksBotNav>
        

      </S.footer>
    </S.contente>
    
  );
}

export default Home;
