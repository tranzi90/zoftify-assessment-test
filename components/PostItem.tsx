const PostItem = () => {
    return (
        <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{timeAgo.format(new Date(Date.parse(item.date)))}</td>
            <td>
                <CustomStatus
                    value={item.status}
                    handleChange={(e) => {
                        dispatch(setPostStatus({ value: e, id: item.id }));
                    }}
                />
            </td>
        </tr>
    )
}

export default PostItem