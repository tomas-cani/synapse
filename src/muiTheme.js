import { indigo500, indigo700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
    primary2Color: indigo700,
  },
  slider: {
    trackSize: 4,
  },

});

export default muiTheme;
