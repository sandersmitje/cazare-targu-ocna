"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {useTranslations} from 'next-intl';


export default function PromotionVideo(){    
    const t = useTranslations('promovideo');
    return (
        <section className="p-0 bg-center bg-no-repeat promotion-area bg-blend-multiply w-full mt-12">
            <div className="home-banner">
                <div className="text-center">
                    <a id="play-home-video" target="_blank" className="video-play-button text-center" href="https://youtu.be/dIzX5Nrf1I4">
                        <span>
                           <FontAwesomeIcon icon={faYoutube} />  
                        </span>
                    </a>
                    <h3>{t('discover')}</h3>
                    <p>{t('watchvideo')}</p>
                </div>
            </div>
        </section>
    );
}