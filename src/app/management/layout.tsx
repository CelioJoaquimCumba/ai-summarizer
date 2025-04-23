import SideBar from "@/components/molecules/side-bar";

export default function ManagementLayout({ children }: { children: React.ReactNode }) {
    return <div className="flex flex-row h-screen overflow-hidden">
        <SideBar/>
        <main className="flex flex-col px-4 py-8 bg-gray-200 w-full overflow-y-auto">
            {children}
        </main>
        </div>;
}