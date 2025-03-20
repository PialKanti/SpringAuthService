'use client';

import { CustomLink } from '@/components/custom-link';
import { IHeader } from './interface';
import Link from 'next/link';
import { IconStore } from '@/components/icon-store';
import { CustomSheet } from '@/components/custom-sheet';
import { useState } from 'react';
import { cn } from '@/lib/shadcn/utils';

/** This is the header section. This should render at the top of every page. */
export function Header({ menuLinks }: IHeader) {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex min-h-[--header-min-height] items-center bg-white py-2 text-black shadow-sm backdrop-blur-sm [--header-min-height:3.5rem] lg:[--header-min-height:3.75rem]">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          {/* Logo  */}
          <div className="text-[1.25rem]/[1] font-bold">
            <Link href={'/'} className="block">
              Essential Ui
            </Link>
            <span className="sr-only">
              {process.env.PROJECT_NAME || 'Essential Ui'}
            </span>
          </div>

          <CustomSheet
            sheetOpen={sheetOpen}
            onCustomSheetChange={setSheetOpen}
            trigger={
              <button
                onClick={() => setSheetOpen(true)}
                aria-label="open menu"
                className="grid place-items-center text-[1.5rem] lg:hidden"
              >
                <IconStore iconName="menu" />
              </button>
            }
            className={cn('max-w-[320px] lg:hidden')}
            content={
              <>
                <div className="flex justify-between px-6 py-3">
                  <div className="text-[1.25rem]/[1] font-bold">
                    <Link href={'/'} className="block">
                      Essential Ui
                    </Link>
                    <span className="sr-only">
                      {process.env.PROJECT_NAME || 'Essential Ui'}
                    </span>
                  </div>
                  <IconStore iconName="close" className="text-[1.75rem]" />
                </div>

                {!!menuLinks.length && (
                  <nav
                    className="px-6 py-2"
                    aria-label="primary navigation mobile"
                  >
                    <ul className="grid gap-0.5">
                      {menuLinks.map((menuLink, index) => (
                        <li key={index}>
                          <CustomLink
                            href={menuLink.href}
                            ariaLabel={menuLink.label}
                            disabled={false}
                            label={menuLink.label}
                            target={menuLink.target}
                            className="flex items-center rounded bg-gray-200 px-3 py-1"
                          />
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
              </>
            }
          />

          {!!menuLinks.length && (
            <nav
              aria-label="primary navigation desktop"
              className="hidden lg:block"
            >
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                {menuLinks.map((menuLink, index) => (
                  <li key={index}>
                    <CustomLink
                      href={menuLink.href}
                      ariaLabel={menuLink.label}
                      disabled={false}
                      label={menuLink.label}
                      target={menuLink.target}
                      className="transition-colors duration-300 hover:text-blue-500"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
