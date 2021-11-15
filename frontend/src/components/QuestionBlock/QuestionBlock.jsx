import React, { useState } from "react";
import dentist from "./img/IMG_9572.jpg";
import signature from "./img/signature.jpg";

import styles from "./QuestionBlock.module.css";
import Fade from "react-reveal/Fade";
import ModalQuestion from "../ModalQuestion/ModalQuestion";

function QuestionBlock() {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <div className={styles["welcome-block"]}>
        <Fade left>
          <img
            style={{ width: "400px", height: "550px" }}
            src={dentist}
            alt="dentist"
          />
        </Fade>
        <Fade right>
          <div className={styles["welcome-block-question"]}>
            <span>Я РАДА ПРИВЕТСTВОВАТЬ ВАС НА САЙТЕ НАШЕЙ КЛИНИКИ.</span>
            <p>
              Мелькают дни, складываясь в недели и месяцы, месяцы не менее
              стремительно превращаются в годы. И вот нам уже 25 лет! Для
              человека 25 лет – это начало жизненного пути, для нашего
              коллектива – это этап, когда можно и следует оглянуться, подвести
              некоторые итоги.
            </p>
            <p>
              Доктора совершают чудеса преображения наших женщин и мужчин,
              постоянно стремящихся к совершенству. И благодарные записи наших
              пациентов в Книге отзывов – наглядное свидетельство тому, что
              коллектив Клиники остается верен своим добрым традициям и с
              уверенностью смотрит в будущее.
            </p>
            <p>Будем рады видеть Вас в нашей Клинике!</p>
            <div className={styles["block-question"]}>
              <div>
                
                <h4>Будьте здоровы и красивы!</h4>
                <p>Генеральный директор Клиники «ТОМСОН»</p>
                <p>Томсон Лариса Владимировна</p>{" "}
                <button onClick={() => setModalActive(true)}>
                ЗАДАТЬ ВОПРОС
              </button>
              </div>
               
              <div>
                <img
                  style={{ width: "300px", height: "195px" }}
                  src={signature}
                  alt="signature"
                />

              </div>

             
            </div>
          </div>
        </Fade>
      </div>
      {modalActive && (
        <ModalQuestion active={modalActive} setActive={setModalActive} />
      )}
    </>
  );
}

export default QuestionBlock;
