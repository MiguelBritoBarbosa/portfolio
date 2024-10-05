'use client';
import { Container } from './styled';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Link from 'next/link';

interface PaginationContainerProps {
    totalPage: number;
    page: number;
}

export const PaginationContainer = ({ totalPage, page }: PaginationContainerProps) => {
    return (
        <Container className="flex justify-center mt-8">
            <Pagination
                count={totalPage}
                page={page}
                variant="text"
                shape="rounded"
                renderItem={(item) => {
                    return (
                        <PaginationItem
                            className=" rt-BaseButton rt-r-size-2 rt-variant-soft rt-Button cursor-pointer transition"
                            component={Link}
                            href={`?page=${item.page}`}
                            {...item}
                        />
                    );
                }}
            />
        </Container>
    );
};
