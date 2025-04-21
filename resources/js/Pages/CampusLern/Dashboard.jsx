import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";

export default function Dashboard() {
    return (
        <>
            <AdminCampusLernLayout>
                {" "}
                <div className="flex items-center justify-between">
                    <ul>
                        <li>
                            <span className="font-bold">Admin:</span> m.ridho
                        </li>
                        <li>
                            <span className="font-bold"> Email: </span>{" "}
                            ridho@gmai.com
                        </li>
                        <li>
                            <span className="font-bold">Id:</span> 1111
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="flex items-center rounded-lg bg-lightBluePrimary p-3 font-bold text-white"
                    >
                        <span>Add Materi</span>
                        <img
                            src="/icon/plus.svg"
                            alt="plus icon"
                            className="w-6"
                        />
                    </a>
                </div>
                <div className="mt-3">
                    <table className="w-full overflow-hidden rounded-lg shadow-lg">
                        <thead className="bg-lightBluePrimary text-left font-bold text-white">
                            <tr>
                                <th className="p-3">Mata Kuliah</th>
                                <th className="p-3">Jurusan</th>
                                <th className="p-3">Semester</th>
                                <th className="p-3">Universitas</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 8 }, (_, i) => i).map((e) => (
                                <tr key={e}>
                                    <td className="p-3">Facebook Ads</td>
                                    <td className="p-3">Bisnis Digital</td>
                                    <td className="p-3">3</td>
                                    <td className="p-3">Universitas Lampung</td>
                                    <td className="space-x-2 p-3 font-bold text-white">
                                        <a
                                            href="#"
                                            className="rounded-lg bg-[#FACC15] p-2"
                                        >
                                            Edit
                                        </a>
                                        <a
                                            href="#"
                                            className="rounded-lg bg-lightBluePrimary p-2"
                                        >
                                            Detail
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mx-auto mt-3 flex w-fit gap-x-2 text-base font-medium leading-none text-darkGreySecondary drop-shadow-2xl">
                        <div className="rounded-md bg-lightBluePrimary p-2 text-white">
                            1
                        </div>
                        <div className="rounded-sm p-2">2</div>
                        <div className="rounded-sm p-2">3</div>
                    </div>
                </div>
            </AdminCampusLernLayout>
        </>
    );
}
