import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";
import {
    Button,
    Field,
    Fieldset,
    Input,
    Label,
    Legend,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "../../../css/quill.css";

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Edit() {
    const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
    const [inputContent, setInputContent] = useState("");
    const [links, setLinks] = useState([]);
    const kontenRef = useRef(null);
    const editorRef = useRef(null);
    const inputLinksRef = useRef(null);
    useEffect(() => {
        if (editorRef.current) return;

        editorRef.current = new Quill(kontenRef.current, { theme: "snow" });
        editorRef.current.on("text-change", () => {
            setInputContent(editorRef.current.root.innerHTML);
        });
    }, [editorRef.current?.root.innerHTML]);

    return (
        <AdminCampusLernLayout>
            <form className="min-h-[calc(100vh+200px)]">
                <Fieldset className="mx-auto flex w-2/3 flex-col gap-y-9 rounded-lg px-7 py-12 shadow-lg">
                    <Legend className="text-center text-4xl font-bold">
                        Update Materi
                    </Legend>
                    <div className="flex flex-col gap-y-9">
                        <Field className="flex flex-col">
                            <Label className="text-xl">Universitas</Label>
                            <Input
                                type="text"
                                name="universitas"
                                className="rounded-lg"
                            />
                        </Field>
                        <Field className="flex flex-col">
                            <Label className="text-xl">Jurusan</Label>
                            <Input
                                className="rounded-lg"
                                type="text"
                                name="jurusan"
                            />
                        </Field>
                        <Field className="flex flex-col">
                            <Label className="text-xl">Matakuliah</Label>
                            <Input
                                className="rounded-lg"
                                type="text"
                                name="matakuliah"
                            />
                        </Field>

                        <Field className="relative flex flex-col">
                            <Label className="text-xl">Semester</Label>
                            <Listbox
                                value={selectedSemester}
                                onChange={setSelectedSemester}
                                name="semester"
                            >
                                <ListboxButton className="rounded-lg border border-[#6b7280] px-3 py-2 text-left data-[open]:border-none data-[open]:ring-2 data-[open]:ring-[#2563eb]">
                                    Semseter {selectedSemester}
                                </ListboxButton>
                                <ListboxOptions className="absolute top-[calc(100%+4px)] z-10 w-full cursor-pointer rounded-lg border border-[#6b7280] !bg-white py-2">
                                    {semesters.map((e) => (
                                        <ListboxOption
                                            key={e}
                                            value={e}
                                            className="rounded-lg px-3 py-1 hover:bg-lightBluePrimary hover:text-white data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                        >
                                            Semester {e}
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </Listbox>
                        </Field>
                        <div>
                            <label className="text-xl" htmlFor="konten">
                                Konten
                            </label>
                            <input
                                type="hidden"
                                value={inputContent}
                                name="inputKonten"
                            />
                            <div className="group rounded-lg">
                                <div
                                    id="konten"
                                    className="ql-container rounded-b-lg !border-[#6b7280] group-focus-within:border-2 group-focus-within:!border-lightBluePrimary"
                                    ref={kontenRef}
                                ></div>
                            </div>
                        </div>
                        <Field className="flex flex-col">
                            <Label className="text-xl">Link</Label>
                            <div className="flex items-center justify-between gap-3">
                                <Input
                                    ref={inputLinksRef}
                                    className="w-full rounded-lg"
                                    type="text"
                                />
                                <img
                                    src="/icon/add.svg"
                                    alt="icon add"
                                    className="size-10"
                                    onClick={() => {
                                        if (!inputLinksRef.current.value)
                                            return;
                                        setLinks([
                                            ...links,
                                            inputLinksRef.current.value,
                                        ]);
                                    }}
                                />
                            </div>
                            <ul className="mt-1 space-y-1">
                                {links.map((e, i) => (
                                    <div key={i} className="flex items-center">
                                        <li className="w-fit rounded-full bg-slate-200 p-0.5 px-3 text-blue-600 underline">
                                            {e}
                                        </li>
                                        <img
                                            onClick={() => {
                                                setLinks(
                                                    links.filter(
                                                        (link, index) =>
                                                            i !== index,
                                                    ),
                                                );
                                            }}
                                            src="/icon/cross.svg"
                                            alt="cross icon"
                                            className="size-5 cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </ul>
                        </Field>
                        <Button
                            type="submit"
                            className="rounded-lg bg-darkBlueSecondary px-3 py-2 font-medium text-white"
                        >
                            Update
                        </Button>
                    </div>
                </Fieldset>
            </form>
        </AdminCampusLernLayout>
    );
}
