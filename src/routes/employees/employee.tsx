import { Card } from '@mui/joy';

import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/common/Breadcrumb';
import EmployeeInfo from '../../components/employees/EmployeeInfo';
import { useEmployee } from '../../hooks/employee';
import { Employee } from '../../types/employee';

const linksMap = new Map<string, string>([
  ['/employees', 'Employees']
]);

function EmployeeInfoPage() {
  const params = useParams();
  const { data, error, isLoading } = useEmployee(params.employeeId as string);

  if (isLoading) {
    return (
      <>
        TODO: Loading animation here...
      </>
    );
  }

  if (error) {
    return (
      <>
        TODO: Error message here...
      </>
    );
  }

  const employee = data as Employee;

  return (
    <>
      <Breadcrumb links={linksMap} current={`${employee.name} ${employee.surname}`} />

      <Card variant='plain' sx={{ boxShadow: 'sm' }}>
        <EmployeeInfo employee={employee} />
      </Card>
    </>
  );
}

export default EmployeeInfoPage;
