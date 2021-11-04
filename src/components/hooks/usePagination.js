import {useMemo} from "react";

export const usePagination = (totalPages) => {
    let pageArray = [];
    const memoizedPageArray = useMemo(() => {
        for(let i = 0; i < totalPages; i++) {
            pageArray.push(i + 1);
        }
        return pageArray;
    }, [totalPages]);
    return memoizedPageArray;

}
