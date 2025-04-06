"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslations} from 'next-intl';

export default function ContactInfo(){    
    const t = useTranslations('contactinfo');
    return <div className="sm:flex-none md:flex w-3/4 sm:place-content-start md:place-content-end gap-8 pt-10 md:pt-0">
      <div className="media header-top-info">
        <span className="header-top-info__icon">
        <FontAwesomeIcon icon={faPhone} className="fa-fw"/>               
        </span>
        <div className="media-body">
          <p>{t('any-questions')}</p>
          <p>{t('call-us')}:&nbsp;
            <a className="emphasis" href="tel:+40 744 694 712">+40 744 694 712</a>
          </p>
        </div>
      </div>
      <div className="media header-top-info">
        <span className="header-top-info__icon">
          <FontAwesomeIcon icon={faEnvelope} className="fa-fw"/>                  
        </span>
        <div className="media-body">
          <p>&nbsp;</p>
          <p>{t('email-us')}:&nbsp; 
            <a className="emphasis" href="tel:+12 365 5233">amelia.prisacaru@gmail.com</a>
          </p>
        </div>
      </div>
    </div>;
}