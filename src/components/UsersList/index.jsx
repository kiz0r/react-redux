import { connect } from 'react-redux';

const UsersList = ({ users, isLoading, error }) => {
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {!isLoading && !error && (
        <ul>
          {users.map(u => (
            <li key={u.id}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({ usersList }) => usersList;

export default connect(mapStateToProps)(UsersList);
