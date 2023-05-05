import  styled  from 'styled-components';
import bg from '../../assets/bg.png';

export const StyledpoliticaPage = styled.main`

  .sem_header {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
  }
  
.sem_header_image{
    margin-right: 10rem;
    width: 150px;
    height: 150px;

}


.sem_header_title{
    padding-left: 10rem;

}
  
  .title1 {
    margin-top: 3vh;
    margin-bottom: 3vh;
    margin-left: 4vh;
    color: #CDB587;
    opacity: 1;
    z-index: 20;
  }

  h3{
    margin-left: 4vh;
  }

  p{
    margin-left: 8vh;
    margin-right: 8vh;
  }

.context {
    display: inline-block;
    position: relative;
    background-image: linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(${bg});
    background-size: 100%;
    background-position: center;
    padding: 2rem;
    margin-left: 20vh; 
    margin-right: 20vh; 
    font-family: sans-serif;
    background-color: #333;
    padding: 1vh 25vh 1vh 25vh;
  }



.background_imagem {
    position: absolute;
    opacity: 0.1;
    margin: -40px;
    height: 90%;
    z-index: 50;
}

  
  .content {
    flex-basis: 70%;
    border: 2px solid #D9D9D9;
    border-radius: 10px;
    margin-bottom: 1rem;
    z-index: 100;
    color: white;
    margin-top: 5vh;
    margin-bottom: 5vh;
  }
  
  .footer_img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1rem;
  }
  
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  
  button {
    font-size: 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }

  .bt_1 {
    background-color: #D9D9D9;
    padding: 1rem 5rem 1rem 5rem;
  }
  
  .bt_2 {
    background-color:  #648F61;
    padding: 1rem 5rem 1rem 5rem;
    color: white;
  }
  
  button:hover {
    background-color: gray;
  }
  
.last_p{
    margin-bottom:5vh;
}

.footer_img{
    width: 150px;
    height: 150px;
}

    @media(max-width:800px){
        .context{
            margin: 0;
            padding:0;
        }
        
        .content {
            margin:0;
            padding:0;
        }

        .sidebar{
            display: flex;
            flex-direction: column;
            width: 90%;
            margin-left: 5%;
            justify-content: center;
            align-items: center;
        }   
        .buttons{
            display:flex;
            flex-direction: column;
        }

        .bt_1 {
            margin:2vh;
            padding: 0.5rem 3rem 0.5rem 3rem;
          }
          
          .bt_2 {
            margin:2vh;
            padding: 0.5rem 3rem 0.5rem 3rem;
            
          }

          .footer_img{
            width: 150px;
            height: 150px;
            margin:2vh;
        }
    }
`