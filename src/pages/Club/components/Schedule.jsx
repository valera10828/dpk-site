import './Schedule.scss'
import React from 'react'

const Schedule = () => {
  const scheduleData = [
    { sport: 'Легкая атлетика', day: 'Понедельник', time: '13.30-15.00', coach: 'Шейкова М. И.' },
    { sport: 'Легкая атлетика', day: 'Среда', time: '15.00-16.30', coach: 'Шейкова М. И.' },
    { sport: 'Волейбол', day: 'Понедельник', time: '13.30-15.00', coach: 'Поляк Ж. И.' },
    { sport: 'Волейбол', day: 'Четверг', time: '15.00-16.30', coach: 'Поляк Ж. И.' },
    { sport: 'Баскетбол', day: 'Понедельник', time: '13.30-15.00', coach: 'Кузина И. И.' },
    { sport: 'Баскетбол', day: 'Четверг', time: '15.00-16.30', coach: 'Кузина И. И.' },
    { sport: 'Футбол', day: 'Вторник', time: '15.00-16.30', coach: 'Борискин В. В.' },
    { sport: 'Футбол', day: 'Пятница', time: '13.30-15.00', coach: 'Борискин В. В.' }
  ];

  return (
    <div className="schedule">
      <div className="schedule__table-container">
        <table className="schedule__table">
          <thead>
            <tr>
              <th>Вид спорта</th>
              <th>День недели</th>
              <th>Время проведения</th>
              <th>Руководитель</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'schedule__row--even' : 'schedule__row--odd'}>
                <td data-label="Вид спорта">{item.sport}</td>
                <td data-label="День недели">{item.day}</td>
                <td data-label="Время проведения">{item.time}</td>
                <td data-label="Руководитель">{item.coach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Schedule;