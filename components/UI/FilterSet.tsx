import {useAppSelector} from "../../store/hook"
import React, {FC} from "react"
import Filter from "./Filter"

const FilterSet: FC = () => {
    const posts = useAppSelector(state => state.posts.posts)

    const selectedFilter = useAppSelector(state => state.posts.selectedFilter)

    const draftPosts = useAppSelector(
        state => state.posts.posts.filter((post) => post.status === 'Draft')
    )

    const publishedPosts = useAppSelector(
        state => state.posts.posts.filter((post) => post.status === 'Published')
    )

    const filters = [
        {
            title: "All statuses",
            count: posts.length
        },
        {
            title: "Draft",
            count: draftPosts.length
        },
        {
            title: "Published",
            count: publishedPosts.length
        },
    ]

    return (
        <div className="flex flex-wrap items-center px-6">
            {filters.map((filter) => (
                <Filter
                    key={filter.title}
                    title={filter.title}
                    count={filter.count}
                    isActive={filter.title === selectedFilter}
                />
            ))}
        </div>
    )
}

export default FilterSet
