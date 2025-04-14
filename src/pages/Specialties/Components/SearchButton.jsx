import React, { useState } from 'react'
import Button from "../../../components/ui/Button/Button";
import './SearchButton.scss';

const SearchButton = ({ onFilterChange }) => {
  const [activeButton, setActiveButton] = useState('Все специальности');

  const handleButtonClick = (category) => {
    if (onFilterChange) {
      onFilterChange(category, activeButton, true);
    }
    setActiveButton(category);
  };

  const handleSelectChange = (e) => {
    const category = e.target.value;
    if (onFilterChange) {
      onFilterChange(category, activeButton, true);
    }
    setActiveButton(category);
  };

  return (
    <div className="container-search">
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Все специальности' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Все специальности')}
      >
        Все специальности
      </Button>
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Программирование' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Программирование')}
      >
        Программирование
      </Button>
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Компьютерная техника' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Компьютерная техника')}
      >
        Компьютерная техника
      </Button>
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Электричество' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Электричество')}
      >
        Электричество
      </Button>
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Механика' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Механика')}
      >
        Механика
      </Button>
      <Button
        variant="border-accent"
        className={`container-search__button ${activeButton === 'Технолого - Педагогическое' ? 'active' : ''}`}
        onClick={() => handleButtonClick('Технолого - Педагогическое')}
      >
        Технолого - Педагогическое
      </Button>
      <select
        name="search"
        id="search-select"
        className="container-search__select"
        value={activeButton}
        onChange={handleSelectChange}
      >
        <option value="Все специальности">Все специальности</option>
        <option value="Программирование">Программирование</option>
        <option value="Компьютерная техника">Компьютерная техника</option>
        <option value="Электричество">Электричество</option>
        <option value="Механика">Механика</option>
        <option value="Технолого - Педагогическое">Технолого-Педагогическое</option>
      </select>
    </div>
  )
}

export default SearchButton;