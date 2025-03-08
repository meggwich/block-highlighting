import { ReactNode } from 'react';

interface NewProps {
    children: ReactNode;
}

function New(props: NewProps) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
};

export default New;