import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";

const colors = ["bg-green-400", "bg-red-400", "bg-purple-400", "bg-blue-400"];

export default function DetailAdmin({ course }) {
    return (
        <AdminCampusLernLayout>
            <div className="mx-auto flex max-w-[1120px] flex-col gap-y-3 rounded-xl px-16 py-14 shadow-xl">
                <h1 className="text-3xl">{course.name}</h1>
                <p className="text-xl">{course.content}</p>
                <div className="relative">
                    <p className="mx-auto flex w-fit rounded-lg border-2 border-lightBluePrimary bg-white px-[6px] py-[5px] text-sm font-medium text-lightBluePrimary">
                        Sumber Terpercaya
                    </p>
                    <hr className="absolute top-1/2 -z-10 w-full -translate-y-1/2 border-t-2 border-lightBluePrimary" />
                </div>
                <div className="grid grid-cols-[max-content_max-content] items-center gap-x-3 gap-y-2">
                    {course.links.map((link, i) => {
                        const selectedColor = colors[colors.length % i];
                        return (
                            <Fragment key={link.id}>
                                <p className="rounded-lg bg-green-400 px-2 text-center">
                                    {link.tag}
                                </p>
                                <Link href={link.address}>{link.display}</Link>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
            <div className="mt-5 flex justify-end gap-2 font-semibold text-white">
                <button className="rounded-lg bg-[#FACC15] px-2 py-1">
                    Edit
                </button>
                <button className="rounded-lg bg-[#FF0004] px-2 py-1">
                    Delete
                </button>
            </div>
        </AdminCampusLernLayout>
    );
}
