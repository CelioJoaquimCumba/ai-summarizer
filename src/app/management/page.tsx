import DashBoardCounter from "@/components/atoms/dashboard-counter";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/atoms/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/select";
import LineChart from "@/components/molecules/charts/line-chart";
import { PieChart } from "@/components/molecules/charts/pie-chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/molecules/table";


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
const meta = {
    totalPages: 10,
    page: 1,
    pageSize: 10
}
 export default function Page() {
    return (
        <div className="flex flex-col gap-4 bg-background w-full">
          <div className="flex flex-row gap-4">
            <Select key={"service"} defaultValue={"daily"}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="01/04/2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">daily</SelectItem>
                <SelectItem value="monthly">monthly</SelectItem>
              </SelectContent>
            </Select>
            <Select key={"service"} defaultValue={"01/04/2025"}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="01/04/2025" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="01/04/2025">01/04/2025</SelectItem>
                <SelectItem value="02/04/2025">02/04/2025</SelectItem>
              </SelectContent>
            </Select>
          </div>
            <div className="flex flex-row gap-4">
                <DashBoardCounter label="Total calls" value={100} color="none" />
                <DashBoardCounter label="Total normal services " value={60} color="green" />
                <DashBoardCounter label="Total unusual services" value={10} color="yellow" />
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

                    <Pagination>
                      <PaginationContent>
                        {meta.page > 1 && (
                          <PaginationItem>
                            <PaginationPrevious 
                            //onClick={() => {}} 
                              />
                          </PaginationItem>
                        )}
                        {[...Array(meta.totalPages)].map((_, index) => (
                          <PaginationItem key={index + 1}>
                            <PaginationLink
                              isActive={index + 1 === meta.page}
                              //onClick={() => {}}
                            >
                              {index + 1}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        {meta.page < meta.totalPages && (
                          <PaginationItem>
                            <PaginationNext 
                            //onClick={() => {}} 
                            />
                          </PaginationItem>
                        )}
                      </PaginationContent>
                    </Pagination>
        </div>
    );
}