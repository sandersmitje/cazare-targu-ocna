"use client"
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {useTranslations} from 'next-intl';
import {Link} from "@/i18n/navigation";

interface Roomprops {
  type: string,
  price: string,
  message: string,
  pension: string,
  link: string,
  index: number
}

interface CarouselProps {
  pension: string
}




export default function RoomCarousel(props: CarouselProps){  
    const rooms : Roomprops[] = [
      {
        type: "1",
        price: "price1",
        message: "description1",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 1
      },
      {
        type: "2",
        price: "price1",
        message: "description2",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 2
      },
      {
        type: "3",
        price: "price1",
        message: "description3",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 3
      },
      {
        type: "4",
        price: "price1",
        message: "description4",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 4
      },
      {
        type: "5",
        price: "price1",
        message: "description4",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 5
      },
      {
        type: "6",
        price: "price1",
        message: "description3",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 6
      },
      {
        type: "7",
        price: "price1",
        message: "description4",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 7
      },
      {
        type: "8",
        price: "price1",
        message: "description4",
        pension: "Pensiunea Amelia",
        link: "pensiuneaamelia",
        index: 8
      },
      {
        type: "1",
        price: "price2",
        message: "description5",
        pension: "Vila Grădina Verde",
        link: "gradinaverde",
        index: 9
      },
      {
        type: "2",
        price: "price2",
        message: "description5",
        pension: "Vila Grădina Verde",
        link: "gradinaverde",
        index: 10
      },
      {
        type: "3",
        price: "price2",
        message: "description7",
        pension: "Vila Grădina Verde",
        link: "gradinaverde",
        index: 11
      },
      {
        type: "4",
        price: "price3",
        message: "description7",
        pension: "Vila Grădina Verde",
        link: "gradinaverde",
        index: 12
      },
      {
        type: "5",
        price: "price2",
        message: "description1",
        pension: "Vila Grădina Verde",
        link: "gradinaverde",
        index: 13
      }
    ]
    const t = useTranslations('rooms');
    return (
      <div>
        <section className="flex justify-center lg:pt-24">
          <div className="page-container">
            <div className="section-intro text-center pb-[80px]">
              <div className="flex justify-center mb-2">
                <Image alt="Bed-icon" width={72} height={32} src="/img/home/bed-icon.png"/>
              </div>
              <h2>{t('explorerooms')}</h2>
            </div>
          </div>
        </section>

        <section className="flex justify-center pt-8">
          <div className="page-container">
            <Carousel >
              <CarouselContent className="-ml-1">
                {rooms.map((room: Roomprops) => ((props.pension == room.link || props.pension == "all") &&
                  <CarouselItem key={room.index} className="pl-6 pr-6 md:basis-1/2 lg:basis-1/3">
                    
                    <div className="p-1">
                      <Card className="p-0 shadow-lg gap-0">
                        <CardHeader className="w-full h-[200px] p-0 imagecontainer">
                            <Image alt="Bed-icon" width={72} height={150} className="w-full rounded-t-xl" src={"/img/rooms/" + room.link +"/Camera" + room.type + ".jpg"}/>                              
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 p-6 items-center pt-0 bg-white z-50">
                          <h3 className="text-center card-explore__price">{t(room.price)} {t('valuta')}<sub>/ {t('pernight')}</sub></h3>
                          <h4 className="text-center card-explore__title"><a><span>{t('room')}</span><span>&nbsp;{room.type}</span></a></h4>
                          <p className="text-center h-[50px]">{t(room.message)}</p>                          
                          <Link prefetch={false} className="text-center card-explore__link" href={"/" + room.link}>{room.pension}</Link>   
                       
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
      </div>
    );
}