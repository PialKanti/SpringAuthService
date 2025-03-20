import { IFooter } from './interface';
import { CustomLink } from '@/components/custom-link';

/** This is the footer section. It should render at the bottom of every page. */
export function Footer({ menuLinks }: IFooter) {
  return (
    <footer className="flex min-h-[3.75rem] items-center bg-black py-6 text-white backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col flex-wrap items-center justify-center gap-x-6 gap-y-1 text-white md:flex-row md:justify-between">
          {menuLinks && menuLinks.length > 0 && (
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {menuLinks.map((menuLink, index) => (
                <li key={index}>
                  <CustomLink
                    {...menuLink}
                    className="transition-colors duration-300 hover:text-blue-500"
                  />
                </li>
              ))}
            </ul>
          )}
          <p>&copy;{new Date().getFullYear()} Essential Ui</p>
        </div>
      </div>
    </footer>
  );
}
