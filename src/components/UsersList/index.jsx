import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../store/slices/usersSlice';

const UsersList = ({ users, isLoading, error, loadUsers }) => {
  useEffect(() => {
    loadUsers(1);
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {!isLoading && !error && (
        <ul>
          {users.map((u, index) => (
            <li key={index}>{JSON.stringify(u)}</li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = ({ usersList }) => usersList;

const mapDispatchToProps = dispatch => ({
  loadUsers: page => dispatch(getUsers(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
