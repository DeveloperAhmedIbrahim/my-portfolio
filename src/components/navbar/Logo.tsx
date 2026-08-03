import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-3 group">
            <div className="text-primary transition-all duration-300 rounded-full">
                Ahmed Ibrahim
            </div>
        </Link>
    );
}

export default Logo;