import React from 'react';
import { Link } from 'react-router-dom';
import DocumentsCard from '../../../components/ui/DocumentsCard/DocumentsCard';
import './CollegeDocuments.scss';

const CollegeDocuments = () => {
  const documents = [
    { id: 1, title: 'Устав колледжа', number: '1', url: 'https://cloud.mail.ru/public/cLTV/Cv9AKjGJu' },
    { id: 2, title: 'Лицензия на осуществление образовательной деятельности', number: '2', url: 'https://cloud.mail.ru/public/2Kjy/ZCdBDu1L4' },
    { id: 3, title: 'Положение по проверки текущего контроля знаний', number: '3', url: 'https://cloud.mail.ru/public/73VV%2FRSzJCGEWw' },
    { id: 4, title: 'Коллективный договор', number: '4', url: 'https://cloud.mail.ru/public/fcWU%2FcsgQQi8ij' },
    { id: 5, title: 'Правила внутреннего распорядка', number: '5', url: 'https://cloud.mail.ru/public/V2s3/gtTUByHR2' },
    { id: 6, title: 'Отчет о самообследовании', number: '6', url: 'https://cloud.mail.ru/public/V1tQ/WT7n4dyzt' },
  ];

  return (
    <section className="college-documents">
      <div className="container">
        <div className="college-documents__header">
          <h2 className="college-documents__title">Документы</h2>
          <Link to="/documents" className="college-documents__link">Все документы</Link>
        </div>
        <div className="college-documents__cards">
          {documents.map((doc) => (
            <DocumentsCard 
              key={doc.id}
              title={doc.title}
              number={doc.number}
              url={doc.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollegeDocuments;
