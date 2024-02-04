import { Card } from '@mui/joy';
import { Link, To } from 'react-router-dom';

interface Props {
  to: To,
  alignItems?: string,
  children?: React.ReactNode
}

function LinkCard({ to, alignItems = 'initial', children }: Props) {
  return (
    <Card variant='soft' color='primary' component={Link} to={to}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems,
        p: 1,
        backgroundColor: 'background.surface',
        ':hover': {
          backgroundColor: 'primary.plainHoverBg'
        },
        ':active': {
          backgroundColor: 'primary.plainActiveBg'
        },
        textDecoration: 'none',
        boxShadow: 'none'
      }}
    >
      {children}
    </Card>
  );
}

export default LinkCard;
