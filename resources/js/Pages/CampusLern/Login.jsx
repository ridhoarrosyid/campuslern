import { Field, Input, Label } from "@headlessui/react";
import { useState } from "react";

export default function Login() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#EBEDF0] px-20 py-10">
            <form className="flex flex-col gap-y-10 rounded-lg bg-white p-14 shadow-xl">
                <div className="relative">
                    <img
                        src="/logo/logo_header.png"
                        className="h-14"
                        alt="Logo CampusLern"
                    />
                    <span className="absolute -bottom-2 right-5">Admin</span>
                </div>
                <Field className="flex flex-col">
                    <Label>Email</Label>
                    <Input type="text" name="email" className="rounded-xl" />
                </Field>
                <Field className="flex flex-col">
                    <Label>password</Label>
                    <div className="relative">
                        <Input
                            type={isShow ? "password" : "text"}
                            name="password"
                            className="w-full rounded-xl"
                        />

                        <img
                            className="absolute right-4 top-1/2 h-8 -translate-y-1/2 text-darkGreySecondary"
                            src={
                                isShow ? "/icon/eye-slash.svg" : "/icon/eye.svg"
                            }
                            alt="password icon"
                            onClick={() => {
                                setIsShow(!isShow);
                            }}
                        />
                    </div>
                </Field>
                <button
                    className="h-10 rounded-xl bg-darkBlueSecondary text-white"
                    type="submit"
                >
                    Masuk
                </button>

                <p className="w-fit cursor-pointer underline">
                    Lupa Password/Username?
                </p>
            </form>
        </div>
    );
}
