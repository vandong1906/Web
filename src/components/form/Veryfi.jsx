import fetchData from "components/axiosFetch/fetchData";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Verify() {

    const [data, setData] = useState(0);
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [sucess, setSucess] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const handleRegiter = async () => {
            const code =otp.join("");
            const respon =  await fetchData.post("/user/register/verify",JSON.stringify({code}));
            console.log(respon);
            console.log("Entered OTP:", code);
            if(respon.status==200){
                navigate("/");
            }
            // setSucess(true);
        }
        handleRegiter();
    }
    const handleChange = (index, value) => {
        const newOtp = [...otp];
        if (/^\d*$/.test(value)) {
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 3) {
                const nextInput = document.querySelector(`input[name="otp${index + 1}"]`);
                if (nextInput) {
                    nextInput.focus();
                }
            }
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96 text-center">
                <div className="text-green-600 text-3xl mb-4">

                </div>
                <h1 className="text-gray-800 text-xl font-semibold mb-2">VERIFY YOUR EMAIL ADDRESS</h1>
                <hr className="my-4" />
                <p className="text-gray-600 mb-4">A verification code has been sent to</p>
                <p className="text-gray-800 font-semibold mb-4">******@peatix.com</p>
                <p className="text-gray-600 mb-4">Please check your inbox and enter the verification code below to verify your email address. The code will expire in 12:33</p>
                <div className="flex justify-center mb-4">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`otp${index}`}
                            className="border border-gray-300 rounded w-12 h-12 text-center mx-1"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                    ))}


                </div>
                <button className="bg-green-500 text-white py-2 px-4 rounded w-full mb-4" onClick={handleSubmit}>Verify</button>
                <div className="flex justify-between text-green-500">
                    <a href="#" className="hover:underline">Resend code</a>

                </div>
            </div>
        </div>
    );
}

export default Verify;