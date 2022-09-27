import { connect } from "react-redux";
import { Link } from "react-router-dom";
import memberData from '../Store/Members.json';

const TeamDetail = ({
    teamName
}) =>   {
    const members = memberData.members.filter(member => member.team.name === teamName);
    return (
        <>
        <div className='row'>
            <div className='col-3'>
                <h3> {teamName} </h3>
            </div>
            {
                members.length
                ?
                <ul className="p-list--divided">
                {
                    members.map(member => <li key={member.id} className="p-list__item">{ `${member.first_name} ${member.last_name}` }</li>)
                }
                </ul>
                :
                "No Todos"
            }
            <div className="col-3">
                <Link className="p-button--positive" to='/'> Back </Link>
            </div>
        </div>
        </>
    )
};

const mapStateToProps = (state) => ({
    teamName: state.Todos.currentTeam
});

export default connect(mapStateToProps, null)(TeamDetail);