import axios from "axios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { errorMessage } from "../../utils/errorMessage";
import { successMessage } from "../../utils/successMessage";

const UpdateProduct = () => {
  const loadData = useLoaderData();
  
 


  const url = loadData.url;
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
    const seo = data.seo;
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
    const top_list = [
      top_list_1,
      top_list_2,
      top_list_3,
      top_list_4,
      top_list_5,
      top_list_6,
    ];

    const list_title_one = data.list_title_one;
    const listOne1 = data.listOne1;
    const listOne2 = data.listOne2;
    const listOne3 = data.listOne3;
    const listOne4 = data.listOne4;
    const listOne5 = data.listOne5;

    const listOne = [listOne1, listOne2, listOne3, listOne4, listOne5];
    const list_title_two = data.list_title_two;
    const listTwo_1 = data.listTwo_1;
    const listTwo_2 = data.listTwo_2;
    const listTwo_3 = data.listTwo_3;
    const listTwo_4 = data.listTwo_4;
    const listTwo_5 = data.listTwo_5;
    const listTwo = [listTwo_1, listTwo_2, listTwo_3, listTwo_4, listTwo_5];
    const pageSortDesc = data.pageSortDesc;
    const pageTitle = data.pageTitle;
    const secondTitle = data.secondTitle;
    const newData = {
      url,
      seo,
      category,
      videoUrl1,
      top_list_title,
      top_list,
      list_title_one,
      list_title_two,
      videoContent,
      topListDescription,
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
      const response = await axios.put(
        `${import.meta.env.VITE_API}/product/change/${url}`,
        newData,
        { withCredentials: true }
      );
      if (response.data.acknowledged) {
        successMessage("Your work has been saved");
      }
    } catch (error) {
      errorMessage("Your Request Fail");
    }
  };
 
  if (Object.keys(loadData).length === 0) {
    console.log(Object.keys(loadData).length);
    return <>You age going something wrong</>;
  }
 
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
                  defaultValue={loadData?.pageTitle}
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
                  defaultValue={loadData?.pageSortDesc}
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
                  defaultValue={loadData?.url}
                  {...register("page_url", { required: true })}
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
                  defaultValue={loadData?.seo}
                  {...register("seo", { required: true })}
                  placeholder="enter your seo keyword"
                />
                {errors.seo && (
                  <span className="text-error">This field is required</span>
                )}
              </label>

              <select
                className="select select-primary   max-w-xs"
                defaultValue={loadData?.category || "Website Scraping"}
                {...register("category")}
              >
             
                {categoryItems.map((category, index) => (
                  <option key={index} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
              <select
                defaultValue={loadData?.dataType || "portfolio"}
                className="select select-primary max-w-xs"
                {...register("dataType")}
              >
                <option value="portfolio">Portfolio</option>
                <option value="service">Service Item</option>
                <option value="product">Product Items</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border p-4 mb-4">
              <input
                defaultValue={loadData?.top_list && loadData.top_list}
                {...register("top_list_title")}
                type="text"
                placeholder="header list title"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[0]}
                {...register("top_list_1")}
                type="text"
                placeholder="header list one"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[1]}
                {...register("top_list_2")}
                type="text"
                placeholder="header list two"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[2]}
                {...register("top_list_3")}
                type="text"
                placeholder="header list three"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[3]}
                {...register("top_list_4")}
                type="text"
                placeholder="header list four"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[4]}
                {...register("top_list_5")}
                type="text"
                placeholder="header list five"
                className="input input-bordered w-full "
              />
              <input
                defaultValue={loadData?.top_list && loadData.top_list[5]}
                {...register("top_list_6")}
                type="text"
                placeholder="header list six"
                className="input input-bordered w-full "
              />
              <input
                {...register("topListDescription")}
                type="text"
                placeholder="description"
                className="input input-bordered w-full "
              />
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
                  defaultValue={loadData?.firstTitle}
                  {...register("firstTitle")}
                />
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
                  defaultValue={loadData?.secondTitle}
                  {...register("secondTitle")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List title one
                </label>
                <input
                  defaultValue={loadData?.list_title_one}
                  {...register("list_title_one")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List title two
                </label>
                <input
                  defaultValue={loadData?.list_title_two}
                  {...register("list_title_two")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 1-1
                </label>
                <input
                  defaultValue={loadData?.listOne[0]}
                  {...register("listOne1")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  List item 2-1
                </label>
                <input
                  defaultValue={loadData?.listTwo[0]}
                  {...register("listTwo_1")}
                  type="text"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                />
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
                  defaultValue={loadData?.listOne[1]}
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
                  defaultValue={loadData?.listTwo[1]}
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
                  defaultValue={loadData?.listOne[2]}
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
                  defaultValue={loadData?.listTwo[2]}
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
                  defaultValue={loadData?.listOne[3]}
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
                  defaultValue={loadData?.listTwo[3]}
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
                  defaultValue={loadData?.listOne[4]}
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
                  defaultValue={loadData?.listTwo[4]}
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
                  defaultValue={loadData?.imageUrl1}
                  {...register("imageUrl1")}
                />
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
                  defaultValue={loadData?.imageUrl2}
                  {...register("imageUrl2")}
                />
              </div>
              {loadData.dataType === "product" && (
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
                      defaultValue={loadData?.videoUrl1}
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
                      defaultValue={loadData.videoContent}
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
                  defaultValue={loadData?.description1}
                  {...register("description1")}
                ></textarea>
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
                  defaultValue={loadData?.description2}
                  {...register("description2")}
                ></textarea>
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

export default UpdateProduct;
