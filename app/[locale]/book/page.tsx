"use client"
import GoogleMaps from '@/components/ui/google-maps';
import {useTranslations} from 'next-intl';

export default function Book(){
    const m = useTranslations("mainmenu");
    const v = useTranslations("various");
    return (        
        <div className="w-full">
            <section id="book" className="flex justify-center pt-8 mb-12">
                <div className="page-container md:flex md:items-start"> 
                <form className="bg-white shadow-2xl">
                    <div className='w-full grid grid-cols-5 gap-4 p-8'>
                        <div className="col-span-5">
                            <h1>{m("book")}</h1>
                        </div>
                        <div className="col-span-1">
                            <p className="">{v("phone")}</p>
                        </div>
                        <div className="col-span-4" >
                            <p>+40 744 694 712</p>
                        </div>
                        <div className="col-span-1">
                            <p className="">{v("email")}</p>
                        </div>
                        <div className="col-span-4" >
                            <p>amelia.prisacaru@gmail.com</p>
                        </div>
                        <div className="col-span-1">
                            <p className="">{v("street")}</p>
                        </div>
                        <div className="col-span-4" >
                            <p>Strada Maior Roșiță 25</p>
                        </div>
                        <div className="col-span-1">
                            <p className="">{v("city")}</p>
                        </div>
                        <div className="col-span-4" >
                            <p>Târgu-Ocna</p>
                        </div>
                        <GoogleMaps/>
                        </div>
                    </form>
                    
                </div>
            </section>
        </div>
    );
}