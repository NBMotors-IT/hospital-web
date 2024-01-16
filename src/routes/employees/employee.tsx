import { Card } from '@mui/joy';

import Breadcrumb from '../../components/common/Breadcrumb';
import EmployeeInfo from '../../components/employees/EmployeeInfo';
import { Employee } from '../../types/employee';

const employee: Employee = {
  id: '4',
  name: 'Sarah',
  surname: 'Connor',
  office: 'C75',
  specialisation: 'Orthopedist',
  role: 'Medical Director',
  department: 'Orthopedics',
  dateOfBirth: new Date('1959-12-31'),
  pzw: 'nie wiem co to jest...',
  phone: '123 456 789',
  email: 's.connor@wintertoad.xyz',
  address: '5542 Eileen Ave, Windsor Hills, Los Angeles',
  postcode: 'CA 90043'
};

const linksMap = new Map<string, string>([
  ['/employees', 'Employees']
]);

function EmployeeInfoPage() {
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
