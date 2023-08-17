import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
        flex
        flex-col
        min-h-full
        bg-gray-100
        py-12
        sm:px-6
        lg:px-8
        justify-center
    "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          alt="Logo"
          src="/images/logo.png"
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
        <h2
          className="
        mt-6
        text-center
        text-3xl
        font-bold
        text-gray-900
        "
        >
          Accedi al tuo account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
