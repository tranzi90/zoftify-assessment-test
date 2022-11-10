import type { NextPage } from 'next'
import Header from "../components/Header"
import Container from "../components/Container"
import Table from "../components/UI/Table"

const Posts: NextPage = () => {
  return (
    <>
      <Header title="Posts" />
      <Container>
        <main>
            <div className="flex flex-wrap items-center justify-between px-6 mb-3">
                header
                {/*<CustomSearch*/}
                {/*    search={searchInput}*/}
                {/*    setSearch={setSearchInput}*/}
                {/*    handleChange={() => handleChange("search", searchInput)}*/}
                {/*/>*/}
                {/*<CustomButton*/}
                {/*    width={163}*/}
                {/*    title="Create Post"*/}
                {/*    handleClick={() => {*/}
                {/*        router.push(LINKS.CREATEPOST);*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
            <div className="flex flex-wrap items-center px-6">
                filters
                {/*{switchers.map((item) => (*/}
                {/*    <CustomSwitcher*/}
                {/*        key={item.id}*/}
                {/*        title={item.title}*/}
                {/*        count={item.count}*/}
                {/*        isActive={status === item.id}*/}
                {/*        handleChange={() => handleChange("status", item.id)}*/}
                {/*    />*/}
                {/*))}*/}
            </div>
            <div className="px-6">
                table
                <Table />
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
