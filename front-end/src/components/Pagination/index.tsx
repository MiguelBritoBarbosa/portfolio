'use client';
import { Container } from './styled';
import usePagination from '@mui/material/usePagination';
import { Button } from '@radix-ui/themes';
import Link from 'next/link';

interface PaginationContainerProps {
    totalPage: number;
    page: number;
}

export const PaginationContainer = ({ totalPage }: PaginationContainerProps) => {
    const { items } = usePagination({
        count: totalPage,
    });
    return (
        <Container className="flex justify-center mt-8">
            <ul className="list-none flex gap-2">
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <Button
                                variant="soft"
                                className={`cursor-pointer transition ${selected ? 'bg-[rgba(0,0,0,0.08)]' : ''}`}
                                {...item}
                            >
                                <Link href={`?page=${page}`}>{page}</Link>
                            </Button>
                        );
                    } else {
                        console.log(item);
                        children = (
                            <Button variant="soft" className="px-2 cursor-pointer transition" {...item}>
                                {item.disabled ? (
                                    type === 'next' ? (
                                        <i className="bi bi-arrow-right-short flex leading-[0] text-xl"></i>
                                    ) : (
                                        <i className="bi bi-arrow-left-short flex leading-[0] text-xl"></i>
                                    )
                                ) : (
                                    <Link href={`?page=${page}`}>
                                        {type === 'next' ? (
                                            <i className="bi bi-arrow-right-short flex leading-[0] text-xl"></i>
                                        ) : (
                                            <i className="bi bi-arrow-left-short flex leading-[0] text-xl"></i>
                                        )}
                                    </Link>
                                )}
                            </Button>
                        );
                    }
                    return <li key={index}>{children}</li>;
                })}
            </ul>
        </Container>
    );
};
