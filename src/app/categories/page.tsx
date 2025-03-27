import { getCategories } from "@/actions/category-actions";
import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function CategoriesPage() {
    const data: Array<Category> = await getCategories()

    return (
        <>
        <NavBar active="categorias"/>
            <main className="flex items-center justify-center">
                <div className=" bg-slate-900 rounded min-w-2/3 p-6 m-6">
                <div className="flex justify-between">
                    <h2 className="text-lg font-bold">Categorias</h2>
                    
                    <Button asChild>
                        <Link href="/categories/form">
                        <Plus/>
                            Nova Categoria
                        </Link>
                    </Button>
                </div>
                {data.map((category, index) =><CategoryItem key={index} category={category}/> )}
                </div>
            </main>
        </>
    )
}