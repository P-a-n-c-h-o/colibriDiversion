"use client";

import { FooterLinkType } from "@/app/types/footerlinks";
import { getDataPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../Header/Logo";

const Footer = () => {
  const [footerlink, SetFooterlink] = useState<FooterLinkType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        SetFooterlink(data.FooterLinkData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <footer>
      <div className="container py-14">
        <div className="flex flex-col items-center justify-center gap-8 w-full max-w-xl mx-auto">
          {/* Redes sociales */}
          <div className="flex gap-4 justify-center">
            <Link href="https://www.instagram.com/colibridiversion" target="_blank" >
              <Icon
                icon="tabler:brand-instagram"
                width={45}
                height={45}
                className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
              />
            </Link>
            <Link href="https://www.facebook.com/colibri.diversion.9" target="_blank">
              <Icon
                icon="tabler:brand-facebook-filled"
                width={45}
                height={45}
                className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
              />
            </Link>
            <Link href="https://wa.me/+5492616356990" target="_blank">
              <Icon
                icon="tabler:brand-whatsapp-filled"
                width={45}
                height={45}
                className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
              />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" >
              <Icon
                icon="tabler:brand-youtube-filled"
                width={45}
                height={45}
                className="text-darkblue dark:text-white bg-darkmode/5 dark:bg-white/10 rounded-lg p-2 hover:text-primary dark:hover:text-primary duration-300"
              />
            </Link>
          </div>
          {/* Dirección */}
          <div className="flex items-center gap-2 justify-center">
            <Icon
              icon={"tabler:map-pin"}
              width={22}
              height={22}
              className="text-lightgrey"
            />
            <p className="text-base font-normal text-offwhite text-center">
              Panamericana 7810, Las Heras, Mendoza, Argentina
            </p>
          </div>
          {/* Teléfono */}
          <div className="flex items-center gap-2 justify-center">
            <Icon
              icon={"tabler:phone"}
              width={22}
              height={22}
              className="text-lightgrey"
            />
            <Link
              href="tel:+542616356990"
              target="_blank"
            >
              <p className="text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary text-center">
                + 54 261 6356990
              </p>
            </Link>
          </div>
          {/* Email */}
          <div className="flex items-center gap-2 justify-center">
            <Icon
              icon={"tabler:mail"}
              width={22}
              height={22}
              className="text-lightgrey"
            />
            <Link
              href="mailto:empathy.jf@gmail.com"
              target="_blank"
              // onClick={(e) => e.preventDefault()}
            >
              <p className="text-base font-normal text-offwhite hover:text-primary dark:hover:text-primary text-center">
                empathy.jf@gmail.com
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-3">
        <p className="text-center">
          @2026 - All Rights Reserved by{" "}
          <Link
            href="https://getnextjstemplates.com/" onClick={(e) => e.preventDefault()} 
            target="_blank"
            className="hover:text-primary dark:hover:text-primary"
          >
            {" "}
            YBF.solutions
          </Link>
          {/* {" - Distributed by "} */}
          {/* <Link
            href="https://themewagon.com"
            target="_blank"
            className="hover:text-primary dark:hover:text-primary"
          >
            ThemeWagon
          </Link> */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
