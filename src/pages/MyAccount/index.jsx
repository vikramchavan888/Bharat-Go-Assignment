import { Layout } from "../../components/Layout";
import "./styles.css";

function MyAccount() {
  return (
    <>
      <Layout>
        <p className=" m-4">My Account</p>
        <div className="flex flex-col items-center justify-center w-2/4 h-3/4 border border-black rounded-lg MyAccount p-8">
          <figure className=" flex items-center justify-center flex-col">
            <p className="mb-5 mt-5 font-medium">Created by:</p>

            <img
              src="https://github.com/vikramchavan888/vikramchavan.com/blob/main/Assets/WhatsApp%20Image%202023-12-24%20at%201.32.16%20AM.jpeg?raw=true"
              alt="EdCenten0"
              className="border border-slate-950 rounded-full h-32 w-32"
            />

            <p className="font-bold mt-2 mb-2">Vikram singh chavan</p>
            <a
              href="https://github.com/vikramchavan888/Bharat-Go-Assignment"
              className=" font-light  underline"
            >@vikram888</a>
          </figure>
        </div>
      </Layout>
    </>
  );
}

export default MyAccount;
