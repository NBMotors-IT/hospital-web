import { Card } from '@mui/joy';
import Breadcrumb from '../../components/common/Breadcrumb';
import { Employee } from '../../types/employee';
import EmployeeInfo from '../../components/staff/EmployeeInfo';

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
  ['/staff', 'Staff']
]);

function StaffInfoPage() {
  return (
    <>
      <Breadcrumb links={linksMap} current={`${employee.name} ${employee.surname}`} />

      <Card variant='plain' sx={{ width: '100%', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 'sm' }}>
        <EmployeeInfo employee={employee} />
      </Card>
    </>
  );
}

export default StaffInfoPage;
