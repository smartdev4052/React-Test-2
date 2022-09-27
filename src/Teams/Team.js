const Team = ({
    teamDetail
}) => {
    return (
        <tr >
            <td className="has-overflow">{teamDetail.name}</td>
            <td className="has-overflow">{teamDetail.member_count}</td>
        </tr>
    );
}

export default Team;