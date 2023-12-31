import { Box, Card, ColorPaletteProp, Typography } from '@mui/joy';

interface Props {
  color?: ColorPaletteProp,
  label: string,
  value: number,
  children?: React.ReactNode
}

function CounterCard({ color = 'primary', value, label, children }: Props) {
  return (
    <Card variant='solid' color={color} sx={{ minHeight: 100, boxShadow: 'sm', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      {children}
      <Box>
        <Typography level='h3' textColor='common.white'>{value}</Typography>
        <Typography level='body-md' textColor='common.white'>{label}</Typography>
      </Box>
    </Card>
  );
}

export default CounterCard;