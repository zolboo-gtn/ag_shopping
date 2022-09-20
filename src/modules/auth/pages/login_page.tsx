//
import { ArrowSmLeftIcon } from "@heroicons/react/outline";
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import Link from "next/link";

//
import { classNames } from "common/utils";

//

export const LoginPage: NextPageWithLayout = () => {
  return (
    <div className="login-layout">
      <div className="h-full overflow-y-auto px-10">
        <div className={classNames("mx-auto w-full", "sm:max-w-[480px]")}>
          <LoginPageView />
        </div>
      </div>
      <div className="relative">
        <Image
          src="https://placeimg.com/1000/1000/people"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
  return (
    <div className="container mx-auto">
      <LoginPageView />
    </div>
  );
};

const LoginPageView: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-between gap-y-12 py-10">
      {/* leading */}
      <div className="flex w-full flex-col items-center gap-y-12">
        {/* header */}
        {/* <div className={classNames("flex w-full", "lg:hidden")}>
          <Link href="">
            <a className="btn btn-ghost btn-square bg-gray-100 text-black">
              <ArrowSmLeftIcon className="h-8 w-8" />
            </a>
          </Link>
        </div> */}
        {/* logo */}
        <div className="flex items-center gap-x-1.5">
          <div className="avatar">
            <div className="w-12 rounded-full bg-primary"></div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl leading-none">GARAGE.MN</h1>
            <small className="text-xs leading-none">ТАНЫ ДИЖИТАЛ ГАРАЖ</small>
          </div>
        </div>
        {/* form */}
        <form className="flex w-full flex-col gap-y-8">
          <fieldset className="flex flex-col gap-y-4">
            <input
              className={classNames(
                "input bg-gray-100 pl-10",
                "bg-[url('/assets/icons/person.svg')] bg-[length:40px_20px] bg-left bg-no-repeat bg-origin-padding"
              )}
              placeholder="Хэрэглэгчийн нууц үг"
            />
            <input
              className={classNames(
                "input bg-gray-100 pl-10",
                "bg-[url('/assets/icons/lock.svg')] bg-[length:40px_20px] bg-left bg-no-repeat bg-origin-padding"
              )}
              placeholder="Нууц үг"
              type="password"
            />
          </fieldset>
          <button className="btn btn-primary normal-case">Нэвтрэх</button>
          <div className="flex justify-center gap-x-1.5 text-gray-400">
            Нууц үг мартсан уу?
            <Link href="/auth/register">
              <a className="btn-link font-medium text-gray-500">Сэргээх</a>
            </Link>
          </div>
        </form>
      </div>
      {/* trailing */}
      <div className="flex w-full flex-col gap-y-2.5">
        <Link href="">
          <a className="btn bg-black normal-case">Log in with Apple</a>
        </Link>
        <Link href="">
          <a className="btn border-gray-100 bg-[#3b5998] normal-case">
            Log in with Facebook
          </a>
        </Link>
        <Link href="">
          <a className="btn btn-ghost border-gray-100 normal-case">
            Login as guest
          </a>
        </Link>
        <div className="divider">OR</div>
        <Link href="/auth/register">
          <a className="btn btn-ghost bg-gray-100 normal-case text-black">
            Бүртгэл үүсгэх
          </a>
        </Link>
      </div>
    </div>
  );
};
