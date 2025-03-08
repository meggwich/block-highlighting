import { ReactNode } from "react";
import New from "./New";
import Popular from "./Popular";

interface WithPopularityType {
    children: ReactNode;
    viewCount: number;
}

function WithPopularity({ children, viewCount }: WithPopularityType) {
    if (viewCount < 100) {
        return <New>{children}</New>;
    } else if (viewCount <= 1000) {
        return <>{children}</>; 
    } else {
        return <Popular>{children}</Popular>;
    }
}

export default WithPopularity;