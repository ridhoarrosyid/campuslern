//problem
//jika tidak pilih filter

import CampusLernLayout from "@/Layouts/CampusLernLayout";
import {
    Button,
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Field,
    Label,
} from "@headlessui/react";
import { Link, router } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Home({
    majors,
    initialSearch,
    univData,
    firstUnivSelect,
}) {
    const [selectedUniv, setSelectedUniv] = useState(firstUnivSelect);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState(initialSearch || "");

    const filteredUniv =
        query === ""
            ? univData
            : univData.filter((e) => {
                  return e.name.toLowerCase().includes(query.toLowerCase());
              });

    function handleSearch(e) {
        e.preventDefault();
        const query = {};
        if (selectedUniv.id !== 0) {
            query.univ = selectedUniv.id;
        }
        if (search) {
            query.search = search;
        }
        router.get(route("list", query));
    }

    function handleFilter(univ) {
        setSelectedUniv(univ);
        const query = {};
        if (univ.id !== 0) {
            query.univ = univ.id;
        }
        if (search) {
            query.search = search;
        }

        router.get("/", query);
    }

    function handlePagination(url) {
        if (!url) return;
        const page = new URL(url).searchParams.get("page");
        const query = {};

        if (selectedUniv.id) query.univ = selectedUniv.id;
        if (search) query.search = search;
        if (page) query.page = page;

        router.get("/", query);
    }

    return (
        <CampusLernLayout>
            <div className="flex h-[calc(100vh-80px)] items-center justify-center bg-lightGreySecondary/10">
                <div className="flex w-full max-w-[1120px] items-center justify-between">
                    <div className="space-y-3">
                        <h1 className="text-5xl font-bold tracking-tight text-lightBluePrimary">
                            <span className="font-thin text-black">
                                Your Path to
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
                <form
                    onSubmit={handleSearch}
                    className="mx-auto flex justify-center gap-x-3"
                >
                    <label
                        htmlFor="search"
                        className="flex w-[550px] items-center rounded-xl bg-lightBlueSecondary px-5"
                    >
                        <img src="/icon/search.svg" alt="serach icon" />
                        <input
                            onChange={(e) => {
                                setSearch(e.target.value);
                            }}
                            id="search"
                            value={search}
                            type="text"
                            placeholder="Cari mata kuliah"
                            className="placeholder:text-darkGreySecondaryGreySecondary placeholder: w-full cursor-default border-none bg-transparent text-xl text-darkGreySecondary placeholder:text-xl focus:outline-none focus:ring-0"
                        />
                    </label>
                    <button className="rounded-xl bg-lightBluePrimary px-5 text-xl text-white">
                        Search
                    </button>
                </form>
                <div className="mx-auto flex max-w-[1120px] gap-x-4">
                    <div className="-translate-y-8">
                        <div className="flex">
                            <img src="/icon/filter.svg" alt="filter icon" />
                            <h2 className="text-2xl font-medium">Filter</h2>
                        </div>

                        <Field className="rounded-xl border border-borderGrey p-6 text-fontGrey">
                            <Label>
                                <Combobox
                                    value={selectedUniv}
                                    onChange={handleFilter}
                                    onClose={() => {
                                        setQuery("");
                                    }}
                                >
                                    <div className="flex items-center rounded-lg border border-borderGrey px-3 py-1">
                                        <ComboboxInput
                                            placeholder="Universitas..."
                                            className="border-none p-0 focus:ring-0"
                                            displayValue={(univData) =>
                                                univData?.name
                                            }
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
                            {majors.data.map((major) => (
                                <div
                                    onClick={() => {
                                        router.get(`/${major.id}`);
                                    }}
                                    key={major.id}
                                    className="flex flex-col gap-y-4 rounded-lg border border-lightGreySecondary p-6 shadow-xl"
                                >
                                    <div className="space-y-[1px]">
                                        <h3 className="text-2xl font-medium">
                                            {major.name}
                                        </h3>
                                        <p className="text-xs">
                                            {major.university.name}
                                        </p>
                                    </div>
                                    <p className="rounded-md bg-lightBlueSecondary p-2.5">
                                        {major.description}
                                    </p>
                                    <div className="space-y-1 text-sm">
                                        <p>Key Takeways:</p>
                                        <ul className="flex list-inside list-disc space-x-4 pl-3">
                                            {major.key_takeaways.map((e) => (
                                                <li key={e.id}>{e.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {majors.total > majors.per_page && (
                            <div className="mx-auto flex w-fit gap-x-2 text-base font-medium leading-none text-darkGreySecondary drop-shadow-2xl">
                                {majors.links.map((e, i) => (
                                    <Button
                                        as="button"
                                        disabled={!e.url}
                                        onClick={() => {
                                            handlePagination(e.url);
                                        }}
                                        dangerouslySetInnerHTML={{
                                            __html: e.label,
                                        }}
                                        key={i}
                                        className={`p-2 disabled:opacity-50 ${e.active ? "rounded-md bg-lightBluePrimary p-2 text-white" : "rounded-sm"}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </CampusLernLayout>
    );
}
