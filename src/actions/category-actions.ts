"use server"

const API_URL = "http://localhost:8080/categories";

// sem o export fica global | com export só posso usar se chama-la
export async function  getCategories()  {
    const response =  await fetch(API_URL)
    return await response.json()
}

export async function createCategory(initialState: any, formData: FormData){
    const data = {
        name: formData.get("name"),
        icon: formData.get("icon")
    }
    const options = {
        method: "POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(API_URL, options)
}