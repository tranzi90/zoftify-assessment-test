import { useAppSelector } from '../../store/hook'
import React, { FC } from 'react'
import Filter from './Filter'
import { selectFilter, selectPosts } from '../../store/selectors'

const FilterSet: FC = () => {
    const posts = useAppSelector(selectPosts)

    const selectedFilter = useAppSelector(selectFilter)

    const draftPosts = posts.filter((post) => post.status === 'Draft')
    const publishedPosts = posts.filter((post) => post.status === 'Published')

    const filters = [
        {
            title: 'All statuses',
            count: posts.length,
        },
        {
            title: 'Draft',
            count: draftPosts.length,
        },
        {
            title: 'Published',
            count: publishedPosts.length,
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
