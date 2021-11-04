import React from 'react';
import {usePagination} from "../../hooks/usePagination";

const MyPagination = ({totalPage, page, changePage}) => {

    let pageArray = usePagination(totalPage);

    return (
        <div className="page__wrapper">
            {pageArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page__current' : 'page'}>
                        {p}
                </span>
            )}
        </div>
    );
};

export default MyPagination;