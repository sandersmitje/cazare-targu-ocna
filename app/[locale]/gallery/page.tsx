"use client"
import Image from "next/image";

export default function Gallery(){
    return (        
        <div className="w-full">
            <section id="gallery" className="lg:grid lg:grid-cols-3 pt-8 lg:p-8 gap-6">
                <div>
                    
                <Image width={0} height={0} className="mb-4" sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/gallery/gallery28.jpg"
                     alt="Park magura" title="Park magura"/>

                <Image width={0} height={0} className="mb-4" sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/gallery/gallery39.jpg"
                     alt="Vila Gradina Verde" title="Vila Gradina Verde" />
                    
                <Image width={0} height={0} className="mb-4" sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/gallery/gallery2.jpg"
                     alt="Targu-Ocna" title="Targu-Ocna"/>

                    
                <Image width={0} height={0} className="mb-4" sizes="100vw" style={{ width: '100%', height: 'auto' }} src="/img/gallery/gallery38.jpg"
                     alt="New Year's Traditions" title="New Year's Traditions"/>
                </div>
                <div>                    
                    <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery40.jpg"
                        className="mb-4" alt="Our lovely place" title="Our lovely place"/>

                    <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery41.jpg"
                        className="mb-4" alt="Pensiunea Amelia" title="Pensiunea Amelia" />

                    <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/Gallery31.jpg"
                        className="mb-4" alt="Winter BBQ" title="Winter BBQ"/> 
                        
                    <Image width={0} height={0} unoptimized={true} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery32.png"
                        className="mb-4" alt="Chief relations manager" title="Chief relations manager"/>
                </div>
                <div>
                    
      <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/Gallery 39.jpg"
        className="mb-4" alt="View from the balcony" title="View from the balcony" />

      <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery12.jpg"
        className="mb-4" alt="Winter wonderland" title="Winter wonderland" />

        <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery27.jpg"
        className="mb-4" alt="Trotus valley" title="Trotus valley"/>

        
        <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} sizes="100vw" src="/img/gallery/gallery33.jpg"
        className="mb-4" alt="Starry night" title="Starry night" />
                </div>
            </section>
        </div>
    );
}