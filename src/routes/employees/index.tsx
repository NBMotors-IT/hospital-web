import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Box, Card, Skeleton } from '@mui/joy';

import Breadcrumb from '../../components/common/Breadcrumb';
import EmployeePreview from '../../components/employees/EmployeePreview';
import { Employee } from '../../types/employee';
import { useEmployees } from '../../hooks/employee';
import ErrorDisplay from '../../components/common/ErrorDisplay';

function EmployeesListPage() {
  const { data, error, isLoading } = useEmployees();

  if (isLoading) {
    return (
      <>
        <Breadcrumb current='Employees' />

        <Card variant='plain' sx={{ boxShadow: 'sm' }}>
          <Box display='flex' flexDirection='column' gap={1} m={2}>
          {Array.from({ length: 3 }).map((_, i) => <Skeleton key={i} variant='text' level='h3' width={128} />,)}
          </Box>
        </Card>
      </>
    );
  }

  if (error) {
    return (
      <ErrorDisplay message='Could not load employees' />
    );
  }

  // @ts-expect-error Object.groupBy nie obslugiwane przez czesc przegladarek, ale jest git
  const employeesGrouped = Object.groupBy(data, ({ department }) => department);

  return (
    <>
      <Breadcrumb current='Employees' />

      <Card variant='plain' sx={{ boxShadow: 'sm' }}>
        <Box display='flex' flexDirection='column' gap={1}>
          <AccordionGroup disableDivider size='lg'>
            {Object.entries<Employee[]>(employeesGrouped).map(([department, employees]) => (
              <Accordion key={department}>
                <AccordionSummary variant='plain' color='primary'>
                  {department} ({employees.length})
                </AccordionSummary>
                <AccordionDetails>
                  {employees.map((employee) => (
                    <EmployeePreview key={employee.id} employee={employee} />
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionGroup>
        </Box>
      </Card>
    </>
  );
}

export default EmployeesListPage;
