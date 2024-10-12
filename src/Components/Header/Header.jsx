import profile from"../../assets/profile.jpg"

const Header = () => {
    return (
        <div className="p-2 max-w-6xl mx-auto flex justify-between border-b-2 border-purple-600 items-center">
            <h1 className="text-2xl font-bold text-purple-600">BOOK-STORE</h1>
            <img src={profile} alt="" className="w-14 rounded-full"/>
        </div>
    );
};

export default Header;