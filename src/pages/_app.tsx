import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./components/Navbar";  // Assuming Navbar is in the components folder
 

export default function App({ Component, pageProps }: AppProps) {

  return (
    <div className="flex flex-col min-h-screen flex-grow">
      <Navbar />  {/* Render Navbar */}
      
      <Component {...pageProps} />
        {/* Render the page component */}
    </div>
  );
  }

