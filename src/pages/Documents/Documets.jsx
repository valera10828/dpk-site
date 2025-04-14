import React, { useState } from 'react';
import Title from "../../components/ui/Title/Title";
import './Documents.scss';
import { FaFileAlt, FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Documents = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const [openCategories, setOpenCategories] = useState({
        mainDocs: true,
        selfReports: true,
        inspections: true,
        localActs: true,
        forReview: true
    });

    const documentCategories = [
        {
            id: 'mainDocs',
            title: 'Основные документы',
            documents: [
                {
                    title: 'Устав образовательной организации',
                    description: 'Устав ГБПОУ ДПК (Приказ Министерства образования и науки от 4.12.2023 № 650)',
                    link: 'https://cloud.mail.ru/public/cLTV/Cv9AKjGJu',
                    isNew: true
                },
                {
                    title: 'Лицензия на осуществление образовательной деятельности',
                    description: 'Лицензия на осуществление образовательной деятельности Реестровая выписка №0973',
                    link: 'https://cloud.mail.ru/public/2Kjy/ZCdBDu1L4'
                },
                {
                    title: 'Реестровая выписка №0973',
                    description: '',
                    link: 'https://cloud.mail.ru/public/paNx/Qb3QZmVHR'
                },
                {
                    title: 'Правила внутреннего распорядка обучающихся',
                    description: '',
                    link: 'https://cloud.mail.ru/public/V2s3/gtTUByHR2'
                },
                {
                    title: 'Правила внутреннего трудового распорядка',
                    description: 'Правила внутреннего трудового распорядка - НЕТ',
                    link: '#',
                    unavailable: true
                },
                {
                    title: 'Коллективный договор (при наличии)',
                    description: 'Коллективный договор',
                    link: 'https://cloud.mail.ru/public/fcWU%2FcsgQQi8ij'
                }
            ]
        },

        {
            id: 'selfReports',
            title: 'Отчеты о результатах самообследования',
            documents: [
                {
                    title: 'Отчёт о результатах самообследования за 2022-2023 учебный год',
                    description: '',
                    link: 'https://cloud.mail.ru/public/V1tQ/WT7n4dyzt'
                }
            ]
        },
        {
            id: 'inspections',
            title: 'Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования',
            documents: [
                {
                    title: 'Справка о результатах мониторинга официального сайта',
                    description: '',
                    link: 'https://drive.google.com/file/d/1EWj1QJVWuvQzHK3samONaIwnlpB2yMXC/view'
                },
                {
                    title: 'Информация об устранении нарушений по наполняемости сайта',
                    description: '',
                    link: 'https://drive.google.com/file/d/1l8PZ0qQO3eKTSVtYlpYURYnWtr92MxkA/view'
                },
                {
                    title: 'Акт проверки',
                    description: '',
                    link: 'https://drive.google.com/file/d/1kUHCqy9-d0a8orA7WQs8TtSgoFHqUFiv/view'
                }
            ]
        },
        {
            id: 'localActs',
            title: 'Локальные нормативные акты образовательной организации',
            subtitle: 'по основным вопросам организации и осуществления образовательной деятельности',
            documents: [
                {
                    title: 'Режим занятий обучающихся',
                    description: 'Положение о режиме занятий обучающихся по программам профессионального образования — НЕТ',
                    link: '#',
                    unavailable: true
                },
                {
                    title: 'Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся',
                    description: 'Положение по организации текущего контроля знаний и промежуточной аттестации обучающихся ГБПОУ ДПК',
                    link: 'https://cloud.mail.ru/public/73VV%2FRSzJCGEWw'
                },
                {
                    title: 'Порядок и основания перевода, отчисления и восстановления обучающихся',
                    description: 'Приказ об особенностях зачисления (восстановления, перевода) в ГБПОУ ДПК',
                    link: 'https://cloud.mail.ru/public/uHQq/mmmADQgEj'
                },
                {
                    title: 'Положение о порядке отчисления восстановления перевода',
                    description: '',
                    link: 'https://cloud.mail.ru/public/tCtd/aJbYMcWux'
                },
                {
                    title: 'Порядок оформления возникновения, приостановления и прекращения отношений',
                    description: 'Положение о порядке оформления возникновения, приостановления и прекращения отношений между ДПК и обучающимися — НЕТ',
                    link: '#',
                    unavailable: true
                }
            ]
        },
        {
            id: 'forReview',
            title: 'Для ознакомления',
            documents: [
                {
                    title: 'О начале 2024-2025 учебного года в Донецком политехническом колледже',
                    year: '2024',
                    link: 'https://cloud.mail.ru/public/hKqn/9GXAQcmgv',
                    isNew: true
                },
                {
                    title: 'Положение о Центре карьеры',
                    year: '2023',
                    link: 'https://cloud.mail.ru/public/WtXx/Vn1tJk54U'
                },
                {
                    title: 'Положение о молодежном медиацентре',
                    year: '2023',
                    link: 'https://cloud.mail.ru/public/kfEZ/Qxivryx96'
                },
                {
                    title: 'Положение по организации текущего контроля знаний',
                    year: '2022',
                    link: 'https://cloud.mail.ru/public/ZzC9/68oE4Ua1j'
                },
                {
                    title: 'Положение о предоставлении академического отпуска',
                    year: '2022',
                    link: 'https://cloud.mail.ru/public/vM5J/zzmVxhche'
                },
                {
                    title: 'Положение об организации учебного процесса по очно-заочной формам обучения',
                    year: '2022',
                    link: 'https://cloud.mail.ru/public/zWvy/jAQx7mqeU'
                },
                {
                    title: 'Положение о порядке отчисления восстановления перевода',
                    year: '2022',
                    link: 'https://cloud.mail.ru/public/pkG9/PpQYkV7RH'
                },
                {
                    title: 'Положение о порядке ликвидации текущих и академических задолженностей',
                    year: '2022',
                    link: 'https://cloud.mail.ru/public/yv4m/VAh7EcYrR'
                },
                {
                    title: 'Положение о студенческом общежитии колледжа',
                    year: '2021',
                    link: 'https://cloud.mail.ru/public/BckS/hziZ4w5X4'
                },
                {
                    title: 'Положение по организации текущего контроля знаний и промежуточной аттестации обучающихся ГПОУ ДПК',
                    year: '2021',
                    link: 'https://cloud.mail.ru/public/224q/bS4FsNECM'
                },
                {
                    title: 'Положение о комиссии по противодействию коррупции',
                    year: '2021',
                    link: 'https://cloud.mail.ru/public/LCRB/iQ1iQKKua'
                },
                {
                    title: 'Положение по формированию ФОС ДПК',
                    year: '2021',
                    link: 'https://drive.google.com/file/d/1CuOH3dhCNbc5b0wjFRtQ0umevMEDyeVy/view'
                },
                {
                    title: 'Положение об учете и контроле посещаемости занятий, о правилах отработки пропущенных занятий и организации промежуточной аттестации',
                    year: '2020',
                    link: 'https://cloud.mail.ru/public/Ht3A/8MryNt6JT'
                },
                {
                    title: 'Положение о повышении квалификации и стажировке',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1VXyW_8oNq7y3GFjDyFMJSrS-PFiQENVg/view'
                },
                {
                    title: 'Положение об отделении',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1qfByixtDcTsfWtF2esvSoaLMrYeppUwL/view'
                },
                {
                    title: 'Положение о методическом совете',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/10rCO76EGXU24pziNLn2nnFbX2_7p63CG/view'
                },
                {
                    title: 'Положение по формированию ФОС ДПК',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1CuOH3dhCNbc5b0wjFRtQ0umevMEDyeVy/view'
                },
                {
                    title: 'Положение по формированию ФОС ДПК',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1CuOH3dhCNbc5b0wjFRtQ0umevMEDyeVy/view'
                },
                {
                    title: 'Положение по формированию ФОС ДПК',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1CuOH3dhCNbc5b0wjFRtQ0umevMEDyeVy/view'
                },
                {
                    title: 'Положение по формированию ФОС ДПК',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1CuOH3dhCNbc5b0wjFRtQ0umevMEDyeVy/view'
                },
                {
                    title: 'Положение по формированию УМК',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1VjUN-1PQmiY4kGyF8mGu_GocjPM0oy4Y/view'
                },
                {
                    title: 'Положение по организации внутреннего контроля',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1oqBjzSZx8IRk2Gyx8CVZsp32Lxt2T0q7/view'
                },
                {
                    title: 'Положение о ПКЦ',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/11rVOkdGOJLy9xeC_tTIqkpW0jEi8yd-5/view'
                },
                {
                    title: 'Положение о проведении практики обучающихся',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1NByMebokmDdesJqHL06CLdE7Ify0lCdy/view'
                },
                {
                    title: 'Положение о педагогическом совете',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1JGLlUsJhdyiZdLFCKqic8CC5PeCNlGIz/view'
                },
                {
                    title: 'Положение планированию, организации и проведению лабораторных работ и практических занятий',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1NZypoZ0YF8ZOmJx1FABi3d-ny9v2oC5k/view'
                },
                {
                    title: 'Положение о методическом кабинете',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1DCK0_lIK2pUxnRrA0PR8muKeJUzm_eC_/view'
                },
                {
                    title: 'Положение о совете классных руководителей',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1pGMd92Q4QC7iv5dhGwtnMlHR4fVaWe95/view'
                },
                {
                    title: 'Положение о сайте ГПОУ «ДПК»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1LYSATRFrSnmSAsHqcG2bIpjmZBoSr3rn/view'
                },
                {
                    title: 'Положение о стипендиальной комиссии',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1WBAouqGzDFpI_NdNHUTbJGky_-SmRM-E/view'
                },
                {
                    title: 'Положение об административном совете ГПОУ «ДПК»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1AFw_GWTdg19Bv8xgSNCZqRC5nAxc5d_y/view'
                },
                {
                    title: 'Положение о студентах ГПОУ «ДПК»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1G8igXCub_1VeG0pH9k6TE98MDt_CAFb5/view'
                },
                {
                    title: 'Положение о порядке отчисления, восстановления и перевода обучающихся',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1sfqgeFkKNnu4UxVUszPpl7UJ_tynRhQL/view'
                },
                {
                    title: 'Положение по оформлению и выдаче справок',
                    year: '2020',
                    link: 'https://cloud.mail.ru/public/td5B/RyHnvfwhe'
                },
                {
                    title: 'Положение по разработке программ СПО',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1rmGwVF2tLTvisJYjPduryU-5neLUNVk-/view'
                },
                {
                    title: 'Порядок применения и снятия с обучающихся в колледже мер дисциплинарного взыскания',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1GMzDOSUsQgAGwl-7E2E4Sf3CV3ZeB_zh/view'
                },
                {
                    title: 'Правила внутреннего распорядка для студентов',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1AONoGw_EMNBHSo73H_tHdS3AFKLBiQ4s/view'
                },
                {
                    title: 'Положение о профориентационной работе в ГПОУ «ДПК»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/14KNUf6694ZRaUyitO8c7196SZWUNV8dR/view'
                },
                {
                    title: 'Положение о порядке и организации и осуществления образовательной деятельности',
                    year: '2020',
                    link: 'https://cloud.mail.ru/public/zEu5/EnRiDpJNd'
                },
                {
                    title: 'Положение о ведении журнала ГПОУ «ДПК»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1eGFfmkSaM13yYgSgyi2mxQWX_vFN16zx/view'
                },
                {
                    title: 'Положение о рубежной аттестации',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1cegQnuQGiY-KryTvmpwhsXxCHZHwCVuY/view'
                },
                {
                    title: 'Положение о квалификационном экзамене',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/14bptWbqedT1LnROYsi1pKgSCFGw1d5dD/view'
                },
                {
                    title: 'Положение по реализации программ СПО',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1pA2avkc3YOeqRaOClV3i0C8c3QogsJkZ/view'
                },
                {
                    title: 'Положение о применении электронного обучения',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/15VJBIBXwWRWVTNpkoFgBRSP-SjPXG-G0/view'
                },
                {
                    title: 'Положение об учебном кабинете (лаборатория)',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1ocRGYoFtBH7yP8_oEqWdyTI_zqO-gLPt/view'
                },
                {
                    title: 'Типовые положение об ОУ СПО»ДПТ»',
                    year: '2020',
                    link: 'https://drive.google.com/file/d/1af2tAzbphTNTYUSKDq6rfEU-fktvHF8G/view'
                },
                {
                    title: 'Положение об учете и контроле посещаемости занятий',
                    year: '2019',
                    link: 'https://cloud.mail.ru/public/Ht3A/8MryNt6JT'
                }
            ]
        }
    ];

    const filteredCategories = documentCategories.map(category => {
        const filteredDocs = category.documents.filter(doc =>
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (doc.description && doc.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        return { ...category, documents: filteredDocs };
    }).filter(category => category.documents.length > 0);

    const toggleCategory = (categoryId) => {
        setOpenCategories({
            ...openCategories,
            [categoryId]: !openCategories[categoryId]
        });
    };

    return (
        <div className="documents-page">
            <Title title="Документы" />

            <div className="documents-container">
                <div className="documents-search">
                    <div className="documents-search__wrapper">
                        <FaSearch className="documents-search__icon" />
                        <input
                            type="text"
                            placeholder="Поиск по документам..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="documents-search__input"
                        />
                    </div>
                </div>

                <div className="documents-content">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <div className="documents-section" key={category.id}>
                                <div
                                    className="documents-section__header"
                                    onClick={() => toggleCategory(category.id)}
                                >
                                    <h2 className="documents-section__title">{category.title}</h2>
                                    {openCategories[category.id] ?
                                        <FaChevronUp className="documents-section__icon" /> :
                                        <FaChevronDown className="documents-section__icon" />
                                    }
                                </div>

                                {category.subtitle && (
                                    <p className="documents-section__subtitle">{category.subtitle}</p>
                                )}

                                {openCategories[category.id] && (
                                    <div className="documents-list">
                                        {category.documents.map((doc, index) => (
                                            <a
                                                href={doc.link}
                                                className={`document-card ${doc.unavailable ? 'document-card--unavailable' : ''} ${doc.isNew ? 'document-card--new' : ''}`}
                                                key={index}
                                                onClick={(e) => doc.unavailable && e.preventDefault()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <div className="document-card__icon-wrapper">
                                                    <FaFileAlt className="document-card__icon" />
                                                </div>
                                                <div className="document-card__content">
                                                    <h3 className="document-card__title">
                                                        {doc.title}
                                                        {doc.isNew && <span className="document-card__badge">Новый</span>}
                                                    </h3>
                                                    {doc.description && (
                                                        <p className="document-card__description">{doc.description}</p>
                                                    )}
                                                    {doc.year && (
                                                        <span className="document-card__year">{doc.year}</span>
                                                    )}
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="documents-empty">
                            <p>По вашему запросу документов не найдено</p>
                            <button
                                className="documents-empty__button"
                                onClick={() => setSearchTerm('')}
                            >
                                Сбросить поиск
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Documents;
