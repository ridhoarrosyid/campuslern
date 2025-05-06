import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";
import { Link } from "@inertiajs/react";

export default function Dashboard({ courses }) {
    console.log(courses);
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
                            {courses.data.map((course) => (
                                <tr key={course.id}>
                                    <td className="p-3">{course.name} </td>
                                    <td className="p-3">{course.major.name}</td>
                                    <td className="p-3">{course.semester}</td>
                                    <td className="p-3">
                                        {course.major.university.name}
                                    </td>
                                    <td className="space-x-2 p-3 font-bold text-white">
                                        <Link
                                            href={`#`}
                                            className="rounded-lg bg-[#FACC15] p-2"
                                        >
                                            Edit
                                        </Link>
                                        <Link
                                            href={`/admin/${course.id}`}
                                            className="rounded-lg bg-lightBluePrimary p-2"
                                        >
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mx-auto mt-3 flex w-fit gap-x-2 text-base font-medium leading-none text-darkGreySecondary drop-shadow-2xl">
                        {courses.links.map((link, i) => (
                            <Link
                                key={i}
                                className={`p-2 ${link.active ? "rounded-md bg-lightBluePrimary p-2 text-white" : "rounded-sm"}`}
                                href={link.url || ""}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                </div>
            </AdminCampusLernLayout>
        </>
    );
}
