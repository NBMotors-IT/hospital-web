import { Card } from '@mui/joy';
import { Link, To } from 'react-router-dom';

interface Props {
  to: To,
  alignItems?: string,
  children?: React.ReactNode
}

function LinkCard({ to, alignItems = 'initial', children }: Props) {
  return (
    <Card variant='soft' component={Link} to={to}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems,
        p: 1,
        backgroundColor: 'background.surface',
        ':hover': {
          backgroundColor: 'neutral.plainHoverBg'
        },
        ':active': {
          backgroundColor: 'neutral.plainActiveBg'
        },
        textDecoration: 'none'
      }}
    >
      {children}
    </Card>
  );
}

export default LinkCard;
