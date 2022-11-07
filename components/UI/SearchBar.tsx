import { Input } from "antd";
import { FC } from "react";

const { Search } = Input;

interface ISearchBar {
    search: string;
    handleChange: () => void;
    setSearch: (e: string) => void;
}

const SearchBar: FC<ISearchBar> = ({ search, setSearch, handleChange }) => (
    <div className="customSearch">
        <Search
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            allowClear
            onSearch={handleChange}
        />
    </div>
);

export default SearchBar;
