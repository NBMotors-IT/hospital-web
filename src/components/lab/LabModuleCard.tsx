import { Card, Typography } from '@mui/joy';
import { Link, To } from 'react-router-dom';

interface Props {
  to: To,
  text: string,
  children?: React.ReactNode
}

function LabModuleCard({ to, text, children }: Props) {
  return (
    <Card variant='plain' color='primary' component={Link} to={to}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        height: 200,
        textDecoration: 'none',
        boxShadow: 'sm',
        backgroundColor: 'background.surface',
        ':hover': {
          boxShadow: 'lg',
          backgroundColor: 'primary.plainHoverBg'
        },
        ':active': {
          backgroundColor: 'primary.plainActiveBg'
        }
      }}
    >
      {children}
      <Typography textAlign='center' level='title-md'>{text}</Typography>
    </Card>
  );
}

export default LabModuleCard;
