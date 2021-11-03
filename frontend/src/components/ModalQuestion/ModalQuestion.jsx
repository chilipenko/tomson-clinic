import React, {useRef} from 'react';
import styles from './ModalQuestion.module.css';


function ModalQuestion({active, setActive}) {

  const nameUser = useRef(null);
  const textUser = useRef(null);
  const tel = useRef(null);


  function sendUserQuestion(){}; // тут отправляем вопрос в телегу https://api.telegram.org/2070966167:AAHu1FaEA5tWa3kuKXwBNGUgasuD_mEhMIQ/sendMessage?chat_id=@TomsonClinic_bot&parse_mode=HTML&text=Это текст для бота
//2070966167:AAHu1FaEA5tWa3kuKXwBNGUgasuD_mEhMIQ
  const changeHandler = async (event) => {
    event.preventDefault();
    const user = nameUser.current.value; 
  const inputText = textUser.current.value; 
  const telNumber = tel.current.value; 

    const response = await fetch('https://api.telegram.org/bot2070966167:AAHu1FaEA5tWa3kuKXwBNGUgasuD_mEhMIQ/sendMessage?chat_id=@TomsonClinic_bot&parse_mode=HTML&text=Это текст для бота', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ user, inputText, telNumber })
    });
    const data = await response.json();
    console.log('data', data);
    // if (data.message) {
    //   history.push('/');
    //   /// заменить на history push ()
    //   dispatch({ type: LOGIN, payload: true })
    // } else {
    //   alert('Неверные данные')
    // }
  };
  

  // console.log(prices)
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : `${styles.modal}`} onClick={() => setActive(false)}>
      <div className={active ? `${styles['modal__content']} ${styles.active}` : `${styles['modal__content']}`} onClick={e => e.stopPropagation()}>
      <div className="mb-3">
      <form onSubmit={changeHandler}>
          <input ref={nameUser} className="form-control" type="text" placeholder='Имя' />
          <input ref={tel} className="form-control" type="tel" placeholder='Ваш номер телефона' />
          <textarea ref={textUser} className="form-control" type="text" placeholder='Напишите Ваш вопрос' />
        <button type="submit" className={`btn ${styles["modal_button"]}`}>Отправить</button>
        </form>
     </div>
      </div>
    </div>
  );
}
export default ModalQuestion
