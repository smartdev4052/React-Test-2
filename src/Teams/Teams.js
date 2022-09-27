import Team from "./Team";

const Teams = ({
  teams
}) => {
  return (
    <div>
      <h2> Teams </h2>
      <table aria-label="Example of overflowing table cells">
        <thead>
          <tr>
            <th>Name</th>
            <th>Member Count</th>
          </tr>
        </thead>
        <tbody>
          {
            teams && teams.map(team => <Team teamDetail={ team } key={ team.id }/>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Teams;