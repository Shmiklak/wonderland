export default function Leaderboard(props) {
    return (
        <div className="leaderboard">
            <div className="leaderboard-title pretty-font gradient-text text-center">LEADERBOARD</div>
            <div className="leaderboard-table-wrapper">
                <table className="leaderboard-table">
                    <thead className='pretty-font'>
                    <tr>
                        <th>Name</th>
                        <th>Result</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    { props.data.map((item) => (
                        <tr>
                            <td>
                                {item.user.name}
                            </td>
                            <td>
                                {item.result}
                            </td>
                            <td>
                                {new Date(item.created_at).toLocaleDateString()} {new Date(item.created_at).toLocaleTimeString()}
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
