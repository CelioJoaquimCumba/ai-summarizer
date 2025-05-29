import { Input } from "@/components/atoms/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/atoms/select";
import { Button } from "@/components/ui/button";


const abcd = [1,2,3,4]

export default function Settings() {
    return <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-4 bg-white rounded-md p-8">
        <h2 className="text-3xl font-medium">General  threshold</h2>
        <p>Give the threshold of warning and critical limits</p>
        <div className="flex flex-row gap-2">
            <Input label="Warning Limit" value={500}  />
            <Input label="Critical limit" value={1500} />
        </div>
    </div>
     <div className="flex flex-col gap-4 bg-white rounded-md p-8">
        <h2 className="text-3xl font-medium">Services</h2>
        <p>Give the threshold of warning and critical limits</p>
        <div className="flex w-full justify-end">
            <Button type="submit">Create Service</Button>
        </div>
        {
            abcd.map((item) => (
                <>
                <div key={item} className="flex flex-row gap-2">
            <Input label="Service" value={"Txuna Credito"} />
            <div className="flex flex-col gap-2">
                <p>Team</p>
                <Select key={"service"} defaultValue={"01/04/2025"}>
                <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pouko Pouko" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="01/04/2025">Pouko Pouko</SelectItem>
                <SelectItem value="02/04/2025">Mpesa</SelectItem>
                <SelectItem value="03/04/2025">Txuna Credito</SelectItem>
                </SelectContent>
            </Select>
            </div>
            <Input label="Warning limit" value={500}/>
            <Input label="Critical limit" value={1500} />
        </div>
        <div className="w-full h-0..5 bg-gray-200 rounded-md"></div>
                </>
            ))
        }
    </div>

    </div>;
}