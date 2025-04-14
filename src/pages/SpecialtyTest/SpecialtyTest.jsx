import React, { useState, useEffect, useRef } from 'react';
import './SpecialtyTest.scss';
import specialtiesList from '../Specialties/SpecialtiesInfo';
import testImage from '../../assets/img/img/Specials/enrollee-img-prof-test.webp';
import { NavLink } from 'react-router-dom';
import Button from '../../components/ui/Button/Button';
import testQuestions from './testQuestions';

const SpecialtyTest = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [results, setResults] = useState([]);
  const isMounted = useRef(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    isMounted.current = true;
    
    return () => {
      isMounted.current = false;
      
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const startTest = () => {
    if (isMounted.current) {
      try {
        setCurrentStep('test');
      } catch (error) {
        console.error('Error starting test:', error);
      }
    }
  };

  const handleAnswer = (optionIndex) => {
    if (!isMounted.current) return;
    
    try {
      const newAnswers = [...answers, optionIndex];
      setAnswers(newAnswers);
      
      if (isMounted.current) {
        if (currentQuestion < testQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          calculateResults(newAnswers);
        }
      }
    } catch (error) {
      console.error('Error handling answer:', error);
    }
  };

  const calculateResults = (finalAnswers) => {
    if (!isMounted.current) return;
    
    try {
      const preferences = {
        programming: 0,
        mechanical: 0,
        physical: 0,
        electrical: 0,
        networks: 0
      };

      finalAnswers.forEach((answer, index) => {
        if (answer === 0) preferences.programming += 1;
        else if (answer === 1) preferences.mechanical += 1;
        else if (answer === 2) preferences.physical += 1;
        else if (answer === 3) {
          if (index % 2 === 0) preferences.electrical += 1;
          else preferences.networks += 1;
        }
      });

      const sortedPreferences = Object.entries(preferences)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);

      const recommendedSpecialties = [];

      const topPreference = sortedPreferences[0];
      
      if (topPreference === 'programming') {
        recommendedSpecialties.push(
          specialtiesList.find(s => s.Group === 'ПКС'),
          specialtiesList.find(s => s.Group === 'СИП')
        );
      } else if (topPreference === 'mechanical') {
        recommendedSpecialties.push(
          specialtiesList.find(s => s.Group === 'ОРАТ'),
          specialtiesList.find(s => s.Group === 'ОРАД')
        );
      } else if (topPreference === 'physical') {
        recommendedSpecialties.push(
          specialtiesList.find(s => s.Group === 'ФК')
        );
      } else if (topPreference === 'electrical') {
        recommendedSpecialties.push(
          specialtiesList.find(s => s.Group === 'МЭПЗ'),
          specialtiesList.find(s => s.Group === 'ТЭО')
        );
      } else if (topPreference === 'networks') {
        recommendedSpecialties.push(
          specialtiesList.find(s => s.Group === 'КС'),
          specialtiesList.find(s => s.Group === 'СА')
        );
      }

      if (recommendedSpecialties.length < 2 && sortedPreferences.length > 1) {
        const secondPreference = sortedPreferences[1];
        
        if (secondPreference === 'programming' && !recommendedSpecialties.some(s => s.Group === 'ПКС')) {
          recommendedSpecialties.push(specialtiesList.find(s => s.Group === 'ПКС'));
        } else if (secondPreference === 'mechanical' && !recommendedSpecialties.some(s => s.Group === 'ОРАТ')) {
          recommendedSpecialties.push(specialtiesList.find(s => s.Group === 'ОРАТ'));
        } else if (secondPreference === 'physical' && !recommendedSpecialties.some(s => s.Group === 'ФК')) {
          recommendedSpecialties.push(specialtiesList.find(s => s.Group === 'ФК'));
        } else if (secondPreference === 'electrical' && !recommendedSpecialties.some(s => s.Group === 'МЭПЗ')) {
          recommendedSpecialties.push(specialtiesList.find(s => s.Group === 'МЭПЗ'));
        } else if (secondPreference === 'networks' && !recommendedSpecialties.some(s => s.Group === 'КС')) {
          recommendedSpecialties.push(specialtiesList.find(s => s.Group === 'КС'));
        }
      }

      if (isMounted.current) {
        setResults(recommendedSpecialties.filter(Boolean).slice(0, 2));
        setCurrentStep('results');
      }
    } catch (error) {
      console.error('Error calculating results:', error);
    }
  };

  const resetTest = () => {
    if (isMounted.current) {
      try {
        setCurrentStep('intro');
        setCurrentQuestion(0);
        setAnswers([]);
        setResults([]);
      } catch (error) {
        console.error('Error resetting test:', error);
      }
    }
  };

  return (
    <div className="specialty-test">
      {currentStep === 'intro' && (
        <div className="test-intro">
          <div className="test-intro__content">
            <h1 className="test-intro__title">Выбери свою специальность</h1>
            <p className="test-intro__description">
              Пройди тест и узнай, какая специальность подходит именно тебе.
              Ответь на несколько вопросов, и мы поможем определить твои профессиональные интересы.
            </p>
            <Button 
              variant="accent" 
              onClick={startTest}
              className="test-intro__button"
            >
              Пройти тест
            </Button>
          </div>
        </div>
      )}

      {currentStep === 'intro' && (
        <div className="test-description">
          <div className="test-description__content">
            <div className="test-description__image-container">
              <img src={testImage} alt="Тест на профориентацию" className="test-description__image" />
            </div>
            <div className="test-description__text">
              <h2 className="test-description__title">О тесте</h2>
              <p className="test-description__paragraph">
                Наш тест поможет определить твои склонности и интересы в профессиональной сфере.
                Мы подготовили 15 вопросов, которые помогут выявить твои предпочтения и подобрать
                наиболее подходящие специальности из нашего колледжа.
              </p>
              <p className="test-description__paragraph">
                Тест займет около 5-7 минут. Отвечай честно, выбирая наиболее близкий тебе вариант.
                После завершения теста ты получишь рекомендации по специальностям, которые могут тебе подойти.
              </p>
              <p className="test-description__paragraph">
                Готов узнать свое профессиональное призвание? Нажми кнопку "Пройти тест" и начни путь к своей будущей карьере!
              </p>
            </div>
          </div>
        </div>
      )}

      {currentStep === 'test' && (
        <div className="test-questions">
          <div className="test-questions__progress">
            <div
              className="test-questions__progress-bar"
              style={{ width: `${(currentQuestion / testQuestions.length) * 100}%` }}
            ></div>
          </div>
          <div className="test-questions__container">
            <h2 className="test-questions__number">Вопрос {currentQuestion + 1} из {testQuestions.length}</h2>
            <h3 className="test-questions__question">{testQuestions[currentQuestion].question}</h3>
            <div className="test-questions__options">
              {testQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className="test-questions__option"
                  onClick={() => handleAnswer(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentStep === 'results' && (
        <div className="test-results">
          <h2 className="test-results__title">Результаты теста</h2>
          <p className="test-results__description">
            На основе твоих ответов, мы рекомендуем следующие специальности:
          </p>
          <div className="test-results__specialties">
            {results.map((specialty, index) => (
              <div key={index} className="test-results__specialty">
                <div className="test-results__specialty-image">
                  <img src={specialty.image} alt={specialty.title} />
                </div>
                <div className="test-results__specialty-info">
                  <h3 className="test-results__specialty-title">{specialty.title}</h3>
                  <p className="test-results__specialty-code">Код специальности: {specialty.codeSpecialty}</p>
                  <p className="test-results__specialty-group">Группа: {specialty.Group}</p>
                  <NavLink className="test-results__specialty-link" to={specialty.url}>Подробнее о специальности</NavLink>
                </div>
              </div>
            ))}
          </div>
          <Button 
            variant="main" 
            onClick={resetTest}
            className="test-results__reset-button"
          >
            Пройти тест заново
          </Button>
        </div>
      )}
    </div>
  );
};

export default SpecialtyTest;