import { styled } from '@mui/system';

const Circle = styled('div')(({theme}) => ({
    [theme.breakpoints.up('xs')] : {
        position: 'relative',
        fontSize: '2.5rem',
        cursor: 'pointer',
        marginLeft: '0.2em',
        zIndex: 1
    },
    [theme.breakpoints.up('sm')] : {
        position: 'relative',
        fontSize: '3rem',
        cursor: 'pointer',
        zIndex: 1
    },
    [theme.breakpoints.up('md')] : {
        position: 'relative',
        fontSize: '5rem',
        cursor: 'pointer',
        zIndex: 1
    }
  }))

export default Circle