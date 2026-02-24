import Image from "next/image";
import {useTranslations} from 'next-intl';
import Jumbotron from "@/components/ui/jumbotron";
import {Link} from "@/i18n/navigation";
import RoomCarousel from "@/components/ui/room-carousel";
import PromotionVideo from "@/components/ui/promotion-video";



export default function Home() {
  const t = useTranslations('home');
  const g = useTranslations('general');
  return (
    <div className="w-full">
      <Jumbotron/>
      <section className="flex justify-center pt-8">
        <div className="page-container md:flex md:items-start">
           <div className="md:w-2/5">
                <div className="w-full grid md:grid-cols-2 p-2 gap-4">
                    <div>
                      <Image alt="welcome 1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/home/welcome1.png"/>
                    </div>
                    <div>                        	
                    <Image alt="welcome 2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/home/welcome2.png"/>
                    </div>
                </div>
                <div className="grid  p-2">
                <Image alt="welcome 3" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/home/welcome3.png"/>
                </div>
           </div>
           <div className="md:w-3/5 p-5 md:pl-10 grid grid-cols-1 content-center md:h-full">
           <h2 className="block"><span>{ t('welcome') }</span><br/> { t('residence') }</h2>
              <p className="mt-2">
                { t('article1.parg1') }
              </p>
              <p>
                { t('article1.parg2') }
              </p>
              <p>
                { t('article1.parg3') }
              </p>
              <p>
                { t('article1.parg4') }
              </p>
              <p>
                { g('distance') }
              </p>
              <div className="grid md:grid-cols-2 p-4 gap-12">
                <Link prefetch={false} className="button button--active" href={"/pensiuneaamelia"}>Pensiunea Amelia</Link>
                <Link prefetch={false} className="button button--active" href={"/gradinaverde"}>Vila Grădina Verde</Link>
              </div>
           </div>
        </div>
      </section>
      
      <RoomCarousel pension="all"/>

      <PromotionVideo/>

      <section className="flex justify-center pt-24">
        <div className="page-container">
          <div className="section-intro text-center pb-[80px]">
            <div className="flex justify-center mb-2">
              <Image alt="Bed-icon" width={72} height={32} src="/img/home/bed-icon.png"/>
            </div>
            <h2>{t('inarea')}</h2>
            <div className="special-img mt-20">
              <Image width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/home/strand.jpg" alt="Ștrand cu apă sărată"/>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 pb-20">
              <div className="bg-white p-10 pb-4 pt-12 border-cards">
                <h4>{t('activity1.title')}</h4>
                <p>{t('activity1.description')}</p>
              </div>
              <div className="bg-white p-10 pb-4 pt-12 border-cards">
                <h4>{t('activity2.title')}</h4>
                <p>{t('activity2.description')}</p>
              </div>
              <div className="bg-white p-10 pb-4 pt-12 border-cards">
                <h4>{t('activity3.title')}</h4>
                <p>{t('activity3.description')}</p>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}
