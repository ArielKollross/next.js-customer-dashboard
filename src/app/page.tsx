"use client";

import { useState } from "react"

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    document: "",
    customer_gender: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData)

    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();
    // ...
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="h-screen bg-gray-800">
      <div className="container mx-auto my-20">

          <div className="mx-auto w-full">
            <form
              className="p-6 bg-gray-200 text-gray-950 w-[30rem]"
              onSubmit={handleSubmit}
            >
              <fieldset className="flex flex-col justify-center">

                <div className="py-4 w-full">
                  <input
                    className="w-full rounded-lg h-10 px-2 py-1"
                    type="text"
                    name="name"
                    placeholder="Nome"
                  />
                </div>

                <div className="py-4">
                  <input
                    className="w-full rounded-lg h-10 px-2 py-1"
                    type="text"
                    placeholder="Email" 
                    name="email"
                  />
                </div>

                <div className="py-4">
                  <input 
                    className="w-full rounded-lg h-10 px-2 py-1"
                    type="text"
                    placeholder="CPF"
                    name="document" 
                  />
                </div>

                <div className="py-4">
                  <fieldset className="">
                    <legend>Gênero</legend>
                    <div>
                      <input
                        id="customer_gender_male"
                        type="checkbox"
                        name="customer_gender"
                      />
                      <label htmlFor="customer_gender_male"> Homem </label>
                    </div>
                    <div>
                    <div>
                      <input
                        id="customer_gender_female"
                        type="checkbox"
                        name="customer_gender"
                      />
                      <label htmlFor="customer_gender_female"> Mulher </label>
                    </div>
                    </div>
                  </fieldset>
                </div>

                
              </fieldset>
              <div className="py-4">
                  <button type="submit" className="w-full bg-green-500 text-white font-bold">
                      <span>Enviar</span>
                  </button>
              </div>
            </form>
          </div>
      </div>
    </main>
  )
}
