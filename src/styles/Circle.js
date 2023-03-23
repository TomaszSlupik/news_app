import { styled } from '@mui/system';

const Circle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        position: 'relative',
        fontSize: '3.5rem',
        cursor: 'pointer',
        marginLeft: '0.2em'
    },
    [theme.breakpoints.up('sm')] : {
        position: 'relative',
        fontSize: '3rem',
        cursor: 'pointer'
    },
    [theme.breakpoints.up('md')] : {
        position: 'relative',
        fontSize: '3rem',
        cursor: 'pointer'
    }
  }))

export default Circle