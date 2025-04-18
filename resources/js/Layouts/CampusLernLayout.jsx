export default function CampusLernLayout({ children }) {
    return (
        <>
            <header className="fixed top-0 z-10 flex w-full justify-center border-b-2 border-[#bababa] bg-white px-20 shadow-md">
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
            <main className="min-h-[calc(100vh-85px)] w-full p-20 font-dmsans">
                {children}
            </main>
            <footer className="bg-darkBlueSecondary px-20 font-dmsans">
                <div className="mx-auto flex max-w-[1120px] items-center justify-between">
                    <img src="/logo/logo_footer.png" alt="logo footer" />
                    <p className="font-medium text-white">
                        Copyright © 2025 CampusLern.
                    </p>
                    <div className="flex gap-x-2.5">
                        <img src="/icon/email.svg" alt="email icon" />
                        <img src="/icon/instagram.svg" alt="instagram icon" />
                        <img src="/icon/x.svg" alt="instagram icon" />
                        <img src="/icon/tiktok.svg" alt="tiktok icon" />
                    </div>
                </div>
            </footer>
        </>
    );
}
