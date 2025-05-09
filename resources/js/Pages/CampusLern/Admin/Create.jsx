import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";
import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
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
import "../../../../css/quill.css";
import { router, usePage } from "@inertiajs/react";

const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Create({ dataSelects }) {
    const { flash, errors } = usePage().props;

    const [values, setValues] = useState({
        course_name: "",
        major_id: 0,
        university_id: 0,
        course_semester: 1,
        course_content: "",
        links: [],
    });
    const [universityValues, setUniversityValues] = useState({
        university_name: "",
    });
    const [majorValues, setMajorValues] = useState({
        major_university_id: 0,
        major_name: "",
        major_description: "",
        major_keyTakeaways: [],
    });

    const [selectedSemester, setSelectedSemester] = useState(semesters[0]);
    const [selectedUniversity, setSelectedUniversity] = useState({
        id: 0,
        name: "Pilih University",
    });
    const [selectedMajor, setSelectedMajor] = useState({
        id: 0,
        name: "Pilih Jurusan",
    });
    const [tagLink, setTagLink] = useState("");
    const [displayLink, setDisplayLink] = useState("");
    const [urlLink, setUrlLink] = useState("");
    const [keyTakeaways, setKeyTakeaways] = useState("");
    const [isUniversityOpen, setIsUniversityOpen] = useState(false);
    const [isMajorOpen, setIsMajorOpen] = useState(false);

    const dataMajors = dataSelects.majors.filter((major) => {
        return major.university_id == selectedUniversity.id;
    });

    const kontenRef = useRef(null);
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) return;

        editorRef.current = new Quill(kontenRef.current, { theme: "snow" });
        editorRef.current.on("text-change", () => {
            setValues((prev) => ({
                ...prev,
                course_content: editorRef.current.root.innerHTML,
            }));
        });
    }, [editorRef.current?.root.innerHTML]);

    useEffect(() => {
        if (flash.success) {
            alert(flash.success);

            console.log(flash.success);
        }
        if (errors) {
            console.log(errors);
        }
    }, [flash, errors]);

    function handleAddLink() {
        const localTagLink = tagLink.trim();
        const localDisplayLink = displayLink.trim();
        const localUrlLink = urlLink.trim();

        if (!localTagLink || !localUrlLink) return;
        if (values.links.some((link) => link.link_address === localUrlLink))
            return;

        setValues({
            ...values,
            links: [
                {
                    address: localUrlLink,
                    tag: localTagLink,
                    display: localDisplayLink || localUrlLink,
                },
                ...values.links,
            ],
        });
        setDisplayLink("");
        setUrlLink("");
        setTagLink("");
    }
    function handleAddKeyTakeaways() {
        const keyTakeawaysData = keyTakeaways.trim();
        if (majorValues.major_keyTakeaways.some((e) => e === keyTakeawaysData))
            return;

        setMajorValues({
            ...majorValues,
            major_keyTakeaways: [
                ...majorValues.major_keyTakeaways,
                keyTakeaways,
            ],
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/admin/createCourse", values, {
            onSuccess: () => {
                setValues({
                    course_name: "",
                    major_id: null,
                    university_id: null,
                    course_semester: 1,
                    course_content: "",
                    links: [],
                });
                editorRef.current.root.innerHTML = "";
                setSelectedSemester(semesters[0]);
                setSelectedUniversity({ id: 0, name: "Pilih University" });
                setSelectedMajor({ id: 0, name: "Pilih Jurusan" });
                setDisplayLink("");
                setTagLink("");
                setUrlLink("");
            },
        });
    }
    function handleUniversitySubmit(e) {
        e.preventDefault();
        router.post("/admin/createUniversity", universityValues, {
            onSuccess: () => {
                setUniversityValues({ university_name: "" });
                setIsUniversityOpen(false);
            },
        });
    }
    function handleMajorSubmit(e) {
        e.preventDefault();
        router.post("/admin/createMajor", majorValues, {
            onSuccess: () => {
                setMajorValues({
                    major_university_id: 0,
                    major_name: "",
                    major_description: "",
                    major_keyTakeaways: [],
                });
                setIsMajorOpen(false);
            },
        });
    }

    return (
        <AdminCampusLernLayout>
            <form className="min-h-[calc(100vh+200px)]" onSubmit={handleSubmit}>
                <Fieldset className="mx-auto flex w-2/3 flex-col gap-y-9 rounded-lg px-7 py-12 shadow-lg">
                    <Legend className="text-center text-4xl font-bold">
                        Tambah Mata Kuliah
                    </Legend>
                    <div className="flex flex-col gap-y-9">
                        <Field className="flex flex-col">
                            <Label className="text-xl">Mata Kuliah</Label>
                            <Input
                                className="rounded-lg"
                                type="text"
                                placeholder="e.g. Pengantar bisnis, Pengantar Akuntansi"
                                value={values.course_name}
                                name="course_name"
                                onChange={(e) => {
                                    setValues({
                                        ...values,
                                        course_name: e.target.value,
                                    });
                                }}
                            />
                        </Field>
                        <Field className="relative flex flex-col">
                            <Label className="text-xl">Universitas</Label>
                            <Listbox
                                value={selectedUniversity}
                                onChange={(e) => {
                                    setValues({
                                        ...values,
                                        university_id: e.id,
                                    });
                                    setSelectedUniversity(e);
                                    setMajorValues({
                                        ...majorValues,
                                        major_university_id: e.id,
                                    });
                                }}
                                name="university_id"
                            >
                                <ListboxButton className="h-[42px] rounded-lg border border-[#6b7280] px-3 py-2 text-left data-[open]:border-none data-[open]:ring-2 data-[open]:ring-[#2563eb]">
                                    {selectedUniversity.name}
                                </ListboxButton>
                                <ListboxOptions className="absolute top-[calc(100%+4px)] z-10 max-h-[150px] w-full cursor-pointer overflow-auto rounded-lg border border-[#6b7280] !bg-white">
                                    {dataSelects.universities.map(
                                        (university) => (
                                            <ListboxOption
                                                key={university.id}
                                                value={university}
                                                className="rounded-lg px-3 py-1 hover:bg-lightBluePrimary hover:text-white data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                            >
                                                {university.name}
                                            </ListboxOption>
                                        ),
                                    )}
                                    <ListboxOption
                                        value={{
                                            id: 0,
                                            name: "Pilih University",
                                        }}
                                        onClick={() => {
                                            setIsUniversityOpen(true);
                                        }}
                                        className="rounded-lg px-3 py-1 hover:bg-lightBluePrimary hover:text-white"
                                    >
                                        Tambah Universitas Baru
                                    </ListboxOption>
                                </ListboxOptions>
                            </Listbox>
                        </Field>
                        <Field className="relative flex flex-col">
                            <Label className="text-xl">Jurusan</Label>
                            <Listbox
                                value={selectedMajor}
                                onChange={(e) => {
                                    setValues({ ...values, major_id: e.id });
                                    setSelectedMajor(e);
                                }}
                                name="major_id"
                            >
                                <ListboxButton className="h-[42px] rounded-lg border border-[#6b7280] px-3 py-2 text-left data-[open]:border-none data-[open]:ring-2 data-[open]:ring-[#2563eb]">
                                    {selectedMajor.name}
                                </ListboxButton>

                                {selectedUniversity.id !== 0 && (
                                    <ListboxOptions className="absolute top-[calc(100%+4px)] z-10 max-h-[150px] w-full cursor-pointer overflow-auto rounded-lg border border-[#6b7280] !bg-white">
                                        {dataMajors.map((major) => (
                                            <ListboxOption
                                                key={major.id}
                                                value={major}
                                                className="rounded-lg px-3 py-1 hover:bg-lightBluePrimary hover:text-white data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                            >
                                                {major.name}
                                            </ListboxOption>
                                        ))}
                                        <ListboxOption
                                            value={{
                                                id: 0,
                                                name: "Pilih Jurusan",
                                            }}
                                            onClick={() => {
                                                setIsMajorOpen(true);
                                            }}
                                            className="rounded-lg px-3 py-1 hover:bg-lightBluePrimary hover:text-white data-[selected]:bg-lightBluePrimary data-[selected]:text-white"
                                        >
                                            Tambah Jurusan
                                        </ListboxOption>
                                    </ListboxOptions>
                                )}
                            </Listbox>
                        </Field>
                        <Field className="relative flex flex-col">
                            <Label className="text-xl">Semester</Label>
                            <Listbox
                                value={selectedSemester}
                                onChange={(e) => {
                                    setSelectedSemester(e);
                                    setValues({
                                        ...values,
                                        course_semester: e,
                                    });
                                }}
                                name="course_semester"
                            >
                                <ListboxButton className="rounded-lg border border-[#6b7280] px-3 py-2 text-left data-[open]:border-none data-[open]:ring-2 data-[open]:ring-[#2563eb]">
                                    Semseter {selectedSemester}
                                </ListboxButton>
                                <ListboxOptions className="absolute top-[calc(100%+4px)] z-10 h-[150px] w-full cursor-pointer overflow-auto rounded-lg border border-[#6b7280] !bg-white">
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
                                <div className="flex gap-2">
                                    <Input
                                        value={tagLink}
                                        onChange={(e) => {
                                            setTagLink(e.target.value);
                                        }}
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="e.g. pdf, video, image"
                                    />
                                    <Input
                                        value={urlLink}
                                        onChange={(e) => {
                                            setUrlLink(e.target.value);
                                        }}
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="https://google.com"
                                    />
                                    <Input
                                        value={displayLink}
                                        onChange={(e) => {
                                            setDisplayLink(e.target.value);
                                        }}
                                        className="w-full rounded-lg"
                                        type="text"
                                        placeholder="e.g. Lihat Google"
                                    />
                                </div>
                                <img
                                    src="/icon/add.svg"
                                    alt="icon add"
                                    className="size-10"
                                    onClick={handleAddLink}
                                />
                            </div>
                            <ul className="mt-1 space-y-1">
                                {values.links.map((e, i) => (
                                    <div key={i} className="flex items-center">
                                        <li className="w-fit rounded-full bg-slate-200 p-0.5 px-3 text-blue-600 underline">
                                            {e.display}
                                        </li>
                                        <img
                                            onClick={() => {
                                                setValues({
                                                    ...values,
                                                    links: values.links.filter(
                                                        (link, index) =>
                                                            i !== index,
                                                    ),
                                                });
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
                            Submit
                        </Button>
                    </div>
                </Fieldset>
            </form>
            <Dialog
                className="fixed inset-0 z-10 flex w-screen items-center justify-center overflow-y-auto backdrop-blur-md"
                open={isUniversityOpen}
                onClose={(e) => {
                    setIsUniversityOpen(false);
                }}
            >
                <DialogPanel className="w-1/2 min-w-[600px] rounded-lg border border-darkGreySecondary bg-white p-5">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleUniversitySubmit}
                    >
                        <DialogTitle className="text-xl">
                            Tambah Universitas Baru
                        </DialogTitle>
                        <Field className="flex flex-col">
                            <Label>Nama Universitas</Label>
                            <Input
                                className="rounded-md"
                                type="text"
                                value={universityValues.university_name}
                                onChange={(e) => {
                                    setUniversityValues({
                                        ...universityValues,
                                        university_name: e.target.value,
                                    });
                                }}
                            />
                        </Field>
                        <Button
                            type="submit"
                            className="w-fit self-end rounded bg-lightBluePrimary px-3 py-1 font-medium text-white"
                        >
                            Tambah
                        </Button>
                    </form>
                </DialogPanel>
            </Dialog>
            <Dialog
                className="fixed inset-0 z-10 flex w-screen items-center justify-center overflow-y-auto backdrop-blur-md"
                open={isMajorOpen}
                onClose={(e) => {
                    setIsMajorOpen(false);
                }}
            >
                <DialogPanel className="w-1/2 min-w-[600px] rounded-lg border border-darkGreySecondary bg-white p-5">
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleMajorSubmit}
                    >
                        <DialogTitle className="text-xl">
                            Tambah Jurusan Baru
                        </DialogTitle>
                        <Field className="flex flex-col">
                            <Label>Nama Jurusan</Label>
                            <Input
                                className="rounded-md"
                                type="text"
                                value={majorValues.major_name}
                                onChange={(e) => {
                                    setMajorValues({
                                        ...majorValues,
                                        major_name: e.target.value,
                                    });
                                }}
                            />
                        </Field>
                        <Field className="flex flex-col">
                            <Label>Deskripsi Jurusan</Label>
                            <Input
                                className="rounded-md"
                                type="text"
                                value={majorValues.major_description}
                                onChange={(e) => {
                                    setMajorValues({
                                        ...majorValues,
                                        major_description: e.target.value,
                                    });
                                }}
                            />
                        </Field>

                        <Field className="flex flex-col">
                            <Label>Key Takeways</Label>
                            <div className="flex gap-4">
                                <Input
                                    className="w-full rounded-md"
                                    type="text"
                                    value={keyTakeaways}
                                    onChange={(e) => {
                                        setKeyTakeaways(e.target.value);
                                    }}
                                />
                                <img
                                    src="/icon/add.svg"
                                    alt="icon add"
                                    className="size-10 cursor-pointer"
                                    onClick={handleAddKeyTakeaways}
                                />
                            </div>
                            <ul className="flex flex-wrap gap-x-3 gap-y-1 p-3">
                                {majorValues.major_keyTakeaways.map((e, i) => (
                                    <li className="flex items-center" key={i}>
                                        <p>{e}</p>
                                        <img
                                            onClick={() => {
                                                setMajorValues({
                                                    ...majorValues,
                                                    major_keyTakeaways:
                                                        majorValues.major_keyTakeaways.filter(
                                                            (e, index) =>
                                                                i !== index,
                                                        ),
                                                });
                                            }}
                                            src="/icon/cross.svg"
                                            alt="cross icon"
                                            className="size-5 cursor-pointer"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Field>

                        <Button
                            type="submit"
                            className="w-fit self-end rounded bg-lightBluePrimary px-3 py-1 font-medium text-white"
                        >
                            Tambah
                        </Button>
                    </form>
                </DialogPanel>
            </Dialog>
        </AdminCampusLernLayout>
    );
}
