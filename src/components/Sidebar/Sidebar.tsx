"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Home,
  Menu,
  X,
  PenTool,
  MessageCircle,
  LayoutGrid,
} from "lucide-react";
import { cn } from "~/utils/tw";
import Image from "next/image";
import { NavLink } from "../NavLink/NavLink";
import Icon from "~/fixtures/logo_icon.png";

export type NavItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

const navigation: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Articles", href: "/articles", icon: PenTool },
  { name: "AMA", href: "/ama", icon: MessageCircle },
  { name: "Stack", href: "/stack", icon: LayoutGrid },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-full flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <X className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-penn-100 px-6 pb-2">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      className="w-auto"
                      height={40}
                      src={Icon}
                      alt="Antonio Pitasi"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                onClick={() =>
                                  sidebarOpen && setSidebarOpen(false)
                                }
                                href={item.href}
                                className={cn(
                                  "data-active:bg-penn-200 data-active:text-white",
                                  "text-white hover:bg-penn-300 hover:text-white",
                                  "group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                )}
                              >
                                {item.icon && (
                                  <item.icon
                                    className={cn("h-4 w-4 shrink-0")}
                                    aria-hidden="true"
                                  />
                                )}
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:z-50 lg:flex lg:min-h-full lg:w-56 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-penn-100 px-6">
          <div className="flex h-16 shrink-0 items-center">
            <Image
              className="w-auto"
              height={40}
              src={Icon}
              alt="Antonio Pitasi"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        href={item.href}
                        className={cn(
                          "data-active:bg-penn-200 data-active:text-white",
                          "text-white hover:bg-penn-300 hover:text-white",
                          "group flex items-center gap-x-3 rounded-md px-4 py-2 text-sm font-semibold leading-6"
                        )}
                      >
                        {item.icon && (
                          <item.icon
                            className={cn("h-4 w-4 shrink-0")}
                            aria-hidden="true"
                          />
                        )}
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="-mx-6 mt-auto">
                {/* Profile
                <Link
                  href="#"
                  className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-maize-700"
                >
                  <img
                    className="h-8 w-8 rounded-full bg-maize-700"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="sr-only">Your profile</span>
                  <span aria-hidden="true">Tom Cook</span>
                </Link> */}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-penn-100 py-4 px-4 shadow-sm sm:px-6 lg:hidden">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-white lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-sm font-semibold leading-6 text-white">
          Antonio Pitasi
        </div>
        {/* <Link href="#">
          <span className="sr-only">Your profile</span>
          <img
            className="h-8 w-8 rounded-full bg-penn-300"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </Link> */}
      </div>
    </header>
  );
}
