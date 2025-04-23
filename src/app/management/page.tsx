import DashBoardCounter from "@/components/atoms/dashboard-counter";
import LineChart from "@/components/molecules/charts/line-chart";
import { PieChart } from "@/components/molecules/charts/pie-chart";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/molecules/table";


const members = [
    {
        service: 'Pouko Pouko',
        calls: 500,
        limit: 700,
        status: 'Warning',
    },
    {
        service: 'Pouko Pouko',
        calls: 500,
        limit: 700,
        status: 'Warning',
    },
    {
        service: 'Pouko Pouko',
        calls: 500,
        limit: 700,
        status: 'Warning',
    },
]
 export default function Page() {
    return (
        <div className="flex flex-col gap-4 bg-background w-full">
            <div className="flex flex-row gap-4">
                <DashBoardCounter label="Total calls" value={100} color="none" />
                <DashBoardCounter label="Total normal services " value={10} color="green" />
                <DashBoardCounter label="Total unusual services" value={60} color="yellow" />
                <DashBoardCounter label="Total alerting services" value={1} color="red" />
            </div>
            <div className="flex flex-row gap-4 w-full">
                <LineChart/>
                <PieChart/>
            </div>
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Calls</TableHead>
                <TableHead>Limit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members?.map((member) => (
                <TableRow key={member.service}>
                  <TableCell>{member.service || '-'}</TableCell>
                  <TableCell>{member.calls || '-'}</TableCell>
                  <TableCell>{member.limit || '-'}</TableCell>
                  <TableCell>{member.status || '-'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
    );
}