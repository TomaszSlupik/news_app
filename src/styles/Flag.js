import { styled } from '@mui/system';

const Flag = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        position: 'relative',
        width: '40px',
        height: '40px',
        marginRight: '0.4em'
    },
    [theme.breakpoints.up('sm')] : {
        position: 'relative',
        width: '50px',
        height: '50px' 
    },
    [theme.breakpoints.up('md')] : {
        position: 'relative',
        width: '50px',
        height: '50px'
    }
  }))

export default Flag