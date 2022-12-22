import { FcTwoSmartphones } from 'react-icons/fc'
import styles from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={`${styles.footer} flex	py-5`}>
        <div className="flex items-center">
          <FcTwoSmartphones className="logo" />
          <div className="headerInfo">
            <h3 className="text-3xl font-bold">
              Top<span className="text-orange-400">Smart</span>
            </h3>
            <p className="opacity-70">Магазин лучших смартфонов</p>
          </div>
        </div>
      </footer>
   );
};

export default Footer;