import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="grid-password"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-600">
              <small>Name is required</small>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="grid-password"
            type="text"
            placeholder="Company Name"
            name="company"
            {...register("company", { required: true })}
          />
          {errors.company && (
            <span className="text-red-600">
              <small>Company Name is required</small>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="grid-password"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">
              <small>Email is required</small>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            id="grid-password"
            type="number"
            placeholder="Enter Your Phone"
            name="phone"
            {...register("phone", { required: true })}
          />
          {errors.phone && (
            <span className="text-red-600">
              <small>Phone is required</small>
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 py-5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary"
            rows={6}
            placeholder="Message"
            name="message"
            {...register("message", { required: true })}
          ></textarea>
          {errors.message && (
            <span className="text-red-600">
              <small>message is required</small>
            </span>
          )}
        </div>
      </div>
      <div>
        <input
          className="py-2 px-8 border-2 border-primary hover:bg-primary hover:text-white duration-300 rounded-md cursor-pointer uppercase"
          type="submit"
          value="Send"
        />
      </div>
    </form>
  );
};

export default Form;
