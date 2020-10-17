import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Call({name, value}: { name: string, value: boolean | null }) {
    let variant;
    switch (value) {
        case true:
            variant = 'success';
            break;
        case false:
            variant = 'danger';
            break;
        default:
            variant = 'secondary';
    }
    return (
        <Button variant={variant}>{name}</Button>
    );
}
