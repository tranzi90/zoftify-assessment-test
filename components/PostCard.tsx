import { useAppDispatch } from '../store/hook'
import { setStatus } from '../store/postSlice'
import StatusSelect from './UI/StatusSelect'
import { FC } from 'react'
import { Post } from '../types/Post'
import { DateTime } from 'luxon'

const PostCard: FC<Post> = ({ id, title, status, date }) => {
    const dispatch = useAppDispatch()

    return (
        <div className="bg-white space-y-3 p-4 rounded-lg shadow">
            <div className="flex items-center space-x-2 text-sm">
                <div className="text-blue-500 font-bold hover:underline">
                    #{id}
                </div>
                <div className="text-gray-500">
                    {Date.parse(date)
                        ? DateTime.fromSQL(date).setLocale('en-GB').toRelative()
                        : date}
                </div>
                <div className="p-1.5 text-xs font-medium tracking-wider bg-primary-blue-light rounded-lg bg-opacity-50">
                    <StatusSelect
                        value={status}
                        onChange={(e) => {
                            dispatch(setStatus({ status: e, id }))
                        }}
                    />
                </div>
            </div>
            <div className="text-sm text-gray-700">{title}</div>
        </div>
    )
}

export default PostCard
