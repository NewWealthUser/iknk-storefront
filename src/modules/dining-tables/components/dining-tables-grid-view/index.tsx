"use client";

import React, { useState } from 'react';
import DiningTablesHeader from '../dining-tables-header';
import { clx } from '@medusajs/ui';

const DiningTablesGridView = () => {
  const [viewMode, setViewMode] = useState(3); // Default to 3 columns

  const gridClasses = clx(
    "grid w-full gap-x-4 sm:gap-x-8 md:gap-x-10 gap-y-7 sm:gap-y-12 md:gap-y-[60px] lg:gap-y-20 xl:gap-y-24",
    {
      "grid-cols-3": viewMode === 3,
      "grid-cols-2": viewMode === 2,
    }
  );

  // Dummy data to replicate the product items for now
  const products = [
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod26600087_E99932393_F_CC_RHR?$np-fullwidth-xs$",
      alt: "Aegean Teak Square Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod26600087?swatch=251482",
      name: "Aegean Teak Square Dining Table",
      priceMember: "$1385",
      priceRegular: "$1980"
    },
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod12730055_E99932393_F_RHR?$np-fullwidth-xs$",
      alt: "Second Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod12730055?swatch=291372",
      name: "Second Dining Table",
      priceMember: "$1385",
      priceRegular: "$1980"
    },
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod20910346_E89931548_F_CC_RHR?$np-fullwidth-xs$",
      alt: "Third Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod20910346?swatch=254008",
      name: "Aegean Aluminum Square Dining Table",
      priceMember: "$1285",
      priceRegular: "$1840"
    }
  ];

  return (
    <div>
      <DiningTablesHeader viewMode={viewMode} setViewMode={setViewMode} />
      <div className="MuiContainer-root lg:pb-13.5 xl:pb-18.75 pb-7 sm:pb-9 md:pb-12 css-14v0rba px-4 sm:px-8 lg:px-16">
        <div id="component-product-grid" className="relative">
          <div className={gridClasses}>
            {products.map((product, index) => (
              <div key={index} className="flex w-full justify-center">
                <div className="relative flex h-full w-full flex-col">
                  <div className="group/item group relative flex flex-col items-end justify-center" style={{ touchAction: 'pan-y', height: 'auto' }}>
                    <div className="embla group/item group relative z-10 block w-full overflow-hidden">
                      <div className="embla__container flex h-full items-center">
                        <div className="embla__slide relative z-20 min-w-0 flex-[0_0_100%] justify-around">
                          <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover cursor-pointer css-7qu4t5" href={product.href}>
                            <div className="relative h-full w-full grid content-end aspect-[1/1]">
                              <img src={product.imgSrc} loading="lazy" alt={product.alt} className="h-full w-full opacity-1 mx-auto grid content-end object-contain" />
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-full w-full flex-col flex-wrap content-around">
                    <div className="flex h-full flex-col">
                      <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineHover css-7qu4t5" href={product.href}>
                        <p className="tailwind-typography-root my-0 pt-1.5 font-primary-thin text-[10px] leading-[13.2px] text-black sm:pt-2.5 sm:text-[13px] sm:leading-5 lg:pt-1.5 text-center tailwind-typography-body1" style={{ minHeight: '30px' }}>Available in multiple finishes </p>
                        <div className="flex flex-col">
                          <div className="mt-1.5 sm:mt-2 md:mt-2.5">
                            <div className="uppercase text-center">
                              <span className=" font-primary-thin text-[13px] uppercase leading-[13.2px] text-gray-1 sm:leading-5">{product.name}</span>
                            </div>
                          </div>
                          <div className="box-border flex w-full flex-col justify-center pr-2.5 xs:justify-start items-center">
                            <div className="flex flex-row flex-wrap items-baseline tracking-[0.165px] text-rhBlack justify-center xs:items-center whitespace-nowrap text-[11px]">
                              <div className="">
                                <span className="my-0 mr-1 text-[#000]">Starting at</span>
                              </div>
                              <span className="undefined">
                                <span className="tracking-[0.04em] mr-1 font-primary-rhroman text-[#000]">{product.priceMember}</span>
                                <span className="tracking-[0.04em] mr-1 font-primary-rhroman text-[#000]">Member /</span>
                              </span>
                              <span>
                                <span className="tracking-[0.04em] mr-1 font-primary-rhthin text-[#000]">{product.priceRegular}</span>
                                <span className="tracking-[0.04em] font-primary-rhthin text-[#000]">Regular</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningTablesGridView;