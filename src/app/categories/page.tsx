import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";

async function  getCategories()  {
    const response =  await fetch("http://localhost:8080/categories")
    return await response.json()
}

//devolve uma promisse, por isso await

// const data = [
//     {
//         id:1,
//         icon:"FIAP",
//         name: "Educação"
//     },
//     {
//         id:2,
//         icon:"Bus",
//         name: "Transporte"
//     }
// ]

export default async function CategoriesPage() {
    const data: Array<Category> = await getCategories()

    return (
        <>
        <NavBar active="categorias"/>
            <main className="flex items-center justify-center">
                <div className=" bg-slate-900 rounded min-w-2/3 p-6 m-6">
                    <h2 className="text-lg font-bold">Categorias</h2>
                    {data.map((category, index) =><CategoryItem key={index} category={category}/> )}
                    
                   
                </div>
            </main>
        </>
    )
}