"use client"

import { createCategory } from "@/actions/category-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useActionState } from "react";

const initialState = {
    values: {
        name: "",
        icon: ""
    }
}
export default function CategoriesFormPage() {
    const [state, formAction, pending] = useActionState(createCategory, initialState);
    return (
        <>
        <NavBar active="categorias"/>
            <main className="flex items-center justify-center">
                <div className=" bg-slate-900 rounded max-w[500px] p-6 m-6">
                    <h2 className="font-bold">Cadastrar Categoria</h2>
                    <form action={formAction} className="space-y-4 mt-6">
                        <Input name="name" placeholder="Nome da categoria"/>
                        <Input name="icon" placeholder="Ícone"/>
                        <div className="flex justify-around">
                            <Button variant="outline" asChild>
                                <Link href="/categories">
                                    Cancelar
                                </Link>
                            </Button>
                            <Button>Salvar</Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}