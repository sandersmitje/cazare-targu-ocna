"use client"

import {Link} from "@/i18n/navigation";
import { usePathname } from 'next/navigation';
import { useLocale } from "next-intl";
import { useTranslations} from 'next-intl';
import LocaleSwitcher from "./locale-switcher";
import Hamburger from "hamburger-react";
import { useState } from "react";


export default function NavMenu(){
    const t = useTranslations('mainmenu');
    const pathname = usePathname();
    const locale = useLocale();
    const [isOpen, setOpen] = useState(false);
    return (<nav className="sticky top-0 z-20 w-full header flex p-4 pl-5 md:pl-12 pr-12 bg-white menu-shadow">
    <span className="block md:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></span>
    {isOpen && <div className="w-full grid grid-cols-1 md:hidden">
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale) ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/"}>Home</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/pensiuneaamelia") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/pensiuneaamelia"}>Pensiunea Amelia</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/gradinaverde") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/gradinaverde"}>Vila Grădina Verde</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/activities") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/activities"}>{t('activities')}</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/gallery") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/gallery"}>{t('gallery')}</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/book") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/book"}>{t('book')}</Link>
        <Link prefetch={false} onClick={() => setOpen(false)} className={(pathname == ("/" + locale + "/contact") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/contact"}>{t('contact')}</Link>
        <LocaleSwitcher/>   
     </div> }
    <div className="hidden md:block">
      <Link prefetch={false} className={(pathname == ("/" + locale) ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/"}>Home</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/pensiuneaamelia") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/pensiuneaamelia"}>Pensiunea Amelia</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/gradinaverde") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/gradinaverde"}>Vila Grădina Verde</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/activities") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/activities"}>{t('activities')}</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/gallery") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/gallery"}>{t('gallery')}</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/book") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/book"}>{t('book')}</Link>
      <Link prefetch={false} className={(pathname == ("/" + locale + "/contact") ? "activelink " : "inactivelink ") +"pt-2 pb-2 pr-5 pl-5"} href={"/contact"}>{t('contact')}</Link>
      <LocaleSwitcher/>   
    </div>
  </nav>);
}