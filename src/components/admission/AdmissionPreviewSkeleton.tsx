import { Box, Skeleton } from '@mui/joy';

import LinkCard from '../common/LinkCard';

interface Props {
  count?: number
}

function AdmissionPreviewSkeleton({ count = 1 }: Props) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) =>
        <LinkCard key={i} to='#'>
          <Box display='flex' alignItems='center' gap={3}>
            <Skeleton variant='circular' width={64} height={64} />
            <Box display='flex' flexDirection='column' gap={0.3}>
              <Skeleton variant='text' width={160} />
              <Skeleton variant='text' width={128} level='body-sm' />
            </Box>
          </Box>

          <Box position='absolute' right={12} top={12}>
            <Skeleton variant='text' width={48} level='body-sm' />
          </Box>
        </LinkCard>,)}
    </>
  );
}

export default AdmissionPreviewSkeleton;
