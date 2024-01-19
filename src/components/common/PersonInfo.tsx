import { Box, Divider, Typography } from '@mui/joy';
import { Children } from 'react';

interface Props {
  firstName: string,
  lastName: string,
  children: React.ReactNode
}

interface ChildrenProps {
  children: React.ReactNode;
}

function PersonInfo({ firstName, lastName, children }: Props) {
  const [avatar, chips, info] = Children.toArray(children);

  return (
    <Box sx={{ display: 'flex', height: '100%', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' my={3} mx={2}>
        {avatar}
        <Typography level='title-lg' my={2}>{firstName} {lastName}</Typography>

        <Box display='flex' flexDirection='column' alignItems='center' gap={1}>
          {chips}
        </Box>
      </Box>

      <Divider orientation='vertical' inset='context' sx={{ display: { xs: 'none', md: 'block' } }} />
      <Divider orientation='horizontal' inset='context' sx={{ display: { xs: 'block', md: 'none' } }} />

      <Box display='flex' flexDirection='column' overflow='auto' flexGrow={1} gap={2.5}>
        {info}
      </Box>
    </Box>
  );
}

const PersonInfoChild = ({ children }: ChildrenProps) => <>{children}</>;

PersonInfo.Avatar = PersonInfoChild;
PersonInfo.Chips = PersonInfoChild;
PersonInfo.Info = PersonInfoChild;

export default PersonInfo;
