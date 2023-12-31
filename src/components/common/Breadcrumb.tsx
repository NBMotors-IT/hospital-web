import { KeyboardArrowRight } from '@mui/icons-material';
import { Breadcrumbs, Typography, Link as JoyLink } from '@mui/joy';
import { Link } from 'react-router-dom';

interface Props {
  links?: Map<string, string>,
  current: string
}

function Breadcrumb({ links = new Map<string, string>(), current }: Props) {
  return (
    <Breadcrumbs size='lg' separator={<KeyboardArrowRight />} sx={{ mb: '2' }}>
      {[...links].map(([val, key]) => (
        <JoyLink key={val} component={Link} to={val}>{key}</JoyLink>
      ))}
      <Typography>{current}</Typography>
    </Breadcrumbs>
  );
}

export default Breadcrumb;
