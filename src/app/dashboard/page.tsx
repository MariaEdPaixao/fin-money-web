import NavBar from "@/components/nav-bar";

export default function DashboardPage() {
    return (
        <>
        <NavBar active="dashboard"/>
            <main className="flex items-center justify-center">
                <div className=" bg-slate-900 rounded min-w-2/3 p-6 m-6">
                    <h2 className="text-lg font-bold">Dashboard</h2>
                </div>
            </main>
        </>
    )
}