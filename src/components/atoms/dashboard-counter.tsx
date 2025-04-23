export default function DashBoardCounter (props: {
    label: string,
    value: number,
    color: 'red' | 'green' | 'yellow' | 'none'
}) {
    const { label, value, color } = props
    return (
        <div className="flex flex-col w-full items-center justify-center gap-8 px-16 py-8 bg-white rounded-lg relative">
            <span className={`absolute top-4 right-4 size-2 ${color === 'none' ? 'bg-muted' : color === 'red' ? 'bg-red-500' : color === 'green' ? 'bg-green-500' : 'bg-yellow-500'} rounded-full`}></span>
            <div className="flex flex-row gap-2 items-center justify-center">
            <span className="text-sm font-base text-muted-foreground">{label}</span>

            </div>
            <span className={`text-2xl font-semibold `}>{value}</span>
        </div>
    )
}