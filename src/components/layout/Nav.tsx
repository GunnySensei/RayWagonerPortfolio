import { NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/MobileNav';
import { competencies } from '@/content/competencies';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

// Plain nav-link styling shared by Home/About — underline marks active state,
// color/weight never change. See assets/DESIGN.md §4 Navigation.
const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('font-sans text-[20px] text-ink underline-offset-4 hover:underline', isActive && 'underline');

export function Nav() {
  return (
    <header className="w-full bg-canvas">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 px-6 py-6 md:px-10">
        {/* Site title is a link, not a heading — each page supplies its own real <h1>.
            See assets/DESIGN.md §3 semantic-heading note. */}
        <NavLink
          to="/"
          className="font-serif text-[30px] font-bold leading-[28.5px] text-ink no-underline"
        >
          {site.title}
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            {site.nav.home}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {site.nav.about}
          </NavLink>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{site.nav.portfolio}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex min-w-[280px] flex-col whitespace-nowrap">
                    {competencies.map((c) => (
                      <li key={c.slug}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={`/portfolio/${c.slug}`}
                            className="block px-[30px] py-[10px] font-sans text-[20px] text-ink no-underline hover:underline"
                          >
                            {c.navLabel}
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button asChild variant="filled">
            <NavLink to="/contact">{site.nav.contact}</NavLink>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
