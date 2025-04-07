"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';

export default function Activities(){
    const t = useTranslations("activities");
    return (
        <div className="w-full">
            <section id="salina" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                    
                    <div className="md:w-3/5 p-5 md:pr-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="block">{ t('activity1.title') }</h1>
                        <p className="mt-2">
                        { t('activity1.paragraph1') }
                        </p> 
                        <p className="mt-2">
                        { t('activity1.paragraph2') }
                        </p>
                        <p className="mt-2">
                        { t('activity1.paragraph3') }
                        </p>
                    </div>
                    <div className="md:w-2/5 grid grid-cols-1 gap-2 pt-10">
                        <div>
                            <Image alt="Salina 1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/salina1.jpg"/>
                        </div>
                        <div>                        	
                            <Image alt="Salina 2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/salina2.jpg"/>
                        </div>                               
                    </div>
                </div>
            </section>          
            <hr/>        

            
            <section id="welness" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                        
                    <div className="md:w-2/5 grid grid-cols-1 gap-2  pt-10">
                        <div className="block md:hidden">
                            <h1 className="block">{ t('activity2.title') }</h1>
                        </div>
                        <div>
                            <Image alt="Spa 1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/spa1.jpg"/>
                        </div>
                        <div>                        	
                            <Image alt="Spa 2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/spa2.jpg"/>
                        </div>                               
                    </div>                
                    <div className="md:w-3/5 p-5 md:pl-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="hidden md:block">{ t('activity2.title') }</h1>
                        <p className="mt-2">
                        { t('activity2.paragraph1') }
                        </p> 
                        <p className="mt-2">
                        { t('activity2.paragraph2') }
                        </p>
                    </div>
                </div>
            </section>          
            <hr/>      

            
            <section id="monestary" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                    
                    <div className="md:w-3/5 p-5 md:pr-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="block">{ t('activity3.title') }</h1>
                        <p className="mt-2">
                        { t('activity3.paragraph1') }
                        </p> 
                    </div>
                    <div className="md:w-2/5 grid grid-cols-1 gap-2 pt-10">
                        <div>
                            <Image alt="monestary" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/monestary1.jpg"/>
                        </div>                              
                    </div>
                </div>
            </section>          
            <hr/>   
            
            <section id="adventure" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                        
                    <div className="md:w-2/5 grid grid-cols-1 gap-2  pt-10">
                    
                        <div className="block md:hidden">
                            <h1 className="block">{ t('activity4.title') }</h1>
                        </div>
                        <div>
                            <Image alt="Adventure 1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/adventure1.jpg"/>
                        </div>
                        <div>                        	
                            <Image alt="Adventure 2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/adventure2.jpg"/>
                        </div>                               
                    </div>                
                    <div className="md:w-3/5 p-5 md:pl-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="hidden md:block">{ t('activity4.title') }</h1>
                        <p className="mt-2">
                        { t('activity4.paragraph1') }
                        </p> 
                        <p className="mt-2">
                        { t('activity4.paragraph2') }
                        </p>
                    </div>
                </div>
            </section>          
            <hr/>  

            <section id="slanicmoldova" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                    
                    <div className="md:w-3/5 p-5 md:pr-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="block">{ t('activity5.title') }</h1>
                        <p className="mt-2">
                            { t('activity5.paragraph1') }
                        </p> 
                        <p className="mt-2">
                            <b>{ t('activity5.paragraph2.emphasis') }</b>
                            { t('activity5.paragraph2.text') }
                        </p>
                        <p className="mt-2">
                            <b>{ t('activity5.paragraph3.emphasis') }</b>
                            { t('activity5.paragraph3.text') }
                        </p>
                            <p className="mt-2">
                            <b>{ t('activity5.paragraph4.emphasis') }</b>
                            { t('activity5.paragraph4.text') }
                        </p>
                            <p className="mt-2">
                            <b>{ t('activity5.paragraph5.emphasis') }</b>
                            { t('activity5.paragraph5.text') }
                        </p>
                        <p className="mt-2">
                            { t('activity5.paragraph6') }
                        </p>
                    </div>
                    <div className="md:w-2/5 grid grid-cols-1 gap-2 pt-10">
                        <div>
                            <Image alt="slanic-moldova 1" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/slanic-moldova1.jpg"/>
                        </div>
                        <div>                        	
                            <Image alt="slanic-moldova 2" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/slanic-moldova2.jpg"/>
                        </div>                               
                    </div>
                </div>
            </section>          
            <hr/>     
            
            <section id="magura" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                        
                    <div className="md:w-2/5 grid grid-cols-1 gap-2  pt-10">                    
                        <div className="block md:hidden">
                            <h1 className="block">{ t('activity6.title') }</h1>
                        </div>
                        <div>
                            <Image alt="Magura park" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/home/jumbotron.jpg"/>
                        </div>                             
                    </div>                
                    <div className="md:w-3/5 p-5 md:pl-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="hidden md:block">{ t('activity6.title') }</h1>
                        <p className="mt-2">
                        { t('activity6.paragraph1') }
                        </p> 
                    </div>
                </div>
            </section>          
            <hr/>   
            
            <section id="monument" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                    
                    <div className="md:w-3/5 p-5 md:pr-10 md:grid md:grid-cols-1 content-center md:h-full">
                        <h1 className="block">{ t('activity7.title') }</h1>
                        <p className="mt-2">
                        { t('activity7.paragraph1') }
                        </p> 
                    </div>
                    <div className="md:w-2/5 grid grid-cols-1 gap-2 pt-10">
                        <div>
                            <Image alt="Monument" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/activities/monumentul-magura.jpg"/>
                        </div>                              
                    </div>
                </div>
            </section>          
            <hr/>   

            <section id="link" className="flex justify-center pt-8">
                <div className="page-container md:flex md:items-start">                 
                    <p>
                    { t('footertext') }<a target="_blank" href="https://cnipttirguocna.ro/category/puncte-de-atractie-turistica/">{ t('link') }</a>.
                    </p>
                </div>
            </section>         
        </div>
    );
}