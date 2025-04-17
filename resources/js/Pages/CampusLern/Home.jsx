import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

const univ = [
    { id: 1, name: "universitas lampung" },
    { id: 2, name: "universitas sriwijaya" },
    { id: 3, name: "universitas indonesia" },
    { id: 4, name: "universitas gajah mada" },
];

export default function Home() {
    const searchRef = useRef(null);
    const inputRef = useRef(null);
    const [selectedUniv, setSelectedUniv] = useState(univ[0]);
    const [query, setQuery] = useState("");

    const inputFieldClick = (e) => {
        if (searchRef.current && searchRef.current.contains(e.target)) {
            inputRef.current?.focus();
        }
    };

    const filteredUniv =
        query === ""
            ? univ
            : univ.filter((e) => {
                  return e.name.toLowerCase().includes(query.toLowerCase());
              });

    return (
        <div>
            <header className="fixed top-0 flex w-full justify-center border-b-2 border-[#bababa] bg-white px-20 shadow-md">
                <div className="flex h-20 w-full max-w-[1120px] items-center justify-between">
                    <img
                        src="/logo/logo_header.png"
                        height={28}
                        alt="logo campuslern"
                    />
                    <ul className="flex gap-x-[30px] font-dmsans">
                        <li>Beranda</li>
                        <li>Kelas</li>
                        <li>Tentang Kami</li>
                        <li>Kontak</li>
                    </ul>
                </div>
            </header>
            <main className="mt-20 w-full">
                <div className="bg-lightGreySecondary/10 flex h-[calc(100vh-80px)] items-center justify-center px-20">
                    <div className="flex w-full max-w-[1120px] items-center justify-between">
                        <div className="space-y-3 font-dmsans">
                            <h1 className="text-lightBluePrimary text-5xl font-bold tracking-tight">
                                <span className="font-thin text-black">
                                    Your Path to{" "}
                                </span>
                                Academic Success, Simplified
                            </h1>
                            <p className="text-darkGreySecondary text-lg">
                                Temukan timeline belajar yang dirancang untuk
                                mendukung jurusan dan universitas kamu.
                                Campuslern hadir untuk mempermudah perencanaan
                                belajar agar kamu fokus mencapai tujuan
                                akademik.
                            </p>
                            <button className="bg-lightBluePrimary flex h-12 items-center justify-center rounded-lg px-5 text-lg font-semibold text-white">
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
                <div className="mx-auto mt-20 space-y-14 px-20">
                    <div className="mx-auto flex justify-center gap-x-3">
                        <div
                            className="bg-lightBlueSecondary flex w-[550px] items-center rounded-xl px-5"
                            ref={searchRef}
                            onClick={inputFieldClick}
                        >
                            <img src="/icon/search.svg" alt="serach icon" />
                            <input
                                ref={inputRef}
                                id="search"
                                type="text"
                                placeholder="Cari mata kuliah"
                                className="placeholder:text-darkGreySecondaryGreySecondary text-darkGreySecondary w-full cursor-default border-none bg-transparent font-dmsans text-xl placeholder:font-dmsans placeholder:text-xl focus:outline-none focus:ring-0"
                            />
                        </div>
                        <button className="bg-lightBluePrimary rounded-xl px-5 font-dmsans text-xl text-white">
                            Search
                        </button>
                    </div>
                    <div className="mx-auto flex max-w-[1120px] gap-x-4">
                        <div>
                            <div className="flex -translate-y-full">
                                <img src="/icon/filter.svg" alt="filter icon" />
                                <h2 className="font-sans text-2xl font-medium">
                                    Filter
                                </h2>
                            </div>
                            <div className="border-borderGrey rounded-xl border p-6">
                                <Combobox
                                    value={selectedUniv}
                                    onChange={setSelectedUniv}
                                    onClose={() => {
                                        setQuery("");
                                    }}
                                >
                                    <div>
                                        <ComboboxInput
                                            displayValue={(univ) => univ?.name}
                                            onChange={(event) =>
                                                setQuery(event.target.value)
                                            }
                                        />
                                        <ComboboxButton>
                                            {" "}
                                            <img
                                                src="/icon/dropdown.svg"
                                                alt="dropdown image"
                                            />
                                        </ComboboxButton>
                                    </div>
                                    <ComboboxOptions>
                                        {filteredUniv.map((e) => (
                                            <ComboboxOption
                                                key={e.id}
                                                value={e}
                                            >
                                                {e.name}
                                            </ComboboxOption>
                                        ))}
                                    </ComboboxOptions>
                                </Combobox>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <h3>Business Digital</h3>
                                        <p>Universitas Lampung</p>
                                    </div>
                                    <p>
                                        Jurusan Bisnis Digital mempelajari
                                        bisnis modern berbasis teknologi,
                                        inovasi digital, dan pemasaran online.
                                    </p>
                                    <div>
                                        <p>Key Takeways:</p>
                                        <ul>
                                            <li>Digital marketing tools</li>
                                            <li>leadership</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Business Digital</h3>
                                        <p>Universitas Lampung</p>
                                    </div>
                                    <p>
                                        Jurusan Bisnis Digital mempelajari
                                        bisnis modern berbasis teknologi,
                                        inovasi digital, dan pemasaran online.
                                    </p>
                                    <div>
                                        <p>Key Takeways:</p>
                                        <ul>
                                            <li>Digital marketing tools</li>
                                            <li>leadership</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>Business Digital</h3>
                                        <p>Universitas Lampung</p>
                                    </div>
                                    <p>
                                        Jurusan Bisnis Digital mempelajari
                                        bisnis modern berbasis teknologi,
                                        inovasi digital, dan pemasaran online.
                                    </p>
                                    <div>
                                        <p>Key Takeways:</p>
                                        <ul>
                                            <li>Digital marketing tools</li>
                                            <li>leadership</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}
