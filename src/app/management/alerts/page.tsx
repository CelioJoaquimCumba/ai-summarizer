import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/atoms/pagination";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/select";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/molecules/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

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
export default function Alerts() {

    return (
        <div className="flex flex-col gap-4 bg-background w-full">
          <Select key={"service"} defaultValue={"01/04/2025"}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="01/04/2025" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="01/04/2025">01/04/2025</SelectItem>
              <SelectItem value="02/04/2025">02/04/2025</SelectItem>
              <SelectItem value="03/04/2025">03/04/2025</SelectItem>
            </SelectContent>
          </Select>
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Service</TableHead>
                <TableHead>Calls</TableHead>
                <TableHead>Limit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members?.map((member) => (
                <TableRow key={member.service}>
                  <TableCell>{member.service || '-'}</TableCell>
                  <TableCell>{member.calls || '-'}</TableCell>
                  <TableCell>{member.limit || '-'}</TableCell>
                  <TableCell>{member.status || '-'}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button variant={"outline"}><Pencil className="size-4"/></Button>
                    <Button variant={"outline"}><Trash className="size-4"/></Button>
                  </TableCell>

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
    )
}  