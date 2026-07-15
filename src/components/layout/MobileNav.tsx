import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { competencies } from '@/content/competencies';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'font-sans text-[20px] text-ink underline-offset-4 hover:underline py-2',
    isActive && 'underline',
  );

// Collapses the nav below md — see assets/DESIGN.md §8 Responsive Behavior.
// Radix Dialog handles focus trap / Escape-to-close / aria-modal automatically.
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="flex items-center justify-center border border-forest p-2 text-forest md:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-ink/40" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-[85vw] max-w-sm flex-col gap-1 border-l border-forest bg-canvas p-6 focus:outline-none">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="font-serif text-[22px] font-bold text-ink">
              Menu
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="flex items-center justify-center border border-forest p-2 text-forest"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <NavLink to="/" end className={linkClass} onClick={() => setOpen(false)}>
            {site.nav.home}
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            {site.nav.about}
          </NavLink>

          <p className="mt-4 font-sans text-[16px] font-bold text-muted-ink">
            {site.nav.portfolio}
          </p>
          {competencies.map((c) => (
            <NavLink
              key={c.slug}
              to={`/portfolio/${c.slug}`}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {c.navLabel}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 border border-forest bg-forest px-[30px] py-[10px] text-center font-sans text-[20px] text-canvas no-underline"
          >
            {site.nav.contact}
          </NavLink>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
