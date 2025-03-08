import { ReactNode } from 'react';

interface PopularProps {
    children: ReactNode;
}

function Popular(props: PopularProps) {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};

export default Popular;