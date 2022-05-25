import React, { useRef } from "react";
import "./Login.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import background from "../../assets/images/14.png";
import { useForm } from "react-hook-form";

const wait = (duration: number = 1000) => {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

export default function Login() {
  const toastBC: any = useRef(null);
  const showSuccess = () => {
    toastBC.current.show({
      severity: "error",
      summary: "Username or password invalid!",
      sticky: false,
      className: "bg-red-400 text-white",
      closable: false,
      content: (
        <div className="flex flex-column" style={{ flex: "1" }}>
          <div className="text-center">
            <i
              className="pi pi-exclamation-triangle"
              style={{ fontSize: "3rem" }}
            ></i>
            <h4>Username or password invalid!</h4>
          </div>
        </div>
      ),
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const login = async (data: any) => {
    await wait(2000);
  };

  console.log(errors);

  return (
    <div
      className="grid grid-nogutter"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPositionY: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <Toast ref={toastBC} position="top-right" />
      <div className="col-12">
        {/* Logo */}
        <div className="grid grid-nogutter my-3">
          <div className="col-12 flex justify-content-center py-3">Logo</div>
        </div>
        {/* Login form */}
        <div className="grid grid-nogutter">
          <div className="col-12 lg:col-6 lg:col-offset-3 xl:col-4 xl:col-offset-4 p-2">
            <Card className="px-1 lg:px-5">
              <div className="grig">
                <div className="col-12">
                  <h3 className="font-bold text-xl text-center">
                    Sign in to Quatar22 App
                  </h3>
                  <h5 className="flex justify-content-center">
                    <span className="font-bold flex align-items-end">
                      <span className="mx-1 text-sm text-color-secondary">
                        New Here?
                      </span>
                      <Button
                        label="Create an Account"
                        className="p-button-link p-button-info p-0"
                      />
                    </span>
                  </h5>
                </div>
              </div>
              <form onSubmit={handleSubmit(login)}>
                <div className="grig">
                  <div className="col-12">
                    {/* Email/Username */}
                    <div className="grig">
                      <div className="col-12">
                        <div className="field">
                          <label
                            htmlFor="username1"
                            className="block font-semibold"
                          >
                            Username
                          </label>
                          <InputText
                            placeholder="Username"
                            id="username1"
                            className={`${
                              errors.username && "p-invalid"
                            } block w-full`}
                            {...register("username", {
                              required: "Username is required",
                              minLength: {
                                value: 3,
                                message: "The minimum possible is 3 symbols",
                              },
                              max: {
                                value: 50,
                                message: "The maximum possible is 50 symbols",
                              },
                            })}
                          />
                          <small
                            style={{
                              height: "1px",
                              visibility: errors.username
                                ? "visible"
                                : "hidden",
                            }}
                            id="username1-help"
                            className={`text-red-500 block`}
                          >
                            {errors.username && errors.username.message}
                          </small>
                        </div>
                      </div>
                    </div>
                    {/* Password */}
                    <div className="grig">
                      <div className="col-12">
                        <div className="field">
                          <label
                            htmlFor="password"
                            className="block font-semibold"
                          >
                            Password{" "}
                            <span>
                              <Button
                                label="Forgot password?"
                                className="p-button-link p-button-info p-0 text-sm"
                              />
                            </span>
                          </label>
                          <InputText
                            id="password"
                            placeholder="Password"
                            type={"password"}
                            className="block w-full"
                            {...register("password")}
                          />
                          <small id="username1-help" className="block">
                            Password is required!
                          </small>
                        </div>
                      </div>
                    </div>
                    {/* Button Submit form or Continue with Social Media */}
                    <div className="grid">
                      <div className="col-12">
                        {/* Submit button */}
                        <div className="grid">
                          <div className="col-12">
                            <Button
                              onClick={showSuccess}
                              disabled={isSubmitting}
                              label="Continue"
                              className="p-button-info text-lg w-full font-bold border-round-sm"
                            />
                          </div>
                        </div>
                        {/* Or Social Media */}
                        <div className="grid">
                          <div className="col-12">
                            <h3 className="text-center">
                              <span className="font-semibold">Or</span>
                            </h3>
                          </div>
                        </div>
                        {/* Facebook */}
                        <div className="grid">
                          <div className="col-12">
                            <Button className="p-button-outlined p-button-info w-full text-lg font-semibold flex justify-content-center">
                              <i className="pi pi-facebook px-2"></i>
                              <span className="px-3">Facebook</span>
                            </Button>
                          </div>
                        </div>
                        {/* Google */}
                        <div className="grid">
                          <div className="col-12">
                            <Button className="p-button-outlined p-button-info w-full text-lg font-semibold flex justify-content-center">
                              <i className="pi pi-google px-2"></i>
                              <span className="px-3">Google</span>
                            </Button>
                          </div>
                        </div>
                        {/* Twitter */}
                        <div className="grid">
                          <div className="col-12">
                            <Button className="p-button-outlined p-button-info w-full text-lg font-semibold flex justify-content-center">
                              <i className="pi pi-twitter px-2"></i>
                              <span className="px-3">Twitter</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
