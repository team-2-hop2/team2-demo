import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SignUp = () => {
  return (
    <div>
      <section>
        <div class="pt-5 mx-auto lg:py-0 flex flex-col justify-center min-w-min">
          <div class="w-[85vw] h-[90vh] bg-bgColor rounded-lg border flex flex-col justify-evenly items-center md:mt-0 sm:w-[450px] h-[900px] min-w-min xl:p-0">
            <div class="p-6 space-y-5 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-[Shantell] leading-tight tracking-tight text-gray-600 md:text-2xl">
                Шинэ хэрэглэгч үүсгэх
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"  
                  >
                    <TextField
                      id="standard-basic"
                      label="Email"
                      type="email"
                      variant="standard"
                    />
                  </Box>
                </div>
                <div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Нууц үг"
                      type="password"
                      variant="standard"
                    />
                  </Box>
                </div>
                <div>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Нууц үг давтах"
                      type="password"
                      variant="standard"
                    />
                  </Box>
                </div>
                <button
                  type="submit"
                  class="w-full font-[Shantell] bg-pink border-solid border-1 border-black text-gray-600 hover:border-solid hover:border-1 hover:bg-bgColor rounded-lg hover:border-black"
                >
                 Хэрэглэгч үүсгэх
                </button>
                <div className="flex justify-center">
                <p class="text-sm font-light text-gray-500">
                Та бүртгэлтэй бол{" "}
                </p>
                <p
                    class="text-sm font-light text-gray-700 underline pl-1"
                  >
                    Нэвтрэх
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
