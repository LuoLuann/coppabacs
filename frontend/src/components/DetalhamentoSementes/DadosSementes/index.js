import styles from "../detalhamentoSementes.module.scss";

export default function DadosSementes({ formik, editar }) {
    return (
        <>
            <div className={styles.container__header_title}>
                <h1>Dados da Semente</h1>
            </div>
            <div className={styles.container__ContainerForm_form_threePartsContainer}>
                {editar === false ? (
                    <>

                        <div>
                            <label htmlFor="cultura">Cultura</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="Cultura"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.Cultura}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="nome">Nome da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="nome"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="descricao"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.descricao}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="dominioPublico">Cultivar de Domínio Público</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="dominioPublico"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.dominioPublico}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="nome">Cultivar de Polinização Aberta Melhorada</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="nome"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="regAdaptCultivar">Região de Adaptação da Cultivar</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="regAdaptCultivar"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.regAdaptCultivar}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="altitudeMaxima">Altitude Máxima</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="altitudeMaxima"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMaxima}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="altitudeMinima">Altitude Mínima</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="nome"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMinima}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="doencas">Resistência à Doenças</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="doencas"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.doencas}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="pragas">Resistência à Pragas</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="pragas"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.pragas}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasPositiva">Características Positivas</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasPositiva"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasPositiva}
                                disabled
                            />
                        </div>
                        <div>
                            <label htmlFor="caracteristicasNegativas">Características Negativas</label>
                            <input
                                className={styles.container__ContainerForm_form_input}
                                name="caracteristicasNegativas"
                                placeholder="Não informado"
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasNegativas}
                                disabled
                            />
                        </div>

                    </>
                ) : (
                    <>
                        <div>
                            <label htmlFor="cultura">Cultura</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="cultura"
                                name="cultura"
                                placeholder="Insira a cultura"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.cultura}
                                required />
                            {formik.touched.cultura && formik.errors.cultura ? (
                                <span className={styles.form__error}>{formik.errors.cultura}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="nome">Nome da Cultivar </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Insira o nome da cultivar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.nome}
                                required />
                            {formik.touched.nome && formik.errors.nome ? (
                                <span className={styles.form__error}>{formik.errors.nome}</span>
                            ) : null}

                        </div>
                        <div>
                            <label htmlFor="descricao">Descrição </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="Insira o nome da cultivar"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.descricao}
                                required />
                            {formik.touched.descricao && formik.errors.descricao ? (
                                <span className={styles.form__error}>{formik.errors.descricao}</span>
                            ) : null}

                        </div>
                        <div className={styles.radio}>
                            <label htmlFor="dominioPublico">Cultivar de Domínio Público </label>
                            <div className={styles.radio__itens}>
                                <input
                                    type="radio"
                                    id="sim"
                                    name="dominioPublico"
                                    value="true"
                                    checked={formik.values.dominioPublico === 'true'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="sim">Sim</label>

                                <input
                                    type="radio"
                                    id="nao"
                                    name="dominioPublico"
                                    value="false"
                                    checked={formik.values.dominioPublico === 'false'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="nao">Não</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="polinizaacaoAbertaMelhorada">Cultivar de Polinização Aberta Melhorada </label>
                            <div className={styles.radio__itens}>
                                <input
                                    type="radio"
                                    id="sim"
                                    name="polinizaacaoAbertaMelhorada"
                                    value="true"
                                    checked={formik.values.polinizaacaoAbertaMelhorada === 'true'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="sim">Sim</label>

                                <input
                                    type="radio"
                                    id="nao"
                                    name="polinizaacaoAbertaMelhorada"
                                    value="false"
                                    checked={formik.values.polinizaacaoAbertaMelhorada === 'false'}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor="nao">Não</label>
                            </div>
                        </div>
                        <div>
                        <label htmlFor="regAdaptCultivar">Região de Adaptação da Cultivar </label>
                        <input
                            className={styles.container__ContainerForm_form_halfContainer_input}
                            id="regAdaptCultivar"
                            name="regAdaptCultivar"
                            placeholder="Insira a região de adaptação"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.regAdaptCultivar}
                            required />
                        {formik.touched.tecnico && formik.errors.regAdaptCultivar ? (
                            <span className={styles.form__error}>{formik.errors.regAdaptCultivar}</span>
                        ) : null}
                    </div>
                        <div>
                            <label htmlFor="altitudeMaxima">Altitude máxima</label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="number"
                                id="altitudeMaxima"
                                name="altitudeMaxima"
                                placeholder="Insira a altitude máxima"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMaxima}
                                required />
                            {formik.touched.altitudeMaxima && formik.errors.altitudeMaxima ? (
                                <span className={styles.form__error}>{formik.errors.altitudeMaxima}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="altitudeMinima">Altitude mínima </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="number"
                                id="altitudeMinima"
                                name="altitudeMinima"
                                placeholder="Insira a altitude mínima"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.altitudeMinima}
                                required />
                            {formik.touched.altitudeMinima && formik.errors.altitudeMinima ? (
                                <span className={styles.form__error}>{formik.errors.altitudeMinima}</span>
                            ) : null}
                        </div>
                        <div>
                        <label htmlFor="doencas">Resistência à Doenças </label>
                        <input
                            className={styles.container__ContainerForm_form_halfContainer_input}
                            id="doencas"
                            name="doencas"
                            placeholder="Insira quais doencas a planta possui resistência"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.doencas}
                            required />
                        {formik.touched.doencas && formik.errors.doencas ? (
                            <span className={styles.form__error}>{formik.errors.doencas}</span>
                        ) : null}
                    </div>
                        <div>
                            <label htmlFor="pragas">Resistência à Pragas </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="text"
                                id="pragas"
                                name="pragas"
                                placeholder="Insira quais pragas a planta possui resistência"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.pragas}
                                required />
                            {formik.touched.pragas && formik.errors.pragas ? (
                                <span className={styles.form__error}>{formik.errors.pragas}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasPositiva">Características Positivas </label>
                            <input
                                type="text"
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                id="caracteristicasPositiva"
                                name="caracteristicasPositiva"
                                placeholder="Insira quais caracteristicas positivas a planta possui"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasPositiva}
                                required />
                            {formik.touched.caracteristicasPositiva && formik.errors.caracteristicasPositiva ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasPositiva}</span>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="caracteristicasNegativas">Características Negativas </label>
                            <input
                                className={styles.container__ContainerForm_form_halfContainer_input}
                                type="text"
                                id="caracteristicasNegativas"
                                name="caracteristicasNegativas"
                                placeholder="Insira quais caracteristicasNegativas a planta possui"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.caracteristicasNegativas}
                                required />
                            {formik.touched.pragas && formik.errors.caracteristicasNegativas ? (
                                <span className={styles.form__error}>{formik.errors.caracteristicasNegativas}</span>
                            ) : null}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}