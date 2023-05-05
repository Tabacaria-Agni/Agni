
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { StyledpoliticaPage } from "./style"
import AGNI from "../../assets/AGNI.png"

export const Politicapage = () => {



    return(
        <StyledpoliticaPage>
            <Header />
            <div className="context">
            <section className="content">
                <h1 className="title1">Política de Transparência da Tabacaria Agni</h1>
                <h3>Informações claras sobre produtos:</h3>
                <p>Todos os nossos produtos são devidamente rotulados e listam os ingredientes utilizados, além de incluir informações sobre os riscos associados ao consumo de tabaco. Estamos comprometidos em fornecer informações claras e precisas sobre a procedência dos nossos produtos.</p>
                <h3>Precificação:</h3>
                <p>Os preços dos nossos produtos são claros e acessíveis, e estão disponíveis em nossa loja física e online. Quaisquer promoções ou descontos oferecidos são divulgados de forma clara e transparente.</p>
                <h3>Avisos de saúde:</h3>
                <p>Exibimos avisos de saúde obrigatórios de acordo com as leis brasileiras em nossa loja física e online. Informamos claramente os danos à saúde que o tabaco pode causar, incentivando nossos clientes a procurar ajuda para deixar de fumar.</p>
                <h3>Consumo de tabaco proibido para menores de 18 anos:</h3>
                <p>A tabacaria Agni está comprometida em cumprir as leis brasileiras que proíbem o consumo de tabaco por menores de 18 anos. Não vendemos produtos de tabaco para menores de 18 anos, e exigimos a apresentação de documento de identificação válido para verificar a idade dos clientes. Incentivamos a moderação e responsabilidade no consumo de tabaco, e não promovemos o uso de produtos de tabaco para menores de idade.</p>
                <h3>Política de privacidade:</h3>
                <p>Temos uma política clara de privacidade que protege a privacidade e os dados pessoais dos nossos clientes. Não compartilhamos informações pessoais de nossos clientes com terceiros sem o consentimento do cliente.</p>
                <h3>Transparência nas práticas comerciais:</h3>
                <p>Temos uma política clara de devolução de produtos que é divulgada em nossa loja física e online. Aceitamos diversas formas de pagamento, que são claramente divulgadas em nossa loja física e online. Qualquer informação relevante para os clientes é divulgada de forma clara e transparente.</p>
                <h3>Responsabilidade social:</h3>
                <p className="last_p">Estamos comprometidos em assumir a responsabilidade social e promover iniciativas de conscientização sobre os danos à saúde causados pelo tabaco. Incentivamos nossos clientes a fumar com moderação e, sempre que possível, a buscar ajuda para deixar de fumar.</p>
            </section>
            <div className ="sidebar">
                <div className="buttons">
                    <button className="bt_1">Cadastre-se</button>
                    <button className="bt_2">Login</button>
                    <img className="footer_img" src={AGNI} alt="Imagem" />
                </div>
            </div>
        </div>
            <Footer />
        </StyledpoliticaPage>
    )
}