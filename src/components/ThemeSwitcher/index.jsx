import { connect } from 'react-redux';
import { setTheme } from '../../store/slices/themeSlice';

const ThemeSwitcher = props => {
  const { isLight, changeTheme } = props;

  const themeBtnStyles = {
    backgroundColor: isLight ? '#000000' : '#ffffff',
    color: isLight ? '#ffffff' : '#000000',
  };

  const changeThemeHandler = () => {
    changeTheme(!isLight);
  };

  return (
    <div>
      <button style={themeBtnStyles} onClick={changeThemeHandler}>
        {isLight ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

const mapStateToProps = state => state.theme;

const mapDispatchToProps = dispatch => ({
  changeTheme: v => dispatch(setTheme(v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcher);
