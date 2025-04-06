"use client"
import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
export default function Jumbotron(){
    const t = useTranslations('jumbotron');
    return (
        <section className="p-0 bg-center bg-no-repeat home-banner-area bg-gray-400 bg-blend-multiply w-full">
            <div className="home-banner">
                <div className="text-center">
                <h4>{t('title1')}</h4>
                <h1>{t('title2.beginning')}  <em>{t('title2.middle')}  </em> {t('title2.end')}</h1>
                <Link prefetch={false}  href="/book" className="button home-banner-btn">{t('booknow')}</Link>                </div>
            </div>
        </section>
    );
}