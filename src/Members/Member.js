import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentTeam } from "../actions/TodoAction";

const Member = ({
    memberDetail, setCurrentTeam
}) =>   {
    return (
        <tr>
            <td >{memberDetail.first_name}</td>
            <td >{memberDetail.last_name}</td>
            <td >{memberDetail.email}</td>
            <td >
                <Link 
                    to="/team-detail" onClick={()=>setCurrentTeam(memberDetail.team.name)}>{memberDetail.team.name} </Link>
            </td>
        </tr>
    )
}

const mapDispatchToProps = {
    setCurrentTeam
}

export default connect(null, mapDispatchToProps)(Member);