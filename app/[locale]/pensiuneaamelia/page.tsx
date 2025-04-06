"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import RoomCarousel from "@/components/ui/room-carousel";


export default function PensiuneaAmelia(){
    const t = useTranslations('pensiuneaamelia');
    const g = useTranslations('general');
    return (        
        <div className="w-full">
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
                        <Image alt="welcome 3" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/pensiuneaamelia/pensiunea1.jpg"/>
                        </div>
                    </div>
                    <div className="md:w-3/5 p-5 md:pl-10 grid grid-cols-1 content-center md:h-full">

                    <h2 className="block"><span>Pensiunea Amelia</span><br/> { t('title') }</h2>
                        <p className="mt-2">
                        { t('paragraph1') }
                        </p> 
                        <p className="mt-2">
                        { t('paragraph2') }
                        </p>
                        <p className="mt-2">
                        { g('distance') }
                        </p>
                    </div>
                </div>
            </section>

            
            <RoomCarousel pension="pensiuneaamelia"/>
        </div>
    );
}