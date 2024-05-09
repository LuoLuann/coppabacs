"use client"
import { useParams } from "next/navigation";
import ListAgricultoresBanco from "@/components/ListAgricultores";
import ListSementesBanco from "@/components/ListSementesBanco";
export default function AssociadosPage() {

  const params = useParams();
  return (
    <div>
      <ListSementesBanco
        diretorioAnterior={`Home / Bancos Sementes / Banco Semente /`}
        diretorioAtual="Sementes"
        hrefAnterior={`/bancoSementes/info/${params.id}/`}
        table1="Imagem"
        table2="Cultura" 
        table3="Nome da Cultivar" 
        table4="Ação" 
        idBanco={params.id}
        />

    </div>
  )
}