import React from "react";
import Image from "next/image";
import Link from "next/link";
// import SocialSignin from "@/components/shared/SocialSignin";
const page = () => {
  return (
    <div className="container mx-auto px-16 py-16 ">
      <div className="flex flex-row">
        <div className="grid grid-cols-2 gap-1  items-center">
          <div>
            <Image
              src="/assets/images/login/login.svg"
              height="540"
              width="540"
              alt="login image"
            />
          </div>
        </div>
        <div className="border-2 rounded-md  p-10 w-9/12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-10">
            Sign In
          </h6>
          {/* onSubmit={handleLogin} */}
          <form action="">
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-5 text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-3 text-center">or sign in with</h6>
            {/* <SocialSignin /> */}
            <h6 className="my-3 text-center">
              not have account ?{" "}
              <Link className="text-primary font-semibold" href={"/sigup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
