'use client';
import React, { ReactNode } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Text } from '@radix-ui/themes';

type TBreadCrumbProps = {
    homeElement: ReactNode;
    separator: ReactNode;
    containerClasses?: string;
    listClasses?: string;
    activeClasses?: string;
    capitalizeLinks?: boolean;
};

export const NextBreadcrumb = ({
    homeElement,
    separator,
    containerClasses,
    listClasses,
    activeClasses,
    capitalizeLinks,
}: TBreadCrumbProps) => {
    const paths = usePathname();
    const pathNames = paths.split('/').filter((path) => path);

    return (
        <ul className={containerClasses}>
            <li className={listClasses}>
                <Link href={'/'}>{homeElement}</Link>
            </li>
            {pathNames.length > 0 && separator}
            {pathNames.map((link, index) => {
                const href = `/${pathNames.slice(0, index + 1).join('/')}`;
                const itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses;
                const itemLink = (
                    capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                ).replaceAll('-', ' ');
                return (
                    <React.Fragment key={index}>
                        <li className={itemClasses}>
                            {paths !== href ? <Link href={href}>{itemLink}</Link> : <Text>{itemLink}</Text>}
                        </li>
                        {pathNames.length !== index + 1 && separator}
                    </React.Fragment>
                );
            })}
        </ul>
    );
};
