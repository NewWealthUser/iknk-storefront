"use client";

import React, { useState } from 'react';
import DiningTablesHeader from '../dining-tables-header';
import { clx } from '@medusajs/ui';

const DiningTablesGridView = () => {
  const [viewMode, setViewMode] = useState(3); // Default to 3 columns

  const gridClasses = clx(
    "grid w-full gap-x-10 gap-y-16",
    {
      "grid-cols-4": viewMode === 3,
      "grid-cols-3": viewMode === 2,
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
    },
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod26600087_E99932393_F_CC_RHR?$np-fullwidth-xs$",
      alt: "Fourth Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod26600087?swatch=251482",
      name: "Fourth Dining Table",
      priceMember: "$1485",
      priceRegular: "$2040"
    },
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod12730055_E99932393_F_RHR?$np-fullwidth-xs$",
      alt: "Fifth Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod12730055?swatch=291372",
      name: "Fifth Dining Table",
      priceMember: "$1585",
      priceRegular: "$2180"
    },
    {
      imgSrc: "//media.restorationhardware.com/is/image/rhis/prod20910346_E89931548_F_CC_RHR?$np-fullwidth-xs$",
      alt: "Sixth Dining Table",
      href: "/us/en/catalog/product/product.jsp/prod20910346?swatch=254008",
      name: "Sixth Dining Table",
      priceMember: "$1685",
      priceRegular: "$2240"
    }
  ];

  return (
    <div className="content-container">
      <DiningTablesHeader viewMode={viewMode} setViewMode={setViewMode} />
      <div className="lg:pb-12 pb-6 sm:pb-8 md:pb-10">
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
                        <p className="text-xs text-gray-500 text-center pt-2" style={{ minHeight: '28px' }}>Available in multiple finishes </p>
                        <div className="flex flex-col">
                          <div className="mt-2">
                            <div className="uppercase text-center">
                              <span className="text-sm uppercase text-center font-semibold text-gray-800">{product.name}</span>
                            </div>
                          </div>
                          <div className="mt-1 flex justify-center flex-wrap items-baseline text-xs">
                            <span className="text-gray-600 mr-1">Starting at</span>
                            <span className="text-black font-medium mr-1">{product.priceMember} Member /</span>
                            <span className="text-gray-600">{product.priceRegular} Regular</span>
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