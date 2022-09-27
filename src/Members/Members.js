import Member from './Member';

const Members = ({
  members
}) => {
  return (
    <div>
      <h2> Members </h2>
      <table >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {
            members && members.map(member => <Member memberDetail={member} key={member.id}/>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Members;