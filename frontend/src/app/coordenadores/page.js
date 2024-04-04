
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import ListCoordenadores from "@/components/ListCoordenadores";
export default function AssociadosPage() {

  return (
    <div>
      <Header hrefAnterior="/inicio" />
      <ListCoordenadores
        diretorioAnterior="Home /"
        diretorioAtual="Coordenadores"
        hrefAnterior="/inicio"
        table1="nome"
        table2="Contato"
        table3="Ação" 
        />

      <Footer />

    </div>
  )
}