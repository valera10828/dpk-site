import React, {useState} from 'react';
import "./Specialties.scss";
import Title from "../../components/ui/Title/Title";
import SpecialtyCard from "../../components/ui/SpecialtyCard/SpecialtyCard";
import specialtiesList from "./SpecialtiesInfo";
import SearchButton from "./Components/SearchButton";

const Specialties = () => {
  const [activeFilter, setActiveFilter] = useState('Все специальности');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const getCategoryByGroup = (group) => {
    const programmingGroups = ['ПКС', 'СИП'];
    const computerGroups = ['КС', 'КСК', 'СА', 'РТМ'];
    const electricityGroups = ['МЭПЗ', 'ТЭО'];
    const mechanicsGroups = ['ОРАД', 'ОРАТ'];
    const pedagogyGroups = ['ВВ', 'ФК'];

    if (programmingGroups.includes(group)) return 'Программирование';
    if (computerGroups.includes(group)) return 'Компьютерная техника';
    if (electricityGroups.includes(group)) return 'Электричество';
    if (mechanicsGroups.includes(group)) return 'Механика';
    if (pedagogyGroups.includes(group)) return 'Технолого - Педагогическое';

    return 'Другое';
  };

  const filteredSpecialties = specialtiesList.filter(specialty => {
    if (activeFilter === 'Все специальности') {
      return true;
    }

    const category = getCategoryByGroup(specialty.Group);
    return category === activeFilter;
  });

  return (
    <div className="specialities-container">
      <Title title="Специальности"/>
      <SearchButton onFilterChange={handleFilterChange}/>
      <SpecialtyCard specialties={filteredSpecialties}/>
    </div>
  );
}

export default Specialties;