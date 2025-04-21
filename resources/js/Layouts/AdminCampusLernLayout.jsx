import BookIcon from "@/icon/Book";
import HomeIcon from "@/icon/Home";
import SettingIcon from "@/icon/Setting";

export default function AdminCampusLernLayout({ children, className }) {
    return (
        <>
            <div className="fixed left-0 h-full w-[235px] justify-stretch bg-[#f1f1f1] p-8 shadow-lg">
                <div className="flex items-center gap-2">
                    <img
                        src="/icon/user.svg"
                        className="w-10 rounded-full"
                        alt="photo profile"
                    />
                    <p className="text-xl">Ridho</p>
                </div>
                <div className="mt-8 flex flex-col justify-start pt-3">
                    <div className="flex gap-3 rounded-lg bg-lightBluePrimary px-[15px] py-3 text-white">
                        <HomeIcon className="size-6" /> <p>Dashboard</p>
                    </div>
                    <div className="flex gap-3 px-[15px] py-3 text-[#343434]">
                        <BookIcon className="size-6" /> <p>Materi</p>
                    </div>
                    <div className="flex gap-3 px-[15px] py-3 text-[#343434]">
                        <SettingIcon className="size-6" />
                        <p>Pengaturan</p>
                    </div>
                </div>
                <div className="absolute bottom-0 flex items-center gap-2 px-[15px] py-3 pb-[44px] text-[#343434]">
                    <img src="/icon/out.svg" alt="logo out" className="w-6" />
                    <p>Sign Out</p>
                </div>
            </div>
            <div className="w-[calc(100% - 235px)] ml-[235px] p-10">
                {children}
            </div>
        </>
    );
}
