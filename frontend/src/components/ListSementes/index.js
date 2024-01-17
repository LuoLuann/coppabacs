import Image from "next/image";
import style from "./list.module.scss";

import Table from "./Table";

export default function List({listName, table1, table2, table3,table4, content1, content2, content3}) {
    return (
    <div>
        <div className={style.header}>
          <h1>{listName}</h1>
          <div className={style.header__container}>
            <button className={style.header__container_cadastro}>
              Cadastrar nova semente
            </button>
          </div>
        </div>
        <Table 
          table1={table1} 
          table2={table2} 
          table3={table3} 
          table4={table4}
          content1={content1} 
          content2={content2}
          content3={content3}
        />
     </div>   
    );
}