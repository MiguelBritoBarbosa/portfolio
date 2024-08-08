import Link from 'next/link';
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { menuLinksData } from '@/config/domain/menu/menuLinks';

interface navbarTopProps {
    links: menuLinksData[] | undefined;
}

export const Navbar = ({ links }: navbarTopProps) => {
    if (links === undefined) {
        return <></>;
    }
    return (
        <Disclosure as="nav" className="bg-[--accent-a9] px-2 py-2">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-12 items-center justify-between sm:justify-center">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 px-3 text-xl hover:bg-[#3700cdc3] text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#3700cdc3]">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {links.map((link) => {
                                            return (
                                                <Link
                                                    key={link.id}
                                                    href={link.url}
                                                    className="hover:bg-[#3700cdc3] text-violet-300 dark:text-[#3700cdc3] dark:hover:bg-violet-300 rounded-md px-3 py-2 font-bold transition"
                                                    title={link.rotulo}
                                                >
                                                    {link.rotulo}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 'auto' }}
                                exit={{ height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden sm:hidden grid mt-1"
                            >
                                {links.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={link.url}
                                        className="hover:bg-[#3700cdc3] text-[#b6a2ff] dark:text-[#3700cdc3] dark:hover:bg-[#b6a2ff] rounded-md px-3 py-2 font-bold"
                                        title={link.rotulo}
                                    >
                                        {link.rotulo}
                                    </Link>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </Disclosure>
    );
};
