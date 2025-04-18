import CampusLernLayout from "@/Layouts/CampusLernLayout";
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const semesters = [1, 2, 3, 4, 5];
const subjects = [1, 2, 3, 4, 5, 6, 7, 8];

export default function List() {
    const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
    return (
        <CampusLernLayout>
            <h1 className="mx-auto mt-14 max-w-[1120px] text-[32px] font-medium">
                S1 Bisnis Digital
            </h1>
            <div className="mx-auto mt-5 max-w-[1120px]">
                <div className="border-fontBlue flex justify-between rounded-xl border px-12 py-6 text-2xl font-medium shadow-xl">
                    <div className="flex items-center justify-between gap-x-5">
                        <p className="text-fontBlue">Universitas</p>
                        <p className="w-[340px] rounded-lg border border-darkGreySecondary px-4 py-2 text-darkGreySecondary shadow-lg">
                            Universitas Lampung
                        </p>
                    </div>
                    <div className="flex items-center justify-between gap-x-5">
                        <p className="text-fontBlue">Semester</p>
                        <Listbox
                            value={selectedSemester}
                            onChange={setSelectedSemester}
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
                                className="mt-2 w-[340px] rounded-lg border border-darkGreySecondary text-lg text-darkGreySecondary"
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
                        {subjects.map((subject, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between rounded-lg border border-[#bbbbbb]/50 p-6 shadow-lg"
                            >
                                <p className="text-fontBlue w-[28%] text-xl">
                                    Facebook Ads
                                </p>
                                <div className="w-[20%] text-darkGreySecondary">
                                    <p>Terakhir diperbaharui</p>
                                    <p>12 maret 2025</p>
                                </div>
                                <p className="w-[20%] text-darkGreySecondary">
                                    120 akses
                                </p>
                                <img
                                    src="/icon/arrow_right.svg"
                                    alt="arrow right"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mx-auto flex w-fit gap-x-2 text-base font-medium leading-none text-darkGreySecondary drop-shadow-2xl">
                        <div className="rounded-md bg-lightBluePrimary p-2 text-white">
                            1
                        </div>
                        <div className="rounded-sm p-2">2</div>
                        <div className="rounded-sm p-2">3</div>
                    </div>
                </div>
            </div>
        </CampusLernLayout>
    );
}
