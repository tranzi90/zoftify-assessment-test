import { FC } from "react";
import { Pagination } from "antd";

interface IPaginator {
    current: number;
    limit: number;
    total: number;
    handleChange: (e: string) => void;
}

const Paginator: FC<IPaginator> = ({ current, limit, total, handleChange }) => {
    return (
        <div className="customPagination">
            <Pagination
                current={+current}
                onChange={(e) => handleChange(`${e}`)}
                pageSize={limit}
                total={total}
            />
        </div>
    );
};

export default Paginator;
