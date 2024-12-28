import { useState } from "react";

export function ProductListing() {
  const token = document.cookie.split("=")[1];
  console.log(token);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [register, setRegister] = useState(false);

  const handleClick = async (e) => {
    const token = document.cookie.split("=")[1];
    console.log(token);
    e.preventDefault(); // Prevent form submission

    // Sending the POST request to create the product
    await fetch("http://localhost:30036/admin/product", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        price,
        imgURL
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.success) { // Assuming the API returns a success field
          setRegister(true); // Set register to true upon successful registration
        } else {
          setRegister(false); // Handle error case if needed
        }
      })
      .catch((error) => {
        console.log(error);
        setRegister(false); // Handle error case
      });
  };

  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
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
              onClick={handleClick} // Pass the event here
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
