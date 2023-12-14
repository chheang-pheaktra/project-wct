import React from 'react';
const Create = () => {
    return (
    <div class="h-full">
                <section class="flex flex-col items-center pt-6">
                    <div
                        class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0  ">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Create an
                            account
                        </h1>
                        <form class="space-y-4 md:space-y-6" method="POST">
                            <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name Res</label>
                            <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="Emelia Erickson" required="" />
                            </div>
                            <div>
                            <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Description</label>
                            <textarea name="description" id="des" cols="20" rows="3" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 w-full p-2.5"></textarea> 
                            </div>
                            <div>
                            </div>
                            <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Create an account</button>
                        </form>
                        </div>
                    </div>
                </section>
    </div>
    );
}

export default Create;
