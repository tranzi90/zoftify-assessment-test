import type { NextPage } from 'next'
import Header from '../components/Header'
import Container from '../components/Container'
import Table from '../components/UI/Table'
import SearchBar from '../components/UI/SearchBar'
import Link from 'next/link'
import React from 'react'
import FilterSet from '../components/UI/FilterSet'
import Paginator from '../components/UI/Paginator'

const Posts: NextPage = () => {
    return (
        <>
            <Header title="Posts" />
            <Container>
                <main>
                    <div className="flex flex-wrap items-center justify-between px-6 mb-3">
                        <SearchBar />
                        <Link
                            href="/create-post"
                            className="w-[163px] text-white text-center bg-primary-blue py-[10px] px-3 rounded-lg mt-0.5 cursor-pointer"
                        >
                            Create Post
                        </Link>
                    </div>
                    <FilterSet />
                    <Table />
                    <Paginator />
                </main>
            </Container>
        </>
    )
}

export default Posts
