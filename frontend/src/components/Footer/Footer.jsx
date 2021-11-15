import styles from "./Footer.module.scss";
import vkLogo from "./img/vk.png";
import instaLogo from "./img/instagram.png";

function Footer() {
  const now = new Date();
  const currentYear = now.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h6
          className={styles.header}
        >{`©${currentYear} Клиника ТОМСОН, г. Санкт Петербург. Все права защищены.`}</h6>
        <p className={styles.p}>
          Медицинские услуги имеют противопоказания, необходима консультация
          специалиста.
        </p>
        <p className={styles.p}>
          При перепечатке материалов ссылка на сайт обязательна.
        </p>
        <p className={styles.p}>
          Информация на сайте не является публичной офертой
        </p>
      </div>
      <div className={styles.block}>
        <h6 className={styles.header}>
          Время работы: каждый день с 9.00 до 21.00
        </h6>
        <p className={styles.p}>
          <a href="tel:+78007078705">+7 (800) 707-87-05</a>
        </p>
        <p className={styles.p}>info@tomson-clinic.ru</p>
      </div>
      <div className={styles.block}>
        <h6 className={styles.header}>Мы в соцсетях</h6>
        <div className={styles.logos__container}>
          <a href="https://vk.com/" target="_blank" rel="noreferrer">
            <img src={vkLogo} alt="VK"></img>
          </a>

          <a
            href="https://instagram.com/dr_tomson_natalia?utm_medium=copy_link"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instaLogo} alt="INST"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
