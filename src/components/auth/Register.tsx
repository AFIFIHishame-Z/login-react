import { Card } from "primereact/card";
import React from "react";
import background from "../../assets/images/14.png";
export default function Register() {
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
      <div className="col-12">
        {/* Logo */}
        <div className="grid grid-nogutter my-3">
          <div className="col-12 flex justify-content-center py-3">Logo</div>
        </div>
        <div className="grid grid-nogutter">
          <div className="col-12 md:col-4 md:col-offset-4">
            <Card>
              <div className="grid">
                <div className="col-12">
                   <h3 className="font-bold text-xl text-center">
                    Sign in to Quatar22 App
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
