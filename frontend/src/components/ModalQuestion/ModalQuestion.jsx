import React, { useRef } from "react";
import styles from "./ModalQuestion.module.css";

function ModalQuestion({ active, setActive }) {
  const nameUser = useRef(null);
  const textUser = useRef(null);
  const tel = useRef(null);

  const changeHandler = async (event) => {
    event.preventDefault();
    const user = nameUser.current.value;
    const inputText = textUser.current.value;
    const telNumber = tel.current.value;
    const key = "2070966167:AAHu1FaEA5tWa3kuKXwBNGUgasuD_mEhMIQ";
    const chat_id = "-1001223671091";
    const message = `Задан вопрос сайта:%0A - <b>Имя:</b> <i>${user}</i>%0A - <b>Телефон:</b> <i>${telNumber}</i>%0A - <b>Вопрос:</b> <i>${inputText}</i>`;
    const url = `https://api.telegram.org/bot${key}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=html`;
    const reg =
      /(\+7|8)[- _]*\(?[- _]*(\d{3}[- _]*\)?([- _]*\d){7}|\d\d[- _]*\d\d[- _]*\)?([- _]*\d){6})/g;
    const valid = reg.test(telNumber);
    if (user == "") {
      alert("Как к Вам обращаться?");
    } else if (!valid) {
      alert("Номер телефона введен неправильно!");
    } else if (inputText == "") {
      alert("Задайте Ваш вопрос");
    } else {
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log("data", data);
      setActive(false);
    }
  };

  return (
    <div
      className={
        active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={
          active
            ? `${styles["modal__content"]} ${styles.active}`
            : `${styles["modal__content"]}`
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3">
          <form onSubmit={changeHandler}>
            <input
              ref={nameUser}
              className="form-control"
              type="text"
              placeholder="Имя"
            />
            <input
              ref={tel}
              className="form-control"
              type="tel"
              placeholder="Ваш номер телефона"
            />
            <textarea
              ref={textUser}
              className="form-control"
              type="text"
              placeholder="Напишите Ваш вопрос"
            />
            <button type="submit" className={`btn ${styles["modal_button"]}`}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ModalQuestion;
