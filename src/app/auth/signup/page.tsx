import Link from "next/link";
import Image from "next/image";
import sign from "../../../../public/asset/img/dd.png";

function SignUp() {
  return (
    <div className="w-screen h-screen flex flex-row font-title">
      <div className="flex-1 w-screen h-screen flex flex-col justify-between p-16 items-center">
        <div className="flex justify-between w-full">
          <img
            className="w-[40px] h-[40px]"
            src="https://i.pinimg.com/736x/7c/5d/69/7c5d690c36b14aa2f341b2ebed2695ef.jpg"
            alt=""
          />
          <div className="flex">
            <p className="text-[12px]">
              Already have an account?{"  "}
            </p>
            <Link className="link link-neutral text-[12px] font-bold" href={"d"}> {" "}Join</Link>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-5 w-3/5 h-3/5">
          <h1 className="font-bold text-[32px]">Sign Up</h1>
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2">
              <label className="font-sans text-[14px] font-bold">
                First name
              </label>
              <input
                type="text"
                placeholder=""
                className="input h-7 bg-[#F5F5F5] rounded-md w-full max-w-xs"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <label className="font-sans text-[14px] font-bold">
                Last name
              </label>
              <input
                type="text"
                placeholder=""
                className="input h-7 bg-[#F5F5F5] rounded-md w-full max-w-xs"
              />
            </div>
          </div>
          <div className="email flex flex-col gap-2">
            <label className="font-sans text-[14px] font-bold">Email</label>
            <input
              type="email"
              placeholder=""
              className="input h-7 bg-[#F5F5F5] rounded-md w-full"
            />
          </div>
          <div className="email flex flex-col gap-2">
            <label className="font-sans text-[14px] font-bold">Password</label>
            <input
              type="password"
              placeholder=""
              className="input h-7 bg-[#F5F5F5] rounded-md w-full"
            />
            <p className="text-[10px]">forget password?</p>
          </div>
          <button className="btn btn-neutral text-[14px] font-semibold">
            Create Account
          </button>
        </div>
        <div className="h-[.5] bg-gray-200 mt-6 w-[56%]"></div>
        <div>
          <div className="flex gap-4">
            <button className="flex px-4 py-3 border border-gray-200 rounded-lg items-center gap-4 text-xs">
              <img
                className="w-[16px] h-[16px]"
                src="https://app.uizard.io/static/media/google.c17df322b408a9f3f31c4bc735c95e04.svg"
                alt=""
              />
              <p className="text-[12px]">Log in with Google</p>
            </button>
            <button className="flex px-4 py-3 border border-gray-200 rounded-lg items-center gap-4 text-xs">
              <img
                className="w-[16px] h-[16px]"
                src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png"
                alt=""
              />
              <p className="text-[12px]">Log in with Microsoft</p>
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-[#2B3440] flex justify-center items-center flex-1">
        <div className="w-4/5 ">
          <Image src={sign} alt="Sign up cover image" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
