import CampusLernLayout from "@/Layouts/CampusLernLayout";
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Field,
    Label,
} from "@headlessui/react";
import { useState } from "react";

const univ = [
    { id: 1, name: "universitas lampung" },
    { id: 2, name: "universitas sriwijaya" },
    { id: 3, name: "universitas indonesia" },
    { id: 4, name: "universitas gajah mada" },
];

const majors = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
    const [selectedUniv, setSelectedUniv] = useState(null);
    const [query, setQuery] = useState("");

    const filteredUniv =
        query === ""
            ? univ
            : univ.filter((e) => {
                  return e.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <CampusLernLayout>
            <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-lightGreySecondary/10">
                <div className="flex w-full max-w-[1120px] items-center justify-between">
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold tracking-tight text-lightBluePrimary">
                            <span className="font-thin text-black">
                                Your Path to{" "}
                            </span>
                            Academic Success, Simplified
                        </h1>
                        <p className="text-lg text-darkGreySecondary">
                            Temukan timeline belajar yang dirancang untuk
                            mendukung jurusan dan universitas kamu. Campuslern
                            hadir untuk mempermudah perencanaan belajar agar
                            kamu fokus mencapai tujuan akademik.
                        </p>
                        <button className="flex h-12 items-center justify-center rounded-lg bg-lightBluePrimary px-5 text-lg font-semibold text-white">
                            Cari Kelas
                        </button>
                    </div>
                    <img
                        src="/image/hero_image.png"
                        alt="hero image"
                        height={500}
                    />
                </div>
            </div>
            <div className="mx-auto mt-20 space-y-14">
                <div className="mx-auto flex justify-center gap-x-3">
                    <label
                        htmlFor="search"
                        className="flex w-[550px] items-center rounded-xl bg-lightBlueSecondary px-5"
                    >
                        <img src="/icon/search.svg" alt="serach icon" />
                        <input
                            id="search"
                            type="text"
                            placeholder="Cari mata kuliah"
                            className="placeholder:text-darkGreySecondaryGreySecondary placeholder: w-full cursor-default border-none bg-transparent text-xl text-darkGreySecondary placeholder:text-xl focus:outline-none focus:ring-0"
                        />
                    </label>
                    <button className="rounded-xl bg-lightBluePrimary px-5 text-xl text-white">
                        Search
                    </button>
                </div>
                <div className="mx-auto flex max-w-[1120px] gap-x-4">
                    <div className="-translate-y-8">
                        <div className="flex">
                            <img src="/icon/filter.svg" alt="filter icon" />
                            <h2 className="text-2xl font-medium">Filter</h2>
                        </div>

                        <Field className="text-fontGrey rounded-xl border border-borderGrey p-6">
                            <Label>
                                <Combobox
                                    value={selectedUniv}
                                    onChange={setSelectedUniv}
                                    onClose={() => {
                                        setQuery("");
                                    }}
                                >
                                    <div className="flex items-center rounded-lg border border-borderGrey px-3 py-1">
                                        <ComboboxInput
                                            placeholder="Universitas..."
                                            className="border-none p-0 focus:ring-0"
                                            displayValue={(univ) => univ?.name}
                                            onChange={(event) =>
                                                setQuery(event.target.value)
                                            }
                                        />
                                        <ComboboxButton className="h-3 w-3">
                                            <img
                                                width={12}
                                                height={12}
                                                src="/icon/dropdown.svg"
                                                alt="dropdown image"
                                            />
                                        </ComboboxButton>
                                    </div>
                                    <ComboboxOptions className="mt-3 rounded-lg border border-borderGrey">
                                        {filteredUniv.map((e) => (
                                            <ComboboxOption
                                                className="cursor-pointer rounded-lg px-3 py-1 data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                                key={e.id}
                                                value={e}
                                            >
                                                {e.name}
                                            </ComboboxOption>
                                        ))}
                                    </ComboboxOptions>
                                </Combobox>
                            </Label>
                        </Field>
                    </div>
                    <div className="space-y-5">
                        <div className="grid grid-cols-2 gap-x-3 gap-y-9">
                            {majors.map((major) => (
                                <div
                                    key={major}
                                    className="flex flex-col gap-y-4 rounded-lg border border-lightGreySecondary p-6 shadow-xl"
                                >
                                    <div className="space-y-[1px]">
                                        <h3 className="text-2xl font-medium">
                                            Business Digital
                                        </h3>
                                        <p className="text-xs">
                                            Universitas Lampung
                                        </p>
                                    </div>
                                    <p className="rounded-md bg-lightBlueSecondary p-2.5">
                                        Jurusan Bisnis Digital mempelajari
                                        bisnis modern berbasis teknologi,
                                        inovasi digital, dan pemasaran online.
                                    </p>
                                    <div className="space-y-1 text-sm">
                                        <p>Key Takeways:</p>
                                        <ul className="flex list-inside list-disc space-x-4 pl-3">
                                            <li>Digital marketing tools</li>
                                            <li>leadership</li>
                                        </ul>
                                    </div>
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
            </div>
        </CampusLernLayout>
    );
}
