import React from 'react';
import dentist from './img/dentist.png';
import styles from './QuestionBlock.module.css';

function QuestionBlock() {
  return (
    <div className={styles['welcome-block']}>
      <img style={{'width':'600px', 'height':'550px'}} src={dentist} alt="dentist" />
      <div>
        <span>Я РАДА ПРИВЕТСВОВАТЬ ВАС НА САЙТЕ НАШЕЙ КЛИНИКИ.</span>
        <p>Мелькают дни, складываясь в недели и месяцы, месяцы не менее стремительно превращаются в годы. И вот нам уже 25 лет! Для человека 25 лет – это начало жизненного пути, для нашего коллектива – это этап, когда можно и следует оглянуться, подвести некоторые итоги.</p>
        <p>Значительно «повзрослели» наши пациенты, выросли их дети – наши бывшие пациенты сами стали мамами и папами, и уже они доверяют здоровье своего подрастающего поколения нашей Клинике. Пришли новые врачи, творчески активные, владеющие современными стоматологическими методами и технологиями, которые активно и успешно внедряет в практику наша Клиника.</p>
        <p>Относительно недавно мы открыли новое направление в своей деятельности – косметологию. Здоровые зубы и красивая улыбка, на наш взгляд, удивительно естественно сочетаются с ухоженной кожей лица и тела.</p>
        <p>Доктора совершают чудеса преображения наших женщин и мужчин, постоянно стремящихся к совершенству. И благодарные записи наших пациентов в Книге отзывов – наглядное свидетельство тому, что коллектив Клиники остается верен своим добрым традициям и с уверенностью смотрит в будущее.</p>
        <p>Будем рады видеть Вас в нашей Клинике!</p>
        <span>Будьте здоровы и красивы!</span>
        <p>Генеральный директор Клиники «ТОМСОН»</p>
        <button>ЗАДАТЬ ВОПРОС</button>
      </div>
    </div>
  )
}

export default QuestionBlock
