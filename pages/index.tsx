import type { NextPage } from 'next'
import Header from "../components/Header"
import Container from "../components/Container"
import Table from "../components/UI/Table"
import SearchBar from "../components/UI/SearchBar"
import Button from "../components/UI/Button"
import Link from "next/link";
import React from "react";
import Filter from "../components/UI/Filter";

const Posts: NextPage = () => {
  return (
    <>
      <Header title="Posts" />
      <Container>
        <main>
            <div className="flex flex-wrap items-center justify-between px-6 mb-3">
                <SearchBar />
                <Link href="/create-post"
                      className="w-[163px] text-white text-center bg-primary-blue py-[10px] px-3 rounded-lg cursor-pointer"
                >
                    Create Post
                </Link>
            </div>
            <div className="flex flex-wrap items-center px-6">
                {/*{switchers.map((item) => (*/}
                    <Filter
                        // key={item.id}
                        title='all'
                        count={0}
                        isActive={true}
                        // handleChange={() => handleChange("status", item.id)}
                    />
                {/*))}*/}
            </div>
            <div className="px-6">
                table
                {/*<Table />*/}
            </div>
            <div className="flex flex-wrap items-center justify-between px-6 mt-10">
                Pagination
                {/*<CustomSelect*/}
                {/*    value={limit}*/}
                {/*    page={page}*/}
                {/*    limit={limit}*/}
                {/*    total={*/}
                {/*        status ? allData.counts[status] : allData.counts.draft + allData.counts.published*/}
                {/*    }*/}
                {/*    options={limits}*/}
                {/*    handleChange={(e) => handleChange("limit", `${e}`)}*/}
                {/*/>*/}
                {/*<CustomPagination*/}
                {/*    current={page}*/}
                {/*    limit={limit}*/}
                {/*    total={*/}
                {/*        status ? allData.counts[status] : allData.counts.draft + allData.counts.published*/}
                {/*    }*/}
                {/*    handleChange={(e) => handleChange("page", `${e}`)}*/}
                {/*/>*/}
            </div>
        </main>
      </Container>
    </>
  )
}

export default Posts
