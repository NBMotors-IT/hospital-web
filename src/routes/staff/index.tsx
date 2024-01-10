import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Box, Card } from '@mui/joy';
import Breadcrumb from '../../components/common/Breadcrumb';
import StaffPreview from '../../components/staff/StaffPreview';
import { Employee } from '../../types/employee';

const staff: Employee[] = [
  { id: '0', name: 'Doctor', surname: 'McDoctorface', office: 'A123', specialisation: 'Surgeon', role: 'Medical Director', department: 'Surgery' },
  { id: '1', name: 'John', surname: 'Cutter', office: 'A21', specialisation: 'Surgeon', role: 'Doctor', department: 'Surgery' },
  { id: '2', name: 'Michael', surname: 'Brown', office: 'B10', specialisation: 'Neurosurgeon', role: 'Medical Director', department: 'Neurology' },
  { id: '3', name: 'Peter', surname: 'Smith', office: 'B42', specialisation: 'Anesthesiologist', role: 'Doctor', department: 'Neurology' },
  { id: '4', name: 'Sarah', surname: 'Connor', office: 'C75', specialisation: 'Orthopedist', role: 'Medical Director', department: 'Orthopedics' },
  { id: '5', name: 'Emily', surname: 'Jones', office: 'C90', specialisation: 'Orthopedic surgeon', role: 'Doctor', department: 'Orthopedics' },
  { id: '6', name: 'Olivia', surname: 'Taylor', office: 'A900', specialisation: 'Surgeon', role: 'Doctor', department: 'Surgery' }
];

function StaffListPage() {
  // @ts-expect-error Object.groupBy nie obslugiwane przez czesc przegladarek, ale jest git
  const staffGrouped = Object.groupBy(staff, ({ department }) => department);

  return (
    <>
      <Breadcrumb current='Staff' />

      <Card>
        <Box display='flex' flexDirection='column' gap={1}>
          <AccordionGroup disableDivider size='lg'>
            {Object.entries<Employee[]>(staffGrouped).map(([department, staff]) => (
              <Accordion key={department}>
                <AccordionSummary>
                  {department} ({staff.length})
                </AccordionSummary>
                <AccordionDetails>
                  {staff.map((employee) => (
                    <StaffPreview key={employee.id} employee={employee} />
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

export default StaffListPage;