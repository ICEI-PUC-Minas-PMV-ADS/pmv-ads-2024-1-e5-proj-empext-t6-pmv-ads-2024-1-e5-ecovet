// https://mui.com/material-ui/customization/theming/#themeprovider
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: '#1D4FD8'
      },
      secondary: {
        main: '#DFFF02'
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow:  "0 10px 15px -1px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
          }
        }
      }
    }
  });


export default theme;