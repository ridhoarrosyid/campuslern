import CampusLernLayout from "@/Layouts/CampusLernLayout";
import {
    Button,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { Link, router } from "@inertiajs/react";
import { useState } from "react";

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export default function List({ courses, major, semester }) {
    const [selectedSemester, setSelectedSemester] = useState(semester);
    function handleSemester(semester) {
        setSelectedSemester(semester);

        router.get(route("list", { majorId: major.id, semester }));
    }
    function handlePagination(url) {
        if (!url) return;
        const page = new URL(url).searchParams.get("page");
        const query = {};
        if (query) query.page = page;
        router.get(route("list", query));
    }
    function displayDate(date) {
        return new Date(date).toLocaleDateString("id-ID", {
            timeZone: "+07",
        });
    }

    return (
        <CampusLernLayout>
            <div className="relative mx-auto mt-14 max-w-[1120px] text-[32px] font-medium">
                <img
                    onClick={() => router.visit("/")}
                    src="/icon/arrow_left.svg"
                    alt="arrow left"
                    className="absolute size-12 -translate-x-[calc(100%+10px)] cursor-pointer"
                />
                <h1>{major.name}</h1>
            </div>
            <div className="mx-auto mt-5 max-w-[1120px]">
                <div className="flex justify-between rounded-xl border border-fontBlue px-12 py-6 text-2xl font-medium shadow-xl">
                    <div className="flex items-center justify-between gap-x-5">
                        <p className="text-fontBlue">Universitas</p>
                        <p className="w-[340px] rounded-lg border border-darkGreySecondary px-4 py-2 text-darkGreySecondary shadow-lg">
                            {major.university.name}
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-x-5">
                        <p className="text-fontBlue">Semester</p>
                        <Listbox
                            value={selectedSemester}
                            onChange={handleSemester}
                        >
                            <ListboxButton className="flex w-[340px] justify-between rounded-lg border border-darkGreySecondary px-4 py-2 text-darkGreySecondary shadow-lg">
                                <p>Semester {selectedSemester}</p>
                                <img
                                    src="/icon/dropdown.svg"
                                    alt="dropdown image"
                                />
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom"
                                className="mt-2 w-[340px] rounded-lg border border-darkGreySecondary bg-white text-lg text-darkGreySecondary"
                            >
                                {semesters.map((semester, i) => (
                                    <ListboxOption
                                        className="cursor-pointer rounded-lg px-4 py-1 data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                        key={i}
                                        value={semester}
                                    >
                                        Semester {semester}
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                    </div>
                </div>
                <div className="mt-12 space-y-7">
                    <div className="flex flex-col gap-y-4">
                        {courses.data.map((course, i) => (
                            <div
                                key={course.id}
                                className="flex items-center justify-between rounded-lg border border-[#bbbbbb]/50 p-6 shadow-lg"
                            >
                                <p className="w-[28%] text-xl text-fontBlue">
                                    {course.name}
                                </p>
                                <div className="w-[20%] text-darkGreySecondary">
                                    <p>Terakhir diperbaharui</p>
                                    <p>
                                        {displayDate(
                                            course.updated_at
                                                ? course.updated_at
                                                : course.created_at,
                                        )}
                                    </p>
                                </div>
                                <p className="w-[20%] text-darkGreySecondary">
                                    {course.access} akses
                                </p>
                                <Link href={`/${major.id}/${course.id}`}>
                                    <img
                                        src="/icon/arrow_right.svg"
                                        alt="arrow right"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                    {courses.total > courses.per_page && (
                        <div className="mx-auto flex w-fit gap-x-2 text-base font-medium leading-none text-darkGreySecondary drop-shadow-2xl">
                            {courses.links.map((link) => (
                                <Button
                                    className={`p-2 ${link.active ? "rounded-md bg-lightBluePrimary text-white" : "rounded-sm"}`}
                                    onClick={() => {
                                        handlePagination(link.url);
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </CampusLernLayout>
    );
}
