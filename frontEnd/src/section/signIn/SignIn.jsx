import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const SignIn = () => {
  return (
    <div>
        <div className='w-[400px] h-[100vh] bg-bgColor rounded-lg flex flex-row justify-evenly items-center sm:h-[84vh] w-[400px]'>
            <div>
            <div className='font-[Shantell] text-gray-600 text-2xl'>Тавтай морил</div>
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
                <p
                    class="text-sm font-light text-gray-700 underline pl-1 mt-3"
                  >
                    Нууц үг мартсан?
                  </p>
                <button
                  type="submit"
                  class="w-full font-[Shantell] bg-pink border-solid border-1 border-black text-gray-600 hover:border-solid hover:border-1 hover:bg-bgColor rounded-lg hover:border-black mt-5"
                >
                  Нэвтрэх
                </button>
            </div>
        </div>
    </div>
  )
}
