import Link from "next/link";

const Logo = () => {
    return (
        <Link href={"/"} className="flex items-center gap-3 group">
            <div className="bg-surface text-gray-300 hover:text-primary transition-all duration-300">
                Ahmed Ibrahim
            </div>
        </Link>
    );
}

export default Logo;