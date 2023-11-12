'use client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';

export default function Bootstrap() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap');
    }, []);

    return null;
}
