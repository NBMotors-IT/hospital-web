import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Box, Card } from '@mui/joy';

import Breadcrumb from '../../components/common/Breadcrumb';
import EmployeePreview from '../../components/employees/EmployeePreview';
import { Employee } from '../../types/employee';
import { useEmployees } from '../../hooks/employee';
import LoadingIndicator from '../../components/common/LoadingIndicator';

function EmployeesListPage() {
  const { data, error, isLoading } = useEmployees();

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  if (error) {
    return (
      <>
        TODO: Error message here...
      </>
    );
  }

  // @ts-expect-error Object.groupBy nie obslugiwane przez czesc przegladarek, ale jest git
  const employeesGrouped = Object.groupBy(data, ({ department }) => department);

  return (
    <>
      <Breadcrumb current='Employees' />

      <Card>
        <Box display='flex' flexDirection='column' gap={1}>
          <AccordionGroup disableDivider size='lg'>
            {Object.entries<Employee[]>(employeesGrouped).map(([department, employees]) => (
              <Accordion key={department}>
                <AccordionSummary>
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
