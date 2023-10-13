import styles, { layout } from "./style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Transforming Learning with Technology <br className="sm:block hidden" /> 
      <p className="text-lg">Empowering You with Smart Solutions</p>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      
      We offer a one-stop learning platform, featuring intelligent AI chat, seamless document uploading and sharing, convenient social logins, and easy sharing of chat histories
      </p>

      <Button styles={`mt-10`} text="More..."/>
    </div>

    <div className={layout.sectionImg}>
      <img src='/img/layout/man-1459246_1280.png' alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;