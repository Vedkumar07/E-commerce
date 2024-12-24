import { useContext, useState } from "react";
import axios from "axios";
import { CookieContext } from "./CookieInstance";

export function ProductListing() {
  const { token } = useContext(CookieContext) ; // Fallback if context is undefined
  console.log(token);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!token) {
      console.error("Token is not available.");
      return;
    }

    const configuration = {
      method: "post",
      url: "http://localhost:30036/admin/product", // Ensure the endpoint is correct
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        title,
        description,
        price,
        imgURL,
        creatorId: token, // Adjust the `creatorId` as per the API requirements
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        setRegister(true);
        window.location.href = "/ProductListed"; // Navigate after successful registration
      })
      .catch((error) => {
        console.error("Error while creating product:", error);
      });
  };

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
              Title
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="title"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
              Description
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
              Price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="price"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="imgURL" className="block text-sm/6 font-medium text-gray-900">
              Image URL
            </label>
            <div className="mt-2">
              <input
                id="imgURL"
                name="imgURL"
                type="text"
                required
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
                autoComplete="imgURL"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>

        {register ? (
          <p className="text-success">You are registered successfully.</p>
        ) : (
          <p className="text-danger">Not registered</p>
        )}
      </div>
    </>
  );
}
