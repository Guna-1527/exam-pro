import Image from "next/image";
function Profile() {
  return (
    <div className="font-title">
      <div className="nav"></div>
      <div className="body flex flex-row w-screen h-screen">
        <div className="flex flex-1 flex-col gap-10 justify-center items-center">
          <div className="p-14 flex flex-col justify-center items-center gap-10 rounded-md shadow-2xl bg-white">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col flex-1 gap-2">
                <label className="font-sans text-[12px] font-semibold">
                  First name
                </label>
                <input
                  type="text"
                  placeholder="first name"
                  className="input text-xs h-10 bg-[#F5F5F5] rounded-md w-full max-w-xs"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className="font-sans text-[12px] font-semibold">
                  Last name
                </label>
                <input
                  type="text"
                  placeholder="last name"
                  className="input text-xs h-10 bg-[#F5F5F5] rounded-md w-full max-w-xs"
                />
              </div>
            </div>
            <div className="w-full flex gap-2 flex-col">
              <label className="font-sans text-[12px] font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input text-xs h-10 bg-[#F5F5F5] rounded-md w-full"
              />
            </div>
            <div className="address w-full flex gap-2 flex-col">
              <label className="font-sans text-[12px] font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input w-full text-xs h-10 bg-[#F5F5F5] rounded-md"
              />
            </div>
            <div className="address w-full flex gap-2 flex-col">
              <label className="font-sans text-[12px] font-semibold">
                Phone
              </label>
              <input
                type="number"
                placeholder="phone number"
                className="input w-full h-10 text-xs bg-[#F5F5F5] rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="right flex flex-1"></div>
      </div>
    </div>
  );
}

export default Profile;
