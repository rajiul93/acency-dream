/* eslint-disable react/no-unknown-property */

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { errorMessage } from "../../../utils/errorMessage";
import { successMessage } from "../../../utils/successMessage";
const Form = () => {
  const [video, setVideo] = useState(null);
  const categoryItems = [
    {
      title: "Website Scraping",
    },
    {
      title: "Custom Bot & Script",
    },
    {
      title: "Web Application",
    },
    {
      title: "Website Design",
    },
    {
      title: "Web Development",
    },
    {
      title: "Graphic Design",
    },
    {
      title: "SEO",
    },

    {
      title: "Data Analyst",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const url = data.page_url;
    const seo= data.seo;
    const videoUrl1 = data.videoUrl1;
    const videoContent = data.videoContent;
    const category = data.category;
    const dataType = data.dataType;
    const description1 = data.description1;
    const description2 = data.description2;
    const firstTitle = data.firstTitle;
    const imageUrl1 = data.imageUrl1;
    const imageUrl2 = data.imageUrl2;
    const top_list_title = data.top_list_title;
    const topListDescription = data.topListDescription;
    const top_list_1 = data.top_list_1;
    const top_list_2 = data.top_list_2;
    const top_list_3 = data.top_list_3;
    const top_list_4 = data.top_list_4;
    const top_list_5 = data.top_list_5;
    const top_list_6 = data.top_list_6;
    const top_list = [top_list_1, top_list_2,top_list_3,top_list_4,top_list_5, top_list_6]
     const list_title_one = data.list_title_one;
    const listOne1 = data.listOne1;
    const listOne2 = data.listOne2;
    const listOne3 = data.listOne3;
    const listOne4 = data.listOne4;
    const listOne5 = data.listOne5;
    const listOne = [listOne1, listOne2, listOne3, listOne4,listOne5];
    const list_title_two = data.list_title_two;
    const listTwo_1 = data.listTwo_1;
    const listTwo_2 = data.listTwo_2;
    const listTwo_3 = data.listTwo_3;
    const listTwo_4 = data.listTwo_4;
    const listTwo_5 = data.listTwo_5;
    const listTwo = [listTwo_1, listTwo_2, listTwo_3, listTwo_4,listTwo_5];
    const pageSortDesc = data.pageSortDesc;
    const pageTitle = data.pageTitle;
    const secondTitle = data.secondTitle;
    const newData = {
      seo,url,
      topListDescription,
      list_title_one,
      list_title_two,
      top_list_title,
      top_list,
      category,
      videoUrl1,
      videoContent,
      dataType,
      description1,
      description2,
      firstTitle,
      imageUrl1,
      imageUrl2,
      pageSortDesc,
      pageTitle,
      secondTitle,
      listOne,
      listTwo,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/product`,
        newData,
        { withCredentials: true }
      );
      if (response.data.acknowledged) {
        successMessage("Your work has been saved");
      }
    } catch (error) {
      console.log(error)
      errorMessage("this character are not allow ${}[]*#!><");
    }
  }; 
  return (
    <div>
      <div className="bg-white border border-4 rounded-lg shadow relative m-10">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Add product</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          ></button>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border lg:grid grid-cols-2 items-center w-full gap-6  p-3 mb-4 rounded-lg">
              <label className="input input-bordered flex items-center gap-2 w-f">
                Page title
                <input
                  type="text"
                  className="grow"
                  {...register("pageTitle")}
                />
                {errors.pageTitle && (
                  <span className="text-error">This field is required</span>
                )}
              </label>
           
              <label className="input input-bordered flex items-center gap-2 w-f">
                Page sort description
                <input
                  type="text"
                  className="grow"
                  {...register("pageSortDesc")}
                />
                {errors.pageSortDesc && (
                  <span className="text-error">This field is required</span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 w-f">
                Page Url
                <input
                  type="text"
                  className="grow"
                  {...register("page_url",{required:true})}
                  placeholder="Don't use empty space"
                />
                {errors.page_url && (
                  <span className="text-error">This field is required</span>
                )}
              </label>
              <label className="input input-bordered flex items-center gap-2 w-f">
                SEO
                <input
                  type="text"
                  className="grow"
                  {...register("seo",{required:true})}
                  placeholder="enter your seo keyword"
                />
                {errors.seo && (
                  <span className="text-error">This field is required</span>
                )}
              </label>
              <select
                defaultValue=""
                className="select select-primary   max-w-xs"
                {...register("category")}
              >
                {errors.category && (
                  <span className="text-error">This field is required</span>
                )}

                <option disabled value="">
                  Select your category
                </option>
                {categoryItems.map((category, index) => (
                  <option key={index} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
              <select
                defaultValue=""
                className="select select-primary max-w-xs"
                {...register("dataType")}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  if (selectedValue === "product") {
                    setVideo(true);
                  } else {
                    setVideo(false);
                  }
                }}
              >
                {errors.dataType && (
                  <span className="text-error">This field is required</span>
                )}
                <option disabled value="">
                  Select your Data Type
                </option>
                <option value="portfolio">Portfolio</option>
                <option value="service">Service Item</option>
                <option value="product">Product Items</option>
              </select>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border p-4 mb-4">
              <input {...register("top_list_title")} type="text" placeholder="header list title" className="input input-bordered w-full " />
              <input {...register("top_list_1")} type="text" placeholder="header list one" className="input input-bordered w-full " />
              <input {...register("top_list_2")} type="text" placeholder="header list two" className="input input-bordered w-full " />
              <input {...register("top_list_3")} type="text" placeholder="header list three" className="input input-bordered w-full " />
              <input {...register("top_list_4")} type="text" placeholder="header list four" className="input input-bordered w-full " />
              <input {...register("top_list_5")} type="text" placeholder="header list five" className="input input-bordered w-full " />
              <input {...register("top_list_6")} type="text" placeholder="header list six" className="input input-bordered w-full " />
              <input {...register("topListDescription")} type="text" placeholder="description" className="input input-bordered w-full " />
              </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  First title
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Apple Imac 27”"
                  {...register("firstTitle")}
                />
                {errors.firstTitle && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Second Title
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Electronics"
                  {...register("secondTitle")}
                />
                {errors.secondTitle && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List title one
                </label>
                <input 

                  {...register("list_title_one")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                {errors.listOne1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List title two
                </label>
                <input 

                  {...register("list_title_two")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                {errors.listOne1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-1
                </label>
                <input
                  {...register("listOne1")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                {errors.listOne1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-1
                </label>
                <input
                  {...register("listTwo_1")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
                {errors.listTwo_1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-2
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listOne2")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-2
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listTwo_2")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-3
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listOne3")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-3
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listTwo_3")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-4
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listOne4")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-4
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listTwo_4")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-5
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listOne5")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-5
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("listTwo_5")}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your Image Url One
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("imageUrl1")}
                />
                {errors.imageUrl1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Your Image Url Two
                </label>
                <input
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  {...register("imageUrl2")}
                />
                {errors.imageUrl2 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              {video && (
                <>
               
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Your video Url One
                    </label>
                    <input
                      type="text"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      {...register("videoUrl1")}
                    />
                    
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="video-content"
                      className="text-sm font-medium text-gray-900 block mb-2"
                    >
                      Video Content
                    </label>
                    <input
                      type="text"
                      placeholder="Your video content paragraph "
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                      {...register("videoContent")}
                    />
                    
                  </div>
                  
                </>
              )}

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  First Details
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details"
                  {...register("description1")}
                ></textarea>
                {errors.description1 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Second Details
                </label>
                <textarea
                  id="product-details"
                  rows="6"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Details"
                  {...register("description2")}
                ></textarea>
                {errors.description2 && (
                  <span className="text-error">This field is required</span>
                )}
              </div>
            </div>
            <button
              className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Save all
            </button>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b"></div>
      </div>
    </div>
  );
};

export default Form;
