import React from 'react';
import SpecialityHero from '../../layouts/Speciality Site/components/SpecialityHero/SpecialityHero';
import ProgramDescription from '../../layouts/Speciality Site/components/ProgramDescription/ProgramDescription';
import CareerProspects from '../../layouts/Speciality Site/components/CareerProspects/CareerProspects';
import Curriculum from '../../layouts/Speciality Site/components/Curriculum/Curriculum';
import AdmissionRequirements from '../../layouts/Speciality Site/components/AdmissionRequirements/AdmissionRequirements';
import SpecialityHighlights from '../../layouts/Speciality Site/components/SpecialityHighlights/SpecialityHighlights';
import SpecialityInfo from "../../layouts/Speciality Site/components/SpecialityInfo/SpecialityInfo";
import CallToAction from "../../layouts/Speciality Site/components/CallToAction/CallToAction";

import './SpecialtiesPage.scss';

const SpecialityPageTemplate = ({ specialityData }) => {
    return (
        <div className="speciality-page">
            <div className="speciality-page__hero-section">
                <SpecialityHero
                    title={specialityData.title}
                    code={specialityData.code}
                    codeTitle={specialityData.codeTitle}
                    image={specialityData.image}
                    description={specialityData.description}
                />
            </div>

            <SpecialityInfo
                title={specialityData.specialityInfo.title}
                description={specialityData.specialityInfo.description}
                features={specialityData.specialityInfo.features}
            />

            <div className="speciality-page__info-section">
                <ProgramDescription
                    description={specialityData.programDescription.description}
                    keyPoints={specialityData.programDescription.keyPoints}
                />
            </div>

            <div className="speciality-page__highlights-section">
                <SpecialityHighlights highlights={specialityData.specialityHighlights} />
            </div>

            <CareerProspects
                careers={specialityData.careers}
                title="Карьерные возможности"
            />

            <Curriculum
                courses={specialityData.courses}
                title="Программа обучения"
            />

            <AdmissionRequirements
                requirements={specialityData.requirements}
                admissionInfo={specialityData.admissionInfo}
                title="Поступление и необходимые документы"
            />

          <CallToAction />
        </div>

    );
};

export default SpecialityPageTemplate;