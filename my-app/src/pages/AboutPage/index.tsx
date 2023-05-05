import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { StyledAboutPage, StyledButtonFirst, StyledButtonSecond, StyledDivFirst, StyledDivFooter, StyledDivSecond, StyledSectionFooter, StyledSectionHeader } from "./style"

export const AboutPage = () =>{
    
    const navigate = useNavigate()

    return(
        <StyledAboutPage>
            <Header />
                <main>
                    <StyledSectionHeader>
                        <StyledDivFirst>
                            <h2>Qual o nosso foco ?</h2>

                            <p> A Tabacaria Agni tem como foco, suprir a demanda de clientes que alegam ter dificuldade para encontrar produtos que são relacionados ao tabaco, ocupar o espaço como principal E-Commerce neste ramo e proporcionar aos clientes não só produtos de qualidade como também uma excelente experiência!</p>
                        </StyledDivFirst>
                        <StyledDivSecond>
                            <h2>Nossos Valores</h2>

                            <div><p>Responsabilidade</p> <p>Transparência</p> <p>Respeito</p></div>
                        </StyledDivSecond>
                    </StyledSectionHeader>

                    <StyledSectionFooter>
                        <StyledDivFooter>
                            <p>Crie agora mesmo sua conta e faça um pedido!</p>
                            
                            <StyledButtonFirst onClick={() => {
                                navigate('/register')
                            }}>Criar conta</StyledButtonFirst>

                            <p>Faça o login e confira !</p>

                            <StyledButtonSecond onClick={() => {
                                navigate('/')
                            }}>Login</StyledButtonSecond>
                        </StyledDivFooter>
                        <div>
                            <img src="AgniLogo.png" alt="" />
                        </div>
                    </StyledSectionFooter>
                </main>
            <Footer />
        </StyledAboutPage>
    )
}