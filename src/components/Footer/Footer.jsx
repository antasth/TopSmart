import Logo from '../UI/Logo/Logo'
import styles from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex	py-5`}>
        <div className="flex items-center">
          <Logo />
        </div>
      </footer>
   );
};

export default Footer;