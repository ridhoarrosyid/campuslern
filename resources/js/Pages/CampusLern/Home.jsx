export default function Home() {
    return (
        <div>
            <div className="flex justify-center border-b-2 border-[#bababa] px-20 shadow-md">
                <header className="flex h-20 w-full max-w-[1120px] items-center justify-between">
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
                </header>
            </div>
            <main></main>
            <footer></footer>
        </div>
    );
}
