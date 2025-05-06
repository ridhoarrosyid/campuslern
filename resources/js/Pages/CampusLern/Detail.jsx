import CampusLernLayout from "@/Layouts/CampusLernLayout";
import { Link } from "@inertiajs/react";
import { Fragment } from "react";

const colors = ["bg-green-400", "bg-red-400", "bg-purple-400", "bg-blue-400"];

export default function Detail({ course }) {
    return (
        <CampusLernLayout>
            <div className="relative mx-auto mt-14 flex max-w-[1120px] flex-col gap-y-3 rounded-xl px-16 py-14 shadow-xl">
                <img
                    onClick={() => window.history.back()}
                    src="/icon/arrow_left.svg"
                    alt="arrow left"
                    className="absolute size-9 -translate-x-[calc(100%+10px)] cursor-pointer"
                />
                <h1 className="text-3xl">{course.name}</h1>
                <p className="text-xl">{course.content}</p>
                <div className="relative">
                    <p className="mx-auto flex w-fit rounded-lg border-2 border-lightBluePrimary bg-white px-[6px] py-[5px] text-sm font-medium text-lightBluePrimary">
                        Sumber Terpercaya
                    </p>
                    <hr className="absolute top-1/2 -z-10 w-full -translate-y-1/2 border-t-2 border-lightBluePrimary" />
                </div>
                <div className="grid grid-cols-[max-content_max-content] items-center gap-x-3 gap-y-2">
                    {course.links.map((link, index) => {
                        const selectedColor = colors[index % colors.length];
                        return (
                            <Fragment key={link.id}>
                                <p
                                    className={`rounded-lg ${selectedColor} px-[10px] py-[5px] text-center`}
                                >
                                    {link.tag}
                                </p>
                                <Link href={link.address}>{link.display}</Link>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </CampusLernLayout>
    );
}
