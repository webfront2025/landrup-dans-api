export default function Header({ text }){
    return(
        <header className=" items-center flex bg-[#5E2E53] h-[10vh] text-[#EAEAEA] text-[32px] px-[2rem] sticky top-0 z-[99]">
            <h1>{text}</h1>
        </header>
    )
}