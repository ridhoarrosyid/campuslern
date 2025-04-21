import AdminCampusLernLayout from "@/Layouts/AdminCampusLernLayout";

export default function DetailAdmin() {
    return (
        <AdminCampusLernLayout>
            <div className="mx-auto flex max-w-[1120px] flex-col gap-y-3 rounded-xl px-16 py-14 shadow-xl">
                <h1 className="text-3xl">Facebook Ads</h1>
                <p className="text-xl">
                    Facebook Ads adalah platform periklanan digital yang
                    menyediakan solusi pemasaran komprehensif bagi bisnis untuk
                    menjangkau target audiens mereka melalui ekosistem Meta
                    (Facebook, Instagram, Messenger, dan Audience Network).
                    Materi ini dirancang untuk memberikan pemahaman mendalam
                    tentang cara memanfaatkan Facebook Ads secara efektif, mulai
                    dari setup dasar hingga strategi lanjutan untuk
                    mengoptimalkan kampanye.
                </p>
                <div className="relative">
                    <p className="mx-auto flex w-fit rounded-lg border-2 border-lightBluePrimary bg-white px-[6px] py-[5px] text-sm font-medium text-lightBluePrimary">
                        Sumber Terpercaya
                    </p>
                    <hr className="absolute top-1/2 -z-10 w-full -translate-y-1/2 border-t-2 border-lightBluePrimary" />
                </div>
                <div className="grid grid-cols-[max-content_max-content] items-center gap-x-3 gap-y-2">
                    <p className="rounded-lg bg-green-400 px-2 text-center">
                        Official
                    </p>
                    <p>Google digital garage</p>
                    <p className="rounded-lg bg-red-400 px-2 text-center">
                        Article
                    </p>
                    <p>Hubspot Blog </p>
                    <p className="rounded-lg bg-purple-400 px-2 text-center">
                        Cousera
                    </p>
                    <p>Cousera: Digital marketing specialization</p>
                    <p className="rounded-lg bg-blue-400 px-2 text-center">
                        Guide
                    </p>
                    <p>HootSuite Academy</p>
                </div>
            </div>
            <div>Tombol edit delete</div>
        </AdminCampusLernLayout>
    );
}
