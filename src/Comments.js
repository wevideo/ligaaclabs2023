export function Comments() {
    const comments = [
        {id: 1, userId: 1, videoId: 1, message: "Comment 1"},
        {id: 2, userId: 1, videoId: 1, message: "Comment 2"}
    ];
    return (
        <div>
            <input type="text"/>
            <ul>
                {comments.map(({id, message}) => <li key={id}>{message}</li>)}
            </ul>
        </div>);
}