"use client";

import { useEffect, useState } from "react";
import styles from "./sementes.module.scss";
import { getAllSementes } from "@/api/sementes/getAllSementes";
import { useMutation } from "react-query";

export default function SelecionarSementesBanco({ formik }) {
    const [sementes, setSementes] = useState([]);
    const [seletores, setSeletores] = useState([]);
    const [filtro, setFiltro] = useState('');

    const { state, mutate } = useMutation(
        async () => {
            return getAllSementes();
        }, {
        onSuccess: (res) => {
            setSementes(res.data);
        },
        onError: (error) => {
            console.log(error);
        }
    });

    useEffect(() => {
        mutate();
    }, []);

    useEffect(() => {
        formik.setFieldValue("sementes", seletores.filter(Boolean));
    }, [seletores]);

    const addSelector = () => {
        setSeletores([...seletores, { id: '', peso: '', safra: '' }]);
    };

    const handleSelectChange = (index, field, value) => {
        const updatedSeletores = [...seletores];
        updatedSeletores[index][field] = value;
        setSeletores(updatedSeletores);
    };

    const handleFilterChange = (e) => {
        setFiltro(e.target.value.toLowerCase());
    };

    const filteredSementes = sementes.filter(semente =>
        semente.nomePopular.toLowerCase().includes(filtro)
    );
    console.log(formik.values)
    return (
        <div>
            {seletores.map((seletor, index) => (
                <div key={index}>
                    <div className={styles.container__ContainerForm_form}>
                        <div className={styles.container__ContainerForm_form}>
                            {index === seletores.length - 1 && (
                                <>
                                    <label>Filtro Sementes</label>
                                    <input
                                        type="text"
                                        placeholder="Filtrar sementes por nome"
                                        onChange={handleFilterChange}
                                        value={filtro}
                                        className={styles.container__ContainerForm_form_inputFiltro}
                                    />
                                </>
                            )}
                        </div>
                        <div>
                            <label>Semente <span>*</span></label>
                            <select
                                className={styles.container__ContainerForm_form_input}
                                id={`sementes-${index}`}
                                name={`sementes[${index}].id`}
                                onChange={(e) => handleSelectChange(index, 'id', e.target.value)}
                                value={seletor.id || ''}
                                required
                            >
                                <option value="">Selecione...</option>
                                {filteredSementes.map((semente) => (
                                    <option key={semente.id} value={semente.id}>
                                        {semente.nomePopular}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.container__ContainerForm_form_halfContainer}>
                        <div>
                            <label>Peso <span>*</span></label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="text"
                                placeholder="Peso"
                                onChange={(e) => handleSelectChange(index, 'peso', e.target.value)}
                                value={seletor.peso || ''}
                            />
                        </div>
                        <div>
                            <label>Safra<span>*</span></label>
                            <input
                                type="text"
                                placeholder="Safra"
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                onChange={(e) => handleSelectChange(index, 'safra', e.target.value)}
                                value={seletor.safra || ''}
                            />
                        </div>
                    </div>
                </div>
            ))}
            <button type="button" onClick={addSelector} className={styles.container_button}>Adicionar mais sementes</button>
            {formik.errors.sementes && <span className={styles.form__error}>{formik.errors.sementes}</span>}
        </div>
    );
}
