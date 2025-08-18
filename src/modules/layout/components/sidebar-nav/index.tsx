"use client";
import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import X from '@modules/common/icons/x';

type SidebarNavProps = {
  isOpen: boolean;
  close: () => void;
  navItems: string[];
};

const SidebarNav = ({ isOpen, close, navItems }: SidebarNavProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 md:hidden" onClose={close}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-xs transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-center mb-8">
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Menu
                  </Dialog.Title>
                  <button onClick={close} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>
                <nav>
                  <ul className="flex flex-col gap-y-4">
                    {navItems.map((item) => (
                      <li key={item}>
                        <LocalizedClientLink
                          href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-lg text-gray-700 hover:text-black"
                          onClick={close}
                        >
                          <span
                            style={item === 'SALE' ? { color: 'rgb(202, 32, 34)' } : {}}
                          >
                            {item}
                          </span>
                        </LocalizedClientLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SidebarNav;