import type { NextPage } from 'next'
import Header from "../components/Header"
import Container from "../components/Container"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

// Create formatter (English).
const timeAgo = new TimeAgo('en-US')
const milliseconds = 60 * 60 * 1000

let currentDate = new Date()

let time = new Date(currentDate.getTime() - 2 * milliseconds)
let week = currentDate
week.setDate(week.getDate() - 7)


const Posts: NextPage = () => {
  return (
    <>
      <Header title="Posts" />
      <Container>
        <main>
            <div className="flex flex-wrap items-center justify-between px-6 mb-3">
                header - {timeAgo.format(time, 'mini')} - {timeAgo.format(week)}
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
                {/*<table>*/}
                {/*    <thead>*/}
                {/*    <tr>*/}
                {/*        <th>ID</th>*/}
                {/*        <th>Title</th>*/}
                {/*        <th>Time</th>*/}
                {/*        <th>Status</th>*/}
                {/*    </tr>*/}
                {/*    </thead>*/}
                {/*    <tbody>*/}
                {/*    {allData.posts.map((item) => (*/}

                {/*    ))}*/}
                {/*    </tbody>*/}
                {/*</table>*/}
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
